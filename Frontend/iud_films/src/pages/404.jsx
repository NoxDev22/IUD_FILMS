import { Link } from "react-router";

export function NotFound() {
  return (
    <main className="page404_main">
      <section className="page404">
        <figure className="page404_figure">
          <img
            src="./images/404.png"
            alt="Imagen de batman sobre un edificio de ciudad gótica."
            className="page404_img"
          />
        </figure>
        <div className="page404_texts">
          <h2 className="page404_title">Pagina no encontrada</h2>
          <h3 className="page404_subtitle">
            Esto no esta en el guion, ciudadano.
          </h3>
          <p className="page404_text">
            Has llegado al callejón del crimen de nuestro sitio,esta pagina
            (404) parece haber desaparecido en la oscuridad de gotham. Lo que
            esta buscando no se encuentra en nuestros archivos en este momento.
          </p>
          <Link to={"/"}>
            <img
              src="./images/404btn.png"
              alt="imagen de botón con un murciélago"
              className="page404_btnBackToHome"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
