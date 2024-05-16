import tab from './tab';
import modal from './modal';

export default {
	install(app) {
		app.provide('tab', tab);
		app.provide('modal', modal);
	}
};
