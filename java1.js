//var alcoholButtonEl = document.querySelector('#alcoholbutton');
var alcoholEl = document.querySelector('#alcohol');

var alcoholButtonEl = document.querySelector('#gin');
var buttonClickHandler = function (event) {
    var alcoholPick = event.target.getAttribute('#gin');
  
    if (alcoholPick) {
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