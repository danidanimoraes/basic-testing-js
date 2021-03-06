const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'dogs.com',
    'flowers.com',
    'rain.com',
    'howtolovedogs.com',
    'dogsdogsdogs.com',
    'dogsareawesome.com'
];

const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => website.includes(searchInput))
    return matches.slice(0, 3);
}

module.exports = googleSearch;