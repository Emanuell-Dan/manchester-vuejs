import Vue from 'vue';
import { createLocalVue } from 'vue-test-utils';

global.getSelection = () => '';

global.localVue = createLocalVue();

Vue.component('transition', {
	render(createElement) {
		return createElement(
			'div',
			this.$slots.default
		);
	}
});
