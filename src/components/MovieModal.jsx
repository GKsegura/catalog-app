import Modal from 'react-modal';
import { formatDate } from '../utils/formatDate';

Modal.setAppElement('#root');

function MovieModal({ movie, isOpen, onRequestClose }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                content: {
                    maxWidth: '600px',
                    margin: 'auto',
                    padding: 20,
                }
            }}
        >
            <h2>{movie.title}</h2>
            <img
                src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                alt={movie.title}
                style={{ width: '100%', borderRadius: 10 }}
            />
            <p><strong>Descrição:</strong> {movie.overview || 'Sem descrição.'}</p>
            <p><strong>Nota:</strong> ⭐ {movie.vote_average.toFixed(1)}</p>
            <p><strong>Votos:</strong> 🗳️ {movie.vote_count}</p>
            <p><strong>Data de Lançamento:</strong> {formatDate(movie.release_date)}</p>
            <button onClick={onRequestClose} style={{ marginTop: 20 }}>Fechar</button>
        </Modal>
    );
}

export default MovieModal;
