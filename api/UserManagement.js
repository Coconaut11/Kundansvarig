const fs = require("fs");

const userFile = "db/users.json";
let usersLength = 0;

const getJSON = (path) => {
  let cont = fs.readFileSync(path);
  return JSON.parse(cont);
}

exports.calcUsersLength = () => {
  let cont = getJSON(userFile).users;
  let idx = 0;
  let user = cont[idx];
  while(user) {
    idx++;
    user = cont[idx];
  }
  usersLength = idx;
}

exports.createUser = (name, age, notes) => {
  let user = new User();
}

exports.createUser = (user) => {

}
exports.getUserByName = (name) => {
  let cont = getJSON(userFile).users
  let res = [];
  for(let i = 0; i < usersLength; i++) {
    console.log("scanning " + name);
    let regexp = new RegExp("/"+name+"/gi");
    if(cont[i].name.match(name)) res.push(cont[i]);
  }
  return res;
}

exports.getUserById = (id) => {

}

exports.getUserByAge = () => {

}

exports.deleteUser = () => {

}
