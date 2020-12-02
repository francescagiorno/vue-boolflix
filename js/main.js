const app = new Vue({
   el: '#root',
   data: {
      myAPI: '18d96878a8e77682ff38f707ebc18bb0',
      film: [],
      input: ''
   },
   methods:{
      search: function(){
         axios.get('https://api.themoviedb.org/3/search/movie',
      {
         params: {
            api_key: this.myAPI,
            query: this.input
         }
      })
         .then(result => this.film = result.data.results);
      }
   },
})
