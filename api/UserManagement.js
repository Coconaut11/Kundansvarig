const fs = require("fs");
const path = require("path");

const User = require("../api/User.js");

const _usersFolder = "db/users/";
const userFile = "db/users.json";

exports.users = [];

const default_data = {
	id: 6789679,
	name: ["n_0","n_1","n_2"],
	age: 0,
	birth_date: "00/00/0000",
	adress: "none",
	telf: "none",

	diseases: [],
	medication: []
};

exports.loadUsers = (callback) => {
    let more = true;
    let i = 0;
     while(more) {
		let us = _usersFolder + "us_" + i + "/";
		if(fs.existsSync(us)) {
			fs.readFile(path.join(us + "personal.json"), (err, data) => {
				if(err) {
					console.log("failed to load file!");
					return;
				}
				let json_personal = JSON.parse(data);
				this.users.push(new User(json_personal));
			});
			i++;
		} else {
			more = false;
		}
    }
    callback();
}


exports.createUser = (user) => {
}

exports.getUserByName = (name) => {
    let res = [];
    for(let i = 0; i < this.users.length; i++) {
        let regexp = new RegExp(name, "gi");
        let us_name = this.users[i].name[0] + " " + this.users[i].name[1] + " " + this.users[i].name[2];
		let mat = us_name.match(regexp);
		console.log(mat);
		if(mat) res.push(this.users[i]);
    }
    if(res.length === 0) return this.users;
    return res;
}

exports.getUserById = (id) => {
    console.log(this.users);
    console.log("length: " + this.users.length);
    console.log(this.users[0]);
	for(let i = 0; i < this.users.length; i++) {
		let u = this.users[i];
		console.log(u.id + " ? " + id);
		if(parseInt(u.id) === parseInt(id)) {
			console.log("found");
			return u;
		}
	}
	return false;
}

exports.getUserByAge = (age) => {
}

exports.deleteUser = () => {

}

exports.saveUsers = () => {
}
