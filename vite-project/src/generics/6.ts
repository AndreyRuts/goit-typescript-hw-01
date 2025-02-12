type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, 'errors'>;

// const testValues:Params = {
//     email: 'safdasd@qwrq.com',
//     firstName: 'qweqewe',
//     lastName: 'ewqewq',
//     phone: '123123',
// }

// console.log(testValues);
