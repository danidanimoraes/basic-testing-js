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

    it('getPeople with mock', () => {
        const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 23,
                results: [0, 1, 2, 3, 4, 5]
            })
        }));
        expect.assertions(4);
        return swapi.getPeoplePromise(mockFetch).then(data => {
            expect(mockFetch.mock.calls.length).toBe(1);
            expect(mockFetch).toHaveBeenCalledWith('https://swapi.dev/api/people')
            expect(data).toBeDefined();
            expect(data.count).toBeGreaterThan(0);
        })
    })
});
