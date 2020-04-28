function User(name) {
	this.name = name;
}

function getName() {
    return this.name
}

User.prototype.getName = getName

const me = new User('Rex');

console.log(me.getName()); // Rex