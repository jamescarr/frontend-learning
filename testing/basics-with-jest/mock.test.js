function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

describe('Using Mocks', () => {
    const mockCallback = jest.fn(x => 42 + x);

    beforeEach(() => {
        forEach([0, 1], mockCallback);
    })

    it('is called twice', () => {
        expect(mockCallback.mock.calls.length).toBe(2);
    })

    it('has the first argument of the first call to the function was 0', () => {
        expect(mockCallback.mock.calls[0][0]).toBe(0);
    })

    it('has first argument of the second call to the function was 1', () => {
        expect(mockCallback.mock.calls[1][0]).toBe(1);
    })

    test('The return value of the first call to the function was 42', () => {
        expect(mockCallback.mock.results[0].value).toBe(42);
    })
})
