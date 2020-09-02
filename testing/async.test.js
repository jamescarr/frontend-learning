
// Callbacks
function fetchData(cb) {
    setTimeout(() => {
        cb('peanut butter');
    }, 50);
}

// Don't do this! It will pass because it exits as soon as fetchData completes
test('the data is peanut butter', () => {
    function callback(data) {
        expect(data).toBe('peanut butter');
    }

    fetchData(callback);
});

test('throws and asserts an exception', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});

// Async / Await
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchAsyncData() {
    await timeout(50);
    return 'peanut butter';
}

async function fetchAnException() {
    await timeout(50);
    throw Error('error');
}

test('the data is async peanut butter', async () => {
    const data = await fetchAsyncData();
    expect(data).toBe('peanut butter');
});

// not great example
test('the fetch fails with an error', async () => {
    expect.assertions(1);
    await fetchAnException().catch(e => expect(e.message).toMatch('error'));
});

// better example with rejects!
test('the fetch fails with an error with reject', async () => {
    await expect(fetchAnException()).rejects.toThrow('error')
});



