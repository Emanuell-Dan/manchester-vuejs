<template>
  <div class="landing">
    <navigation @scrollToSection="scrollToSection" />
    <banner />

    <div class="bg-white text-black">
      <div class="container relative mx-auto mobile:px-4 tablet:px-12">
        <about />
        <future-events 
          :event="meetup.futureEvents[0]" 
          @open="openLightbox" />
        <past-events 
          :events="meetup.pastEvents"
          @open="openLightbox" />
        <resources />
        <lightbox
          v-if="hasLightbox"
          :event="event"
          @close="closeLightbox" />
        <span 
          class="scroll-top absolute bg-vue-brand shadow-md rounded text-center pin-b lg:pin-r cursor-pointer mb-4 lg:mb-12 lg:mr-20"
          @click="$el.scrollIntoView({ behavior: 'smooth' })" />
      </div>
    </div>
  </div>
</template>

<script>
if (process.client) {
  var bodyScroll = require('~/plugins/bodyScrollLock.js');
}

import {mapState, mapActions} from 'vuex';
import Navigation from '~/components/Navigation';
import Banner from '~/components/Banner';
import About from '~/components/About';
import FutureEvents from '~/components/FutureEvents';
import PastEvents from '~/components/PastEvents';
import Resources from '~/components/Resources';
import Lightbox from '~/components/Lightbox';

export default {
	components: {
		Navigation,
		Banner,
		About,
		FutureEvents,
		PastEvents,
    Resources,
    Lightbox
  },
  data() {
    return {
      hasLightbox: false,
      event: {}
    }
  },
  computed: {
    ...mapState(['meetup'])
  },
  methods: {
    openLightbox(event) {
      bodyScroll.scrollLock();
      this.hasLightbox = true;
      this.event = event;
      this.$store.dispatch('meetup/getEventAlbum', event.id);
    },
    closeLightbox() {
      bodyScroll.scrollUnlock();
      this.hasLightbox = false;
    },
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
