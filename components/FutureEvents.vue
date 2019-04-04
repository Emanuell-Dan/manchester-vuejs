<template>
  <div 
    id="future-events"
    class="relative pt-16">
    <h2 class="text-vue-brand text-center mobile:text-xl text-4xl mb-8">Coming next</h2>
    <div 
      v-if="event"
      class="flex mobile:flex-col justify-around cursor-pointer rounded shadow-md p-8"
      @click="openLightbox(event.id)">
      <div>
        <h3 class="uppercase pb-4">{{ event.name }}</h3>
        <p>{{ event.yes_rsvp_count }} {{ getAttendeesLimit }} going</p> 
      </div>
      <div>
        <p class="pb-2">{{ getDateAndTime(event.time) }}</p>
        <p>{{ event.venue.name }}</p>
        <p>{{ event.venue.address_1 }}</p>
        <p>{{ event.venue.address_2 }}</p>
      </div>
    </div>
    <lightbox 
      v-if="hasLightbox"
      :event="event" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import dateAndTime from '~/mixins/dateAndTime.js';
import Lightbox from './Lightbox';

export default {
  name: 'FutureEvents',
  components: {
    Lightbox
  },
  mixins: [dateAndTime],
  props: {
    event: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      hasLightbox: false
    }
  },
  computed: {
    getAttendeesLimit() {
      return this.event.rsvp_limit ? `/ ${this.event.rsvp_limit}` : '';
    }
  },
  methods: {
    openLightbox(eventID) {
      this.hasLightbox = true;
      this.$store.dispatch('meetup/getEventAlbum', eventID);
    }
  }
};
</script>
