import { useParams } from "react-router";

export function InfoFilm() {
  let { id } = useParams();

  return <div className="">Pagina de informacion de pelicula: {id}</div>;
}
