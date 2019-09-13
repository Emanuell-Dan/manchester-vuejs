<template>
  <div 
    id="past-events"
    class="past-events relative pt-16"
  >
    <h2 class="past-events__heading font-bold text-center text-2xl md:text-4xl mb-4 md:mb-8">
      Past events
    </h2>
    <ul 
      v-if="events.length"
      class="past-events__list flex justify-center flex-wrap"
    >
      <li 
        v-for="event in events"
        :key="event.id"
        class="past-events__item flex"
      >
        <a 
          :href="event.link"
          target="_blank"
          class="past-events__url bg-white flex items-center rounded-lg w-full m-2"
        >
          <div class="past-events__event-info px-4 py-8">
            <p class="past-events__event-date font-medium">{{ getDateAndTime(event.time) }}</p>
            <h3 class="past-events__event-name font-bold py-4">{{ event.name }}</h3>
            <p class="past-events__event-attendees">{{ event.yes_rsvp_count }} attendees</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import dateAndTime from '@/mixins/dateAndTime.js';

export default {
  name: 'PastEvents',
  mixins: [dateAndTime],
  props: {
    events: {
      type: Array,
      default: () => []
    }
  }
};
</script>
