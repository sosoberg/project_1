<<<<<<< HEAD
//var alcoholButtonEl = document.querySelector('.btn');
//var alcoholEl = document.querySelector('#alcohol');
var alcoholButtonEl = document.querySelector('#alcoholButton');
var mixerButtonEl = document.querySelector('#mixersButton')
var recipeButtonEl = document.querySelector('#modalBtn')
var drinkArray = []
=======
var alcoholButtonEl = document.querySelector('.btn');
var alcoholButtonEl = document.querySelector('#submit');
var mixerButtonEl = document.querySelector('#mixersButton');
var recipeButtonEl = document.querySelector('#modalBtn');
var drinkArray = [];
>>>>>>> 50224fd877842f2ed9bb21be98f0195e9a239a61


var buttonClickHandler = function () {
    console.log('clicked'); 
    alcoholChoice();
    mixersChoice();
  }


function alcoholChoice() {
  let alcohol = document.getElementsByName('alcohol');
  for(i = 0; i < alcohol.length; i++) { 
    if(alcohol[i].checked) {
      console.log(alcohol[i].value);
    } 
  }
}

function mixersChoice () {
  let mixers = document.getElementsByName('mixers');       
  for(i = 0; i < mixers.length; i++) { 
    if(mixers[i].checked) {
      console.log(mixers[i].value);
    } 
  } 
}

  var alcoholPick = event.target.getAttribute('data-alcohol');
<<<<<<< HEAD
  var pick2 = event.target.getAttribute('data-mixers')
  console.log(alcoholPick, pick2) //pick2 out
    if (alcoholPick, pick2) {//pick2 out
        getAlcohol(alcoholPick,pick2); //pick2 out
     } 
  };
  var getAlcohol = function (alcoholPick, pick2) { //pick2
    console.log(alcoholPick, pick2); //pick2
=======
  //var pick2 = event.target.getAttribute('data-mixers')
  console.log(alcoholPick) //pick2 out
    if (alcoholPick) {//pick2 out
        getAlcohol(alcoholPick); //pick2 out
     }
  
  var getAlcohol = function (alcoholPick) { //pick2
    console.log(alcoholPick); //pick2
>>>>>>> 50224fd877842f2ed9bb21be98f0195e9a239a61

    var apiUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" + alcoholPick + pick2; //pick2 out
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
             drinkArray.push(data.drinks[0].strDrink)
             drinkArray.push(data.drinks[1].strDrink)
             drinkArray.push(data.drinks[2].strDrink)
             drinkArray.push(data.drinks[3].strDrink)
             drinkArray.push(data.drinks[4].strDrink)

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
                
                getRecipe(drinkArray)  
                console.log(drinkArray)      
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to bartender');
      });
  };


   //YouTube function 92-110
  var buttonClickHandler3 = function (event){
    var alcoholName = document.querySelector(".carousel_card_visible > div > h4").innerHTML
    const YOUTUBE_API_KEY="AIzaSyD0xVeWqDSULJKbmLkUou2UAnZxZwSq-CM"
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=how%20to%20make%20${alcoholName}&key=${YOUTUBE_API_KEY}`;
    //fetch function following the aforementioned process
    fetch(url)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            document.querySelector(".youtubeVideo > iframe").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
            // make the modal visible
            document.querySelector(".modal").style.display="block"
          });
        } else {
          alert('Error: ' + response.statusText);
        }
    });
  }

  var getRecipe = function (recipePick) { 
    console.log(recipePick); 
    
    for (var i = 0; i < drinkArray.length; i++) {
      console.log(drinkArray[i])
      var apiUrl2 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkArray[i]; 
      console.log(apiUrl2)
      fetch(apiUrl2)
        .then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              console.log(data);
  
              var recipeDisplay = document.getElementById("recipe");
              console.log(recipeDisplay)
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
    }

};


     


  alcoholButtonEl.addEventListener('click', buttonClickHandler);
  //mixerButtonEl.addEventListener('click', buttonClickHandler2);
  recipeButtonEl.addEventListener('click', buttonClickHandler3);

