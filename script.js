let formElement = document.querySelector('.popup');
let btnPopupClose = document.querySelector('.popup__close');
let btnProfileEdit = document.querySelector('.profile__edit');
let formPopupForm = document.forms['.popup__form'];
let nameInput = document.querySelector('.popup__form-name');
let profileTitle = document.querySelector('.profile__title');
let jobInput = document.querySelector('.popup__form-job');
let profileSubtitle = document.querySelector('.profile__subtitle');


btnProfileEdit.addEventListener('click', function() {
    formElement.classList.add('popup-opened')
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
})

btnPopupClose.addEventListener('click', function() {
     formElement.classList.remove('popup-opened')
})

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    formElement.classList.remove('popup-opened')
   
}
formElement.addEventListener('submit', formSubmitHandler); 
