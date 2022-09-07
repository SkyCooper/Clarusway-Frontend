//! Generators
// ➤ While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state.

// ➤ Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous.

// ➤ Regular functions return only one, single value (or nothing). Generators can return (“yield”) multiple values, one after another, on-demand.

// Generator Example
function* generateSequence() {
    yield 1;
    console.log('I start working from here');
    yield 2;
    yield 3;
}

const genSeq = generateSequence();
// unlike regular functions, 
// generator functions do not invoke when they are called.

console.log(genSeq);
// output is: generateSequence {}

let item = genSeq.next();
// now we start invoking
// it stops its execution when it sees yield
// and in next calling it will continue after that yield line

while (!item.done) {
    console.log(item);
    item = genSeq.next();
}

console.log(item);
// {value: undefined, done: true}
// done is true

console.log(Array.from(generateSequence()));
// [1, 2, 3]