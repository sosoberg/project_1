var alcoholButtonEl = document.querySelector('.btn');
var alcoholButtonEl = document.querySelector('#submit');
var mixerButtonEl = document.querySelector('#mixersButton');
var recipeButtonEl = document.querySelector('#modalBtn');
var drinkArray = [];
let alcoholPick, mixersPick;


function alcoholChoice() {
  let alcohol = document.getElementsByName('alcohol');
  for(i = 0; i < alcohol.length; i++) { 
    if(alcohol[i].checked) {
      console.log(alcohol[i].value);
      alcoholPick = alcohol[i].value;
    } 
  }
}

function mixersChoice () {
  let mixers = document.getElementsByName('mixers');       
  for(i = 0; i < mixers.length; i++) { 
    if(mixers[i].checked) {
      console.log(mixers[i].value);
      mixersPick = mixers[i].value;
    } 
  } 
}

document.querySelector('.history1').textContent = localStorage.getItem('0')
document.querySelector('.history2').textContent = localStorage.getItem('1')
document.querySelector('.history3').textContent = localStorage.getItem('2')
document.querySelector('.history4').textContent = localStorage.getItem('3')
document.querySelector('.history5').textContent = localStorage.getItem('4')
document.querySelector('.history6').textContent = localStorage.getItem('5')
document.querySelector('.history7').textContent = localStorage.getItem('6')
document.querySelector('.history8').textContent = localStorage.getItem('7')
document.querySelector('.history9').textContent = localStorage.getItem('8')



var buttonClickHandler = function () {
  console.log('clicked'); 
  
  alcoholChoice();
  mixersChoice();

    var apiUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" + alcoholPick + ',' + mixersPick; //pick2 out
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
            
            //Local Storage

            var length = localStorage.length;

            localStorage.setItem(length, alcoholPick + ' and ' + mixersPick)
            document.querySelector('.history1').textContent = localStorage.getItem('0')
            document.querySelector('.history2').textContent = localStorage.getItem('1')
            document.querySelector('.history3').textContent = localStorage.getItem('2')
            document.querySelector('.history4').textContent = localStorage.getItem('3')
            document.querySelector('.history5').textContent = localStorage.getItem('4')
            document.querySelector('.history6').textContent = localStorage.getItem('5')
            document.querySelector('.history7').textContent = localStorage.getItem('6')
            document.querySelector('.history8').textContent = localStorage.getItem('7')
            document.querySelector('.history9').textContent = localStorage.getItem('8')
            
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
             const modalBtn = document.querySelector(".modalbtn");
             console.log(modalBtn);
             modalBtn.addEventListener("click", function(){
              console.log("hi")
              getRecipe(data.drinks[0])
            })

             var alcoholDisplay1 = document.getElementById("imgDisplay1");
            alcoholDisplay1.setAttribute("src", data.drinks[1].strDrinkThumb);
            alcoholDisplay1.classList.add("drinkImage");
            
            

             var titleDisplay1 = document.getElementById("titleDisplay1");
             titleDisplay1.innerHTML = data.drinks[1].strDrink;
             const modalBtn1 = document.querySelector(".modalbtn1");
             console.log(modalBtn1);
             modalBtn1.addEventListener("click", function(){
              console.log("hi")
              getRecipe(data.drinks[1])
            })

             var alcoholDisplay2 = document.getElementById("imgDisplay2");
             alcoholDisplay2.setAttribute("src", data.drinks[2].strDrinkThumb);
             alcoholDisplay2.classList.add("drinkImage");
             
 
              var titleDisplay2 = document.getElementById("titleDisplay2");
              titleDisplay2.innerHTML = data.drinks[2].strDrink;
              const modalBtn2 = document.querySelector(".modalbtn2");
              console.log(modalBtn2);
              modalBtn2.addEventListener("click", function(){
              console.log("hi")
              getRecipe(data.drinks[2])
            })
              

              var alcoholDisplay3 = document.getElementById("imgDisplay3");
              alcoholDisplay3.setAttribute("src", data.drinks[3].strDrinkThumb);
              alcoholDisplay3.classList.add("drinkImage");
              console.log(alcoholDisplay3);
  
               var titleDisplay3 = document.getElementById("titleDisplay3");
               titleDisplay3.innerHTML = data.drinks[3].strDrink;
               const modalBtn3 = document.querySelector(".modalbtn3");
               console.log(modalBtn3);
              modalBtn3.addEventListener("click", function(){
              console.log("hi")
              getRecipe(data.drinks[3])
            })
               

               var alcoholDisplay4 = document.getElementById("imgDisplay4");
               alcoholDisplay4.setAttribute("src", data.drinks[4].strDrinkThumb);
               alcoholDisplay4.classList.add("drinkImage");
               
   
                var titleDisplay4 = document.getElementById("titleDisplay4");
                titleDisplay4.innerHTML = data.drinks[4].strDrink;
                const modalBtn4 = document.querySelector(".modalbtn2");
                console.log(modalBtn4);
                modalBtn4.addEventListener("click", function(){
                getRecipe(data.drinks[4])
            })
                
                
                console.dir(modalBtn1)
                
              // getRecipe(drinkArray)  
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
    console.log({recipePick}); 
    
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

              var alcoholName = document.querySelector(".carousel_card_visible > div > h4").innerHTML
              var nameDisplay = document.getElementById ("name");
              nameDisplay.innerHTML = alcoholName;
  
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

  recipeButtonEl.addEventListener('click', buttonClickHandler3);

