<template>
  <div class="landing">
    <navigation />
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

import Navigation from '~/components/Navigation.vue';
import Banner from '~/components/Banner.vue';
import About from '~/components/About.vue';
import FutureEvents from '~/components/FutureEvents.vue';
import PastEvents from '~/components/PastEvents.vue';
import Resources from '~/components/Resources.vue';

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
