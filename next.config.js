const path = require("path");

module.exports = {
	reactStrictMode: true,
};

module.export = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};
