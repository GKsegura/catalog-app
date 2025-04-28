import { useCallback, useEffect, useState } from 'react';
import styles from './App.module.css';
import MovieCard from './components/MovieCard';
import { getPopularMovies, searchMovies } from './services/movieService';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = useCallback(async () => {
    try {
      let data;
      if (!search.trim()) {
        data = await getPopularMovies(page);
      } else {
        data = await searchMovies(search, page);
      }
      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  }, [search, page]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>🎬 Biblioteca de Filmes</h1>
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          type="text"
          placeholder="Buscar filme..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Buscar</button>
      </form>

      <div className={styles.movieList}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div>
        <button
          onClick={handlePrevPage}
          className={styles.pageButton}
          disabled={page <= 1}
        >
          ← Página Anterior
        </button>

        <button
          onClick={handleNextPage}
          className={styles.pageButton}
          disabled={page >= totalPages}
        >
          Próxima Página →
        </button>
      </div>
    </div>
  );
}

export default App;
