import { useEffect, useState } from "react";
import { Header } from "./components/header";
import { Main } from "./layout/main";
//Obteniendo los datos
import { fetchMovies } from "./services/fetchFilms";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const films = await fetchMovies();
        console.log("Films:", films);
        setMovies(films);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    getData();
  }, []);

  if (movies.length === 0) return;
  return (
    <>
      <Header />
      <Main listOfFilms={movies} />
    </>
  );
}

export default App;
