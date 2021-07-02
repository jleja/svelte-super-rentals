const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const tailwindcss = require("tailwindcss");

const mode = process.env.NODE_ENV;

const dev = mode === "development";
const config = {
	plugins: [
		tailwindcss,
		autoprefixer(),

		!dev && cssnano({
			preset: "default",
		}),
	],
};

module.exports = config;
