import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `elements__like ${
    isLiked && "elements__like_active"
  }`;
  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }
  function handleDeleteClick() {
    props.onCardDelete(props.card._id);
  }
  return (
    <div className="elements__element">
      {isOwn && (
        <button className="elements__delete" onClick={handleDeleteClick} />
      )}

      <img
        className="elements__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="elements__container-title">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-container">
          <button
            onClick={handleLikeClick}
            className={cardLikeButtonClassName}
            type="button"
          ></button>
          <span>{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}
export default Card;
