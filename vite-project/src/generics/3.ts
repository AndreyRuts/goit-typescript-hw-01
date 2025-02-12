function merge<T, U>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
}

// const merged = merge({ name: 'Alisa' }, { age: 28 })
// console.log(merged);