import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";
function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => console.log(`catch: ${err}`));
  }, []);
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
  return (
    <>
      {/*   profile  */}
      <section className="profile">
        <div onClick={props.onEditAvatar} className="profile__avatar">
          <img className="profile__avatar-img" src={userAvatar} alt="avatar" />
          <div className="profile__avatar-hover"></div>
        </div>

        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={props.onEditProfile}
              className="profile__edit-info"
              type="button"
            ></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-card"
          type="button"
        ></button>
      </section>
      {/*     elements  */}
      <section className="elements">
        {cards.map((item) => (
          <Card key={item._id} card={item} onCardClick={props.onCardClick} />
        ))}
      </section>
    </>
  );
}
export default Main;
