import App from './App';
import { envInfo } from './utils/env';

function initAPP() {
	const env = envInfo()
	uni.getSystemInfo({
		success: (res) => {
			console.log(
				`%c${res.appName} ${res.appVersion} 当前环境：${env.env} `,
				'background: #4faf70; color: #fff; padding: 4px; border-radius: 4px; font-size: 10px;text-align: center;line-height: 10px'
			);
		}
	});
}
// #ifndef VUE3
import Vue from 'vue';
import './uni.promisify.adaptor';
Vue.config.productionTip = false;
App.mpType = 'app';
initAPP()
const app = new Vue({
	...App
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue';
export function createApp() {
	const app = createSSRApp(App);
	initAPP()
	return {
		app
	};
}
// #endif
