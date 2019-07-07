<template>
  <div class="landing">
    <navigation @scrollToSection="scrollToSection" />
    <banner />

    <div class="bg-white text-black">
      <div class="container mx-auto px-4 sm:px-12 lg:px-16">
        <about />
        <future-events :event="meetup.futureEvents[0]" />
        <past-events :events="meetup.pastEvents" />
      </div>
      <div class="relative bg-twitter">
        <news :tweets="twitter.timeline" />
        <span 
          class="scroll-top absolute bg-vue-brand shadow-md rounded text-center bottom-0 cursor-pointer mb-16 lg:mr-20"
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
import News from '~/components/News';

export default {
	components: {
		Navigation,
		Banner,
		About,
		FutureEvents,
		PastEvents,
    News
  },
  computed: {
    ...mapState(['meetup', 'twitter'])
  },
  methods: {
    scrollToSection(section) {
      const sectionId = section.toLowerCase().split(' ').join('-');
      this.$el.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>
