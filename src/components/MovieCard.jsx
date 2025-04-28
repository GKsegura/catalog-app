import { useState } from 'react';
import { saveFavorite } from '../utils/favorites';
import { formatDate } from '../utils/formatDate';
import styles from './MovieCard.module.css';
import MovieModal from './MovieModal';

function MovieCard({ movie }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleFavorite = () => {
        saveFavorite(movie);
    };

    return (
        <div className={styles.card}>
            <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className={styles.image}
                onClick={() => setModalIsOpen(true)}
            />
            <h3 className={styles.title}>{movie.title}</h3>
            <p className={styles.description}>
                {movie.overview ? movie.overview.substring(0, 80) + '...' : 'Sem descrição.'}
            </p>
            <p className={styles.vote}><strong>Nota:</strong> ⭐ {movie.vote_average.toFixed(1)} em {movie.vote_count} votos</p>
            <p className={styles.releaseDate}><strong>Data:</strong> {formatDate(movie.release_date)}</p>
            <button onClick={handleFavorite} className={styles.favoriteButton}>❤️ Favoritar</button>

            <MovieModal
                movie={movie}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            />
        </div>
    );
}

export default MovieCard;
