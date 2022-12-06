const { createApp } = Vue

createApp({
  data() {
    return {

      mail: '',

    //   mi creo un array vuoto che posso popolare
      eMail : [],

      // mi creo il numero di mail che voglio generare
      numEmail : 10,

    }
  },

  methods : { 

    // creo randoEmail per popolare l'array
    randoMail(){
        // creo nil ciclo per stamparmi la mail 10 volte
        for(let i = 0; i < this.numEmail; i++){

            // mi richiamo axios
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")

            // uso una arrow function per poter uscire da questo scop
            .then((result) => {
            
            // richiamo le mail generate automaticamente
            this.mail = result.data.response
            console.log(this.mail);
            // pusho la mail creato nell'array
            this.eMail.push(this.mail)
            });
        }
    }

    },

  mounted(){

    // faccio partire la funzione in modo asincrono rispetto al caricamento della pèagina 
    this.randoMail()

    }

}).mount('#app')
