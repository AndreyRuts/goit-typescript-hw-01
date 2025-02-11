const mango = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};

interface User {
    name: string,
    age: number,
    email: string,
    address?: {
        city: string,
        country: string
    }
}

// function userData(data: User) {
//     return `User: ${data.name} Age: ${data.age} Email: ${data.email} 
//     Country: ${data.address?.country} City: ${data.address?.city}`
// }

// console.log(userData(poly));
