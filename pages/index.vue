<template>
  <div class="landing">
    <navigation @scrollToSection="scrollToSection" />
    <banner />

    <div class="bg-white text-black">
      <div class="container relative mx-auto px-4 sm:px-12 lg:px-16">
        <about />
        <future-events :event="meetup.futureEvents[0]" />
        <past-events :events="meetup.pastEvents" />
        <news :tweets="twitter.timeline" />
        <span 
          class="scroll-top absolute bg-vue-brand shadow-md rounded text-center pin-b lg:pin-r cursor-pointer mb-4 lg:mb-12 lg:mr-20"
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

<style lang="scss">
.scroll-top {
  left: 50%;
  transform: translateX(-50%);

	&::before {
		background: url('../static/circle-up.svg') center no-repeat;
    border-radius: 0.25rem;
    display: block;
    content: "";
    height: 32px;
    padding: 1.5rem;
    width: 32px;
	}

  &:focus::before,
  &:hover::before {
    background-color: rgba(0,0,0,.35);
  }
}
</style>
