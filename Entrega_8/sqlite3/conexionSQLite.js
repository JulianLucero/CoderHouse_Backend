const optionsQLite = {
	client: "sqlite3",
	connection: {
		filename: "./ecommerce/mydb.slqite"
	},
	useNullAsDefault: true
};

module.exports = { optionsQLite };