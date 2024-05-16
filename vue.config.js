const path = require('path');

module.exports = {
	css: {
		loaderOptions: {
			scss: {
				additionalData: `@import "@/styles/global.scss"; `
			}
		}
	},
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', path.resolve(__dirname, 'src'))
			.set('assets', path.resolve(__dirname, 'src/assets'));
	}
};
