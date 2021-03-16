var alcoholButtonEl = document.querySelector('.btn');
//var alcoholEl = document.querySelector('#alcohol');
var alcoholButtonEl = document.querySelector('#alcoholButton');


var buttonClickHandler = function (event) {
    if (!event.target.matches("button")){
        return;
    }
   var alcoholPick = event.target.getAttribute('data-alcohol');
  
    if (alcoholPick) {
        console.log(alcoholPick);
        getAlcohol(alcoholPick);
     } 
  };
  var getAlcohol = function (alcoholPick) {
    console.log(alcoholPick);
    var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +alcoholPick+'' ;
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
            //displayDrinks(data, alcoholPick);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to bartender');
      });
  };
  
  alcoholButtonEl.addEventListener('click', buttonClickHandler);

  