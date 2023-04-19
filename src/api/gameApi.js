export const fetchGames = () => {
    return fetch('http://localhost:5000/games')
        .then(response => response.json())
        .catch(error => console.error(error));
}
