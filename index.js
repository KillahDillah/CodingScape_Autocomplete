/*
Add autocomplete hints to this text box using the following API endpoint.  

https://mock-autocomplete.herokuapp.com/autocomplete?q=v
*/

var app = new Vue ({
  el: "#root",
  data: {
      results: [],
      searchCity: '',
      chosenCity: '',
      isOpen : false,
  },
  methods: {  
    cityDropdown(event){      
      this.searchCity = [],
      this.searchCity.push( search.value),
      console.log(this.searchCity),
      this.isOpen = true,
      axios.get('https://mock-autocomplete.herokuapp.com/autocomplete?q=' + this.searchCity )
           .then(response => {
            this.results = response.data
        console.log(response.data, 'data')
        })
    },
    selectCity(result){
      this.chosenCity = result,
      this.isOpen= false;
      }
    },

});