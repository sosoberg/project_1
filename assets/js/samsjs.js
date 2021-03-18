var modalBtn = document.querySelector('#modalBtn');
var modal = document.querySelector('.modal');
var mainPage = document.querySelector('main');
var asidePage = document.querySelector('aside');
var header = document.querySelector('.title')

//button to switch to modal
modalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
    mainPage.style.display = 'none';
    asidePage.style.display = 'none';
    header.style.display = 'none';
});

//button to close modal
document.querySelector('#closeBtn').addEventListener('click', function () {
    modal.style.display = 'none';
    mainPage.style.display = 'flex';
    asidePage.style.display = 'block';
    header.style.display = 'block';
});