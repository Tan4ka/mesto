
let formElement = document.getElementById('edit_form');
let addFormElement = document.getElementById('add_form');
let formContainer = document.querySelector('.popup');
let addPlaceContainer = document.getElementById('add_place');
let btnAddPlaceClose = addPlaceContainer.querySelector('.popup__close');
let btnPopupClose = document.querySelector('.popup__close');
let btnProfileEdit = document.querySelector('.profile__edit');
let nameInput = document.querySelector('.popup__form-input_type_name');
let profileTitle = document.querySelector('.profile__title');
let jobInput = document.querySelector('.popup__form-input_type_job');
let profileSubtitle = document.querySelector('.profile__subtitle');

let btnProfileAdd = document.querySelector('.profile__add');
let placeInput = document.querySelector('.popup__form-input_type_place');
let linkInput = document.querySelector('.popup__form-input_type_link');

let photoContainer = document.getElementById('popup_photo');
let btnPhotoContainerClose = photoContainer.querySelector('.popup__close');
let imgPhoto = document.querySelector('.popup__photo');
let captionName = document.querySelector('.popup__caption-name');



const initialCards = [
    {
        name: 'Гомера',
        link: './images/la-gomera.jpg'
    },
    {
        name: 'Пальма',
        link: './images/la-palma.jpg'
    },
    {
        name: 'Лансароте',
        link: './images/lanzarote.jpg'
    },
    {
        name: 'Гран Канария',
        link: './images/gran-canaria.jpg'
    },
    {
        name: 'Фуэртевентура',
        link: './images/fuerteventura.jpg'
    },
    {
        name: 'Тенерифе',
        link: './images/tenerife.jpg'
    }
];
let elements = document.querySelector('.elements');

function addElement(element) {

    const elementCard = document.createElement('div');
    elementCard.addEventListener('click', function () {
        imgPhoto.setAttribute('src', element.link);
        captionName.textContent = element.name;
        photoContainer.classList.add('popup_opened');

    })

    elementCard.classList.add('elements__card');
    const elementImage = document.createElement('img');
    elementImage.setAttribute('src', element.link);
    elementImage.classList.add('elements__photo');
    const title = document.createElement('h2');
    title.classList.add('elements__text');
    title.appendChild(document.createTextNode(element.name));
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('elements__delete');
    deleteButton.addEventListener('click', function (evt) {
        evt.stopPropagation();
        const elementCard = deleteButton.closest('.elements__card');
        elementCard.remove();
    });
    const button = document.createElement('button');
    button.addEventListener('click', function (evt) {
        evt.stopPropagation();
        const isActive = evt.target.className.includes('active');
        evt.target.classList.toggle('elements__like_active', !isActive);
    });
    button.classList.add('elements__like');
    const place = document.createElement('div');
    place.classList.add('elements__place');
    place.appendChild(title);
    place.appendChild(button);

    elementCard.appendChild(elementImage);
    elementCard.appendChild(deleteButton);
    elementCard.appendChild(place);
    elements.prepend(elementCard);
}


initialCards.forEach(element => addElement(element));

btnProfileEdit.addEventListener('click', function () {
    formContainer.classList.add('popup_opened')
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
})

btnPopupClose.addEventListener('click', function () {
    formContainer.classList.remove('popup_opened');
})

btnAddPlaceClose.addEventListener('click', function () {
    addPlaceContainer.classList.remove('popup_opened');
})

btnProfileAdd.addEventListener('click', function () {
    addPlaceContainer.classList.add('popup_opened');
})

function profileFormSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    formContainer.classList.remove('popup_opened')

}
formElement.addEventListener('submit', profileFormSubmitHandler);

function placeFormSubmitHandler(evt) {
    evt.preventDefault();
    addElement({
        name: placeInput.value,
        link: linkInput.value
    })
    addPlaceContainer.classList.remove('popup_opened');

}
addFormElement.addEventListener('submit', placeFormSubmitHandler);


btnPhotoContainerClose.addEventListener('click', function () {
    photoContainer.classList.remove('popup_opened');
})



 