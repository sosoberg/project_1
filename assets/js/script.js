var alcoholButtonEl = document.querySelector('.btn');
//var alcoholEl = document.querySelector('#alcohol');
var alcoholButtonEl = document.querySelector('#alcoholButton');


var buttonClickHandler = function (event) {
    if (!event.target.matches("button")){
        return;
    }
  var alcoholPick = event.target.getAttribute('data-alcohol');
  console.log(alcoholPick)
    if (alcoholPick) {
        getAlcohol(alcoholPick);
     } 
  };
  var getAlcohol = function (alcoholPick) {
    console.log(alcoholPick);
    var apiUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i="+ alcoholPick + pick2;
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
            drinkDisplay(data, alcoholPick);
          
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