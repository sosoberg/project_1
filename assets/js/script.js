var alcoholButtonEl = document.querySelector('.btn');
//var alcoholEl = document.querySelector('#alcohol');
var alcoholButtonEl = document.querySelector('#alcoholButton');
var mixerButtonEl = document.querySelector('#mixersButton')


var buttonClickHandler = function (event) {
    if (!event.target.matches("button")){
        return;
    }
  var alcoholPick = event.target.getAttribute('data-alcohol');
  //var pick2 = event.target.getAttribute('data-mixers')
  console.log(alcoholPick) //pick2 out
    if (alcoholPick) {//pick2 out
        getAlcohol(alcoholPick); //pick2 out
     } 
  };
  var getAlcohol = function (alcoholPick) { //pick2
    console.log(alcoholPick); //pick2

    var apiUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" + alcoholPick; //pick2 out
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
            //drinkDisplay(data, alcoholPick);//pick2 out

            var alcoholDisplay = document.getElementById("imgDisplay");
            alcoholDisplay.setAttribute("src", data.drinks[0].strDrinkThumb)
            console.log(alcoholDisplay);

             var titleDisplay = document.getElementById("titleDisplay");
             titleDisplay.innerHTML = data.drinks[0].strDrink;
             console.log(titleDisplay);

             var alcoholDisplay1 = document.getElementById("imgDisplay1");
            alcoholDisplay1.setAttribute("src", data.drinks[1].strDrinkThumb)
            console.log(alcoholDisplay1);

             var titleDisplay1 = document.getElementById("titleDisplay1");
             titleDisplay1.innerHTML = data.drinks[1].strDrink;
             console.log(titleDisplay1);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to bartender');
      });
  };
  //var drinkDisplay {

  //}

   //var alcoholDisplay = document.createElement("imgDisplay");
         //alcoholDisplay.setAttribute ("src", `data.drinks[3].strDrinkThumb.jpg`)
          //console.log(alcoholDisplay.src);
          //console.log(alcoholDisplay);
  

  alcoholButtonEl.addEventListener('click', buttonClickHandler);
  //mixerButtonEl.addEventListener('click', buttonClickHandler2);

