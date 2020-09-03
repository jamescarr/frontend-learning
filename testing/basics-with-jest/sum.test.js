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


