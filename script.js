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

const googleSearch = (searchInput) => {
    const matches = googleDatabase.filter(website => website.includes(searchInput))
    return matches.slice(0, 3);
}

console.log(googleSearch('dogs'));

module.exports = googleSearch;