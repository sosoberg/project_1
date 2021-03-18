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
<<<<<<< HEAD
    var apiUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i="+ alcoholPick +'';
=======
    var apiUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" +alcoholPick+'' ;
>>>>>>> c74f20e53dab82f8914759ca6af44a3c4a2a4d33
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
  
<<<<<<< HEAD


  alcoholButtonEl.addEventListener('click', buttonClickHandler);
=======
  alcoholButtonEl.addEventListener('click', buttonClickHandler);


>>>>>>> c74f20e53dab82f8914759ca6af44a3c4a2a4d33
