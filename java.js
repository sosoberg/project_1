var alcoholNameInputEl = document.querySelector('#alcoholName');
var searchButtonEl= document.querySelector('#searchForm');


var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var alcoholName = alcoholNameInputEl.value.trim();
    console.log("hello");
    if (alcoholName) {
        getAlcohol(alcoholName);
  
       //AlcoholContainerEl.textContent = '';
       //AlcoholInputEl.value = '';
    } else {
      alert('Please enter a booze or you ain\'t going to get drunk');
    }
  };

var getAlcohol = function (alcoholName) {
    console.log(alcoholName);
    var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + alcoholName;
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
            //displayDrinks(data, alcoholName);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to the boozerator');
      });
  };

  searchButtonEl.addEventListener('submit', formSubmitHandler);