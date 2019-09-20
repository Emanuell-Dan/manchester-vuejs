import Vue from 'vue';
import { createLocalVue } from '@vue/test-utils';

global.localVue = createLocalVue();

Vue.component('transition', {
	render(createElement) {
		return createElement('div');
	}
});
