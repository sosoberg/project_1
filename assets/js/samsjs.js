var modalBtn = document.querySelector('#modalBtn');
var modal = document.querySelector('.modal');
var mainPage = document.querySelector('main');
var asidePage = document.querySelector('.ingredients');
var header = document.querySelector('.title')

modalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
    mainPage.style.display = 'none';
    asidePage.style.display = 'none';
    header.style.display = 'none';
});

document.querySelector('#closeBtn').addEventListener('click', function () {
    modal.style.display = 'none';
    mainPage.style.display = 'flex';
    asidePage.style.display = 'block';
    header.style.display = 'block';
});