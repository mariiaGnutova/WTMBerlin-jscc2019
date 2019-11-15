const Person = require ('./person.js');

module.exports = class Adult extends Person {
  constructor (id, name, surname, gender, username, password) {
    super (id, name, surname, gender);
    this.username = username;
    this.password = password;
  }
  login (username, password) {
    if (
      username.localeCompare (this.username) == 0 &&
      password.localeCompare (this.password) == 0
    ) {
      return true;
    }
    return false;
  }
};
