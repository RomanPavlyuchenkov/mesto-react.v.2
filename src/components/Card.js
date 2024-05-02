function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <div className="elements__element">
      <button className="elements__delete" type="button"></button>

      <img
        className="elements__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="elements__container-title">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-container">
          <button className="elements__like" type="button"></button>
          <span>{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}
export default Card;
