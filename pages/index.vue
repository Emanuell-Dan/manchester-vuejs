<template>
  <div class="landing">
    <navigation @scrollToSection="scrollToSection" />
    <banner />

    <div class="bg-white text-black">
      <div class="container relative mx-auto mobile:px-4 tablet:px-12">
        <about />
        <future-events :event="meetup.futureEvents[0]" />
        <past-events :events="meetup.pastEvents" />
        <resources />
        <span 
          class="scroll-top absolute text-center pin-b lg:pin-r cursor-pointer mb-4 lg:mb-12 lg:mr-20"
          @click="$el.scrollIntoView({ behavior: 'smooth' })" />
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

import Navigation from '~/components/Navigation';
import Banner from '~/components/Banner';
import About from '~/components/About';
import FutureEvents from '~/components/FutureEvents';
import PastEvents from '~/components/PastEvents';
import Resources from '~/components/Resources';

export default {
	components: {
		Navigation,
		Banner,
		About,
		FutureEvents,
		PastEvents,
    Resources
	},
  computed: {
    ...mapState(['meetup'])
  },
  mounted() {
    console.log(this.meetup.pastEvents[2]);
  },
  methods: {
    scrollToSection(section) {
      const sectionId = section.toLowerCase().split(' ').join('-');
      this.$el.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<style lang="scss">
.scroll-top {
  left: 50%;
  transform: translateX(-50%);

	&:before {
		content: url('../static/circle-up.svg');
	}
}
</style>
