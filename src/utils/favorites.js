export function saveFavorite(movie) {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const alreadyFavorited = storedFavorites.find(fav => fav.id === movie.id);

    if (!alreadyFavorited) {
        const newFavorites = [...storedFavorites, movie];
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        alert('Filme favoritado com sucesso!');
    } else {
        alert('Esse filme já está nos seus favoritos!');
    }
}
