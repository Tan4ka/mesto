
const popupEditForm = document.querySelector('#popup__edit_form');
const popupAddPlace = document.querySelector('#popup__add_place');
const popupPhotoView = document.querySelector('#popup__photo_view');

const popupFormEditProfile = document.querySelector('.popup__form_edit_profile');
const popupFormAddPlace = document.querySelector('.popup__form_add_place');

const btnProfileEdit = document.querySelector('.profile__edit');
const btnNewPlace = document.querySelector('.profile__add');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const profileEditFormNameInput = document.querySelector('.popup__form-input_type_name');
const profileEditFormJobInput = document.querySelector('.popup__form-input_type_job');

const addPlaceFormPlaceInput = document.querySelector('.popup__form-input_type_place');
const addPlaceFormLinkInput = document.querySelector('.popup__form-input_type_link');

const popupPhotoViewImage = document.querySelector('.popup__photo');
const popupPhotoViewCaption = document.querySelector('.popup__caption-name');

const btnPopupPhotoViewClose = popupPhotoView.querySelector('.popup__close');
const btnPopupAddPlaceClose = popupAddPlace.querySelector('.popup__close');
const btnPopupEditProfileClose = popupEditForm.querySelector('.popup__close');

const elements = document.querySelector('.elements');

function createCard(element) {
    const cardTemplate = document.querySelector('#card').content;
    const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);

    const cardImage = cardElement.querySelector('.elements__photo')
    cardImage.src = element.link
    cardImage.alt = element.alt
    cardImage.addEventListener('click', function () {
        popupPhotoViewImage.setAttribute('src', element.link);
        popupPhotoViewImage.setAttribute('alt', element.alt);
        popupPhotoViewCaption.textContent = element.name;
        popupPhotoView.classList.add('popup_opened');

    })

    cardElement.querySelector('.elements__text').textContent = element.name;

    cardElement.querySelector('.elements__delete').addEventListener('click', function (evt) {
        cardElement.remove();
    });

    cardElement.querySelector('.elements__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like_active');
    });

    return cardElement
}

function renderCard(card) {
    elements.prepend(card);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}


initialCards.forEach(element => {
    const card = createCard(element)
    renderCard(card)
});

btnProfileEdit.addEventListener('click', function () {
    openPopup(popupEditForm)
    profileEditFormNameInput.value = profileTitle.textContent;
    profileEditFormJobInput.value = profileSubtitle.textContent;
})

btnPopupEditProfileClose.addEventListener('click', function () {
    closePopup(popupEditForm)
})

btnPopupAddPlaceClose.addEventListener('click', function () {
    closePopup(popupAddPlace)
})

btnNewPlace.addEventListener('click', function () {
    openPopup(popupAddPlace)
})

function profileFormSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = profileEditFormNameInput.value;
    profileSubtitle.textContent = profileEditFormJobInput.value;
    closePopup(popupEditForm)

}
popupFormEditProfile.addEventListener('submit', profileFormSubmitHandler);

function placeFormSubmitHandler(evt) {
    evt.preventDefault();
    const card = createCard({
        name: addPlaceFormPlaceInput.value,
        link: addPlaceFormLinkInput.value
    })
    renderCard(card)
    closePopup(popupAddPlace)
    popupFormAddPlace.reset()

}
popupFormAddPlace.addEventListener('submit', placeFormSubmitHandler);


btnPopupPhotoViewClose.addEventListener('click', function () {
    closePopup(popupPhotoView)
})
