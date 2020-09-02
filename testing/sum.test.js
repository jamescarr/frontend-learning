const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('two plus two is four', () => {
    expect(sum(2, 2)).toBe(4);
})

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = {3: 2};

    expect(data).toEqual({one: 1, two: {3: 2}});
})

test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});


// Truthiness
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test('one', () => {
    const z = 1
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).toBeTruthy();
    expect(z).not.toBeFalsy();
});

// Numbers
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;

    expect(value).not.toBe(0.3); // this doesnt work due to rounding error
    expect(value).toBeCloseTo(0.3);
})


// Strings
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

// Arrays and iterables

test('the shopping list has beer on it', () => {
    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'beer',
    ];

    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
});

// Exceptions

// This wrapper is silly but for my own understanding on how jest handles
// exceptions and inheritence. 
class IncorrectJDKError extends Error {
    constructor() {
        super(IncorrectJDKError.MESSAGE)
    }

    static get MESSAGE() {
        return 'You are using the wrong JDK';
    }
}

function compileAndroidCode() {
    throw new IncorrectJDKError();
}

test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow(IncorrectJDKError.MESSAGE);
    expect(compileAndroidCode).toThrow(/JDK/);
});

