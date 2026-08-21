const FILTERED_MOVIES = movies.data.filter((movie) => {
  const matchTitle =
    !titulo || movie.titulo.toLowerCase().includes(titulo.toLowerCase());
  const matchGenre =
    !genero || movie.genero.toLowerCase() === genero.toLowerCase();
  const matchDirector =
    !director || movie.director.toLowerCase().includes(director.toLowerCase());
  const matchType = !tipo || movie.tipo.toLowerCase() === tipo.toLowerCase();

  return matchTitle && matchGenre && matchDirector && matchType;
});
