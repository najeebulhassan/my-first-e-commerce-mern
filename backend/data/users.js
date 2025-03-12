import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Najeeb Admin',
    email: 'admin@najeeb.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Muneeb Hassan',
    email: 'muneeb@muneeb.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Haseeb Zahid',
    email: 'haseeb@haseeb.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
