import App from './App';
import plugins from './plugins';

// #ifndef VUE3
import Vue from 'vue';
import './uni.promisify.adaptor';
Vue.config.productionTip = false;
App.mpType = 'app';
Vue.use(plugins);
const app = new Vue({
	...App
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue';
export function createApp() {
	const app = createSSRApp(App);
	app.use(plugins);
	return {
		app
	};
}
// #endif
