export async function fetchMovies(filters = {}, page = 1, filmId, limit = 8) {
  try {
    const offset = (page - 1) * limit;

    const queryParams = new URLSearchParams({ offset: offset, limit });

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        // Agrega solo si el valor no está vacío
        queryParams.append(key, filters[key]);
      }
    });
    const queryString = queryParams.toString();
    const url = `http://localhost:5100/iudfilms${queryString ? `?${queryString}` : ``}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Error en la obtención de los datos");

    const films = await response.json();

    return films;
  } catch (error) {
    console.error("Fetch error:", error);
    return { movies: [], total: 0, totalPages: 1 };
  }
}
