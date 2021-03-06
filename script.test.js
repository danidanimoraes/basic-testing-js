const googleSearch = require('./script');

const dbMock = [
    'disney.com',
    'lasagna.com',
    'dog.com',
    'happydog.com',
    'macaroni.com',
    'sopranos.com',
];

it('test', () => {
    googleSearch('testetsts', dbMock)
})