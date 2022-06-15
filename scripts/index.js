let formElement = document.querySelector('.popup__form');
let formContainer = document.querySelector('.popup');
let btnPopupClose = document.querySelector('.popup__close');
let btnProfileEdit = document.querySelector('.profile__edit');
let nameInput = document.querySelector('.popup__form-input-name');
let profileTitle = document.querySelector('.profile__title');
let jobInput = document.querySelector('.popup__form-input-job');
let profileSubtitle = document.querySelector('.profile__subtitle');


btnProfileEdit.addEventListener('click', function () {
    formContainer.classList.add('popup_opened')
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
})

btnPopupClose.addEventListener('click', function () {
    formContainer.classList.remove('popup_opened')
})

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    formContainer.classList.remove('popup_opened')

}
formElement.addEventListener('submit', formSubmitHandler); 
