const { white, yellow } = require("chalk");

module.exports.run = async (client) => {
	console.log(white("[") + yellow("WARN") + white("] ") + yellow("Warned ") + white(`${client.user.tag} (${client.user.id})`) + yellow(" "));
};
