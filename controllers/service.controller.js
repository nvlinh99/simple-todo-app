const bcrypt = require('bcrypt');

let users = [
  {
      id: 1,
      username: '1760096',
      email: '1760096@student.hcmus.edu.vn',
      displayName: 'Nguyen Vu Linh',
      password: '$2b$10$XDrWvpzE1DdXBqpEKO/jbOi8S5sEUXxhRPVpEm5ARGNR1RYzSbi1y',
      "avatar": "uploads/b11cec12bfd204111291b70d268407d3"
  }
];

module.exports.findUserById = function(id) {
  return users.find(u => u.id === id);
}

module.exports.findUserByEmail = function(username) {
  return users.find(u => u.username === username);
}

module.exports.hashPassword = function(password) {
    return bcrypt.hashSync(password, 10);
}
module.exports.comparePassword = function(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword);
}