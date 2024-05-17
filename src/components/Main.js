import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../context/CurrentUserContext";
function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      {/*   profile  */}
      <section className="profile">
        <div onClick={props.onEditAvatar} className="profile__avatar">
          <img
            className="profile__avatar-img"
            src={currentUser.avatar}
            alt="avatar"
          />
          <div className="profile__avatar-hover"></div>
        </div>

        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              onClick={props.onEditProfile}
              className="profile__edit-info"
              type="button"
            ></button>
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-card"
          type="button"
        ></button>
      </section>
      {/*     elements  */}
      <section className="elements">
        {props.cards.map((item) => (
          <Card
            key={item._id}
            card={item}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </>
  );
}
export default Main;
