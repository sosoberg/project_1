var modalBtn = document.querySelector('#modalBtn');
var modal = document.querySelector('.modal');
var mainPage = document.querySelector('.container');

modalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
    mainPage.style.display = 'none';

});

document.querySelector('#closeBtn').addEventListener('click', function () {
    modal.style.display = 'none';
    mainPage.style.display = 'block';
});