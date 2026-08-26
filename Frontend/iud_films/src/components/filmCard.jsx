import { useNavigate } from "react-router";

export function FilmCard({ filmId, filmName, filmImg, filmYear }) {
  const navigate = useNavigate();
  return (
    <div className="filmCard">
      <figure
        className="filmCard__picture"
        onClick={() => {
          navigate(`/${filmId}`);
        }}
      >
        <img src={filmImg} alt="" className="filmCard__img" />
      </figure>
      <div className="filmCard__footer">
        <p className="filmCard_text filmCard__name">{filmName}</p>
        <p className="filmCard_text filmCard__year">{filmYear}</p>
      </div>
    </div>
  );
}
