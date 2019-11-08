<template>
  <div 
    id="future-events"
    class="future-events relative pt-16"
  >
    <h2 class="future-events__heading font-bold text-center text-2xl md:text-4xl mb-4 md:mb-8">
      Coming next
    </h2>
    <div 
      v-if="event"
      class="future-events__card"
    >
      <a 
        :href="event.link"
        target="_blank"
        rel="noreferrer"
        :aria-label="`Upcoming event: ${event.name}`"
        :title="`Upcoming event: ${event.name}`"
        class="future-events__url bg-white flex flex-col md:flex-row rounded-lg max-w-3xl m-auto p-8"
      >
        <div class="future-events__event-info flex-grow">
          <h3 class="future-events__event-name font-bold pb-4">{{ event.name }}</h3>
          <p class="future-events__event-attendees">{{ event.yes_rsvp_count }} {{ getAttendeesLimit }} attendees</p> 
        </div>
        <div class="future-events__event-logistics">
          <p class="future-events__event-date font-medium pb-2">{{ getDateAndTime(event.time) }}</p>
          <p class="future-events__event-venue">{{ event.venue.name }}</p>
          <p class="future-events__event-address">{{ event.venue.address_1 }}</p>
          <p class="future-events__event-address">{{ event.venue.address_2 }}</p>
        </div>
      </a>
    </div>
    <h3 
      v-else
      class="future-events__tba text-center font-bold"
    >
      Watch this space...
    </h3>
  </div>
</template>

<script>
import dateAndTime from '../mixins/dateAndTime.js';

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
      return this.event && this.event.rsvp_limit ? `/ ${this.event.rsvp_limit}` : '';
    }
  }
};
</script>
