const googleSearch = require('./script');

const dbMock = [
    'disney.com',
    'lasagna.com',
    'dog.com',
    'happydog.com',
    'macaroni.com',
    'sopranos.com',
    'dogsareawesome.com',
    'dogsdogsdogs.com'
];

describe('googleSearch', () => {
    it('is searching invalid word', () => {
        expect(googleSearch('invalid', dbMock)).toEqual([])
    });

    it('is searching valid word with 2 results', () => {
        expect(googleSearch('dogs', dbMock)).toEqual(['dogsareawesome.com',
            'dogsdogsdogs.com'])
    });

    it('is searching valid word with top 3 results', () => {
        expect(googleSearch('dog', dbMock).length).toEqual(3);
    });

    it('works with undefined and null', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });
})


