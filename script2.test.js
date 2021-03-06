const fetch = require('node-fetch');
const swapi = require('./script2');

describe('swapi', () => {
    // Option 1: RETURN THE PROMISE
    it('calls getPeopleAsync', () => {
        expect.assertions(2);
        return swapi.getPeopleAsync(fetch).then(data => {
            expect(data).toBeDefined();
            expect(data.count).toBeGreaterThan(0);
        });
    });

    // Option 2: USE DONE()
    it('calls getPeoplePromise', (done) => {
        expect.assertions(2);
        swapi.getPeoplePromise(fetch).then(data => {
            expect(data).toBeDefined();
            expect(data.count).toBeGreaterThan(0);
            done();
        });
    });
});
