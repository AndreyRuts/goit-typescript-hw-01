type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(data: Partial<User>): User {
    const initialValues = {
    name: '',
    surname: '',
    email: '',
    password: ''
};
    return { ...initialValues, ...data };
}

// const testVar = createOrUpdateUser({ 
//   email: 'user@mail.com', 
//   password: 'password123' 
// });

// console.log(testVar);
