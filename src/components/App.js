import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddPlacePopup from "./AddPlacePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../context/CurrentUserContext";
function App() {
  // Добавить новую карточку
  function handleAddPlaceSubmit(newCard) {
    api
      .postCard(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(`catch: ${err}`));
  }
  //Обновляем аватар
  function handleUpdateAvatar(avatar) {
    api
      .updateAvatar(avatar)
      .then((avatar) => {
        setIscurrentUser(avatar);
        closeAllPopups();
      })
      .catch((err) => console.log(`catch: ${err}`));
  }
  //Обработчик инфы о пользователе
  function handleUpdateUser({ name, about }) {
    api
      .updateUserInfo({ name, about })
      .then((newProfile) => {
        setIscurrentUser(newProfile);
        closeAllPopups();
      })
      .catch((err) => console.log(`catch: ${err}`));
  }
  /* получаем карточки */
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api
      .getCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(`catch: ${err}`));
  }, []);
  //Обработчик удаления
  function handleCardDelete(card) {
    api
      .deleteCard(card)
      .then(() => {
        //с помощью метода filter создаем копию массива, исключив из него удалённую карточку.
        setCards((state) => state.filter((c) => c._id !== card));
      })
      .catch((err) => console.log(`catch: ${err}`));
  }
  //Обработчик лайков
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    if (!isLiked) {
      api
        .addLike(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log(`catch: ${err}`));
    } else {
      api
        .deleteLike(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log(`catch: ${err}`));
    }
  }

  //Состояние информации о пользователе
  const [currentUser, setIscurrentUser] = React.useState({
    name: "",
    about: "",
    avatar: "",
  });

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setIscurrentUser(data);
      })
      .catch((err) => console.log(`catch: ${err}`));
  }, []);
  //Состояние попапов
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  };
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          cards={cards}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <AddPlacePopup
          onAddPlace={handleAddPlaceSubmit}
          isOpen={isAddPlacePopupOpen}
          isClose={closeAllPopups}
        />
        <EditProfilePopup
          onUpdateUser={handleUpdateUser}
          isOpen={isEditProfilePopupOpen}
          isClose={closeAllPopups}
        />
        <EditAvatarPopup
          onUpdateAvatar={handleUpdateAvatar}
          isOpen={isEditAvatarPopupOpen}
          isClose={closeAllPopups}
        />
        <ImagePopup card={selectedCard} isClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
