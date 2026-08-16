export class MODEL {
  // Lista de películas
  MOVIES = [];

  static async getAll({ titulo, genero, director, tipo, offset = 0 }) {
    const { default: movies } = await import("../../Public/data/movies.json", {
      with: { type: "json" },
    });

    const FILTERED_MOVIES = movies.data.filter((movie) => {
      const matchTitle =
        !titulo || movie.titulo.toLowerCase().includes(titulo.toLowerCase());
      const matchGenre =
        !genero || movie.genero.toLowerCase() === genero.toLowerCase();
      const matchDirector =
        !director ||
        movie.director.toLowerCase().includes(director.toLowerCase());
      const matchType =
        !tipo || movie.tipo.toLowerCase() === tipo.toLowerCase();

      return matchTitle && matchGenre && matchDirector && matchType;
    });

    const DATA = {
      resultados: FILTERED_MOVIES.length,
      ...movies,
      data: FILTERED_MOVIES,
    };

    this.MOVIES = DATA;

    return DATA;
  }
}
