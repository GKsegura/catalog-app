import api from '../api';

export async function getPopularMovies() {
    const response = await api.get('/movie/popular');
    return response.data;
}

export async function getMovieById(id) {
    const response = await api.get(`/movie/${id}`);
    return response.data;
}

export async function searchMovies(query) {
    const response = await api.get('/search/movie', {
        params: {
            query
        }
    });
    return response.data;
}
