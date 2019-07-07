<template>
  <div 
    id="future-events"
    class="relative pt-16">
    <h2 class="text-vue-brand font-bold text-center text-2xl md:text-4xl mb-4 md:mb-8">Coming next</h2>
    <div 
      v-if="event"
      class="flex flex-col md:flex-row cursor-pointer rounded shadow-md p-8">
      <div class="flex-grow">
        <h3 class="text-vue-brand uppercase pb-4">{{ event.name }}</h3>
        <p>{{ event.yes_rsvp_count }} {{ getAttendeesLimit }} going</p> 
      </div>
      <div>
        <p class="font-bold pb-2">{{ getDateAndTime(event.time) }}</p>
        <p>{{ event.venue.name }}</p>
        <p>{{ event.venue.address_1 }}</p>
        <p>{{ event.venue.address_2 }}</p>
      </div>
    </div>
    <h3 
      v-else
      class="text-center">
      Watch this space...
    </h3>
  </div>
</template>

<script>
import dateAndTime from '~/mixins/dateAndTime.js';

export default {
  name: 'FutureEvents',
  mixins: [dateAndTime],
  props: {
    event: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    getAttendeesLimit() {
      return this.event.rsvp_limit ? `/ ${this.event.rsvp_limit}` : '';
    }
  }
};
</script>
