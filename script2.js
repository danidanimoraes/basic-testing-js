const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
    return fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(data => {
            return {
                count: data.count,
                results: data.results
            }
        })
}

const getPeopleAsync = async (fetch) => {
    const res = await fetch('https://swapi.dev/api/people');
    const data = await res.json();
    return {
        count: data.count,
        results: data.results
    }
}

module.exports = {
    getPeopleAsync,
    getPeoplePromise
}