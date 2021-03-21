var modalBtn = document.querySelectorAll('.modalbtn');
var modal = document.querySelector('.modal');
var mainPage = document.querySelector('main');
var asidePage = document.querySelector('.ingredients');
var header = document.querySelector('.title')
console.log(titleDisplay1.value)

for (var i = 0; i < modalBtn.length; i++){
    
    modalBtn[i].addEventListener('click', function() {
        modal.style.display = 'block';
        mainPage.style.display = 'none';
        asidePage.style.display = 'none';
        header.style.display = 'none';
    });
    
}

document.querySelector('#closeBtn').addEventListener('click', function () {
    modal.style.display = 'none';
    mainPage.style.display = 'flex';
    asidePage.style.display = 'block';
    header.style.display = 'block';
});

// function testValue() {
//     if (titleDisplay = 'undefined') {
//         console.log('test')

//     } else if(titleDisplay1 = 'undefined') {

//     } else if(titleDisplay2 = 'undefined') {

//     } else if(titleDisplay3 = 'undefined') {

//     } else if(titleDisplay4 = 'undefined') {
        
//     } else {
//         console.log('no value selected')
//         document.querySelector('.grid').style.display = 'none';
//         document.querySelector('.errorMessage').style.display = 'block'
//     }
// }
// testValue();