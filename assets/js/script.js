var alcoholButtonEl = document.querySelector('.btn');
//var alcoholEl = document.querySelector('#alcohol');
var alcoholButtonEl = document.querySelector('#alcoholButton');
var mixerButtonEl = document.querySelector('#mixersButton')
var recipeButtonEl = document.querySelector('#modalBtn')



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
            alcoholDisplay.setAttribute("src", data.drinks[0].strDrinkThumb);
            alcoholDisplay.classList.add("drinkImage");
            

             var titleDisplay = document.getElementById("titleDisplay");
             titleDisplay.innerHTML = data.drinks[0].strDrink;
             

             var alcoholDisplay1 = document.getElementById("imgDisplay1");
            alcoholDisplay1.setAttribute("src", data.drinks[1].strDrinkThumb);
            alcoholDisplay1.classList.add("drinkImage");
            

             var titleDisplay1 = document.getElementById("titleDisplay1");
             titleDisplay1.innerHTML = data.drinks[1].strDrink;
            

             var alcoholDisplay2 = document.getElementById("imgDisplay2");
             alcoholDisplay2.setAttribute("src", data.drinks[2].strDrinkThumb);
             alcoholDisplay2.classList.add("drinkImage");
             
 
              var titleDisplay2 = document.getElementById("titleDisplay2");
              titleDisplay2.innerHTML = data.drinks[2].strDrink;
              

              var alcoholDisplay3 = document.getElementById("imgDisplay3");
              alcoholDisplay3.setAttribute("src", data.drinks[3].strDrinkThumb);
              alcoholDisplay3.classList.add("drinkImage");
              console.log(alcoholDisplay3);
  
               var titleDisplay3 = document.getElementById("titleDisplay3");
               titleDisplay3.innerHTML = data.drinks[3].strDrink;
               

               var alcoholDisplay4 = document.getElementById("imgDisplay4");
               alcoholDisplay4.setAttribute("src", data.drinks[4].strDrinkThumb);
               alcoholDisplay4.classList.add("drinkImage");
               
   
                var titleDisplay4 = document.getElementById("titleDisplay4");
                titleDisplay4.innerHTML = data.drinks[4].strDrink;

        
                
                getRecipe(data.drinks[0].strDrink)     
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to bartender');
      });
  };

  var buttonClickHandler3 = function (event){
  //var recipePick = data.drinks[0].strDrink
  //var recipePick = document.getElementById('titleDisplay').textContent;
  //console.log(recipePick)
 // if (recipePick) {
  //  getRecipe(recipePick);
 // }
  };

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }
  var getRecipe = function (recipePick) { 
    console.log(recipePick); 

    var apiUrl2 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + recipePick; 
    fetch(apiUrl2)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);

            var recipeDisplay = document.getElementById("recipe");
            recipeDisplay.innerHTML=data.drinks[0].strInstructions;
            console.log(recipeDisplay);

        });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
  .catch(function (error) {
    alert('broken');
  });
};

        
        


  alcoholButtonEl.addEventListener('click', buttonClickHandler);
  //mixerButtonEl.addEventListener('click', buttonClickHandler2);
  recipeButtonEl.addEventListener('click', buttonClickHandler3);

