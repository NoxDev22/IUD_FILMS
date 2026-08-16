export async function fetchMovies() {
  try {
    const response = await fetch("http://localhost:3000/iudfilms");
    if (!response.ok) throw new Error("Error en la obtención de los datos");
    const films = await response.json();
    console.log("Films JSON:", films);
    return films;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}
