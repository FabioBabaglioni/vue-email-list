const { createApp } = Vue

createApp({
  data() {
    return {

      mail: '',

    }
  },

  methods : {
  },

  mounted(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((result) => {
            this.mail = result.data.response
        });
    
  }

}).mount('#app')
