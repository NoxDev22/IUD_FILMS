export function FilmCard({ filmName, filmImg, filmYear }) {
  return (
    <div className="filmCard">
      <figure className="filmCard__picture">
        <img src={filmImg} alt="" className="filmCard__img" />
      </figure>
      <div className="filmCard__footer">
        <p className="filmCard__name">{filmName}</p>
        <p className="filmCard__year">{filmYear}</p>
      </div>
    </div>
  );
}
