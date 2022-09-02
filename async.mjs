function samplePromise() {
    return Promise.resolve("Fitri");
}

const name = await samplePromise();
console.info(name);