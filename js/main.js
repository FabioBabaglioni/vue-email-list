const { createApp } = Vue

createApp({
  data() {
    return {

      mail: '',

    }
  },

  methods : { 

        randoMail(){
            for(let i = 0; i < 11; i++){

            }
        }

    },

  mounted(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((result) => {
            this.mail = result.data.response
            console.log(result.data.response)
        });
    
         }

}).mount('#app')
