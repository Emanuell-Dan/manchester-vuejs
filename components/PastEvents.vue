<template>
  <div 
    id="past-events"
    class="relative pt-16">
    <h2 class="text-vue-brand text-center text-4xl mb-8">Past events</h2>
    <ul 
      v-if="events.length"
      class="flex justify-between flex-wrap">
      <li 
        v-for="event in events"
        :key="event.id"
        class="flex items-center list-reset cursor-pointer rounded shadow-md m-2"
        @click="$emit('open', event)">
        <div class="px-4 py-8">
          <p class="font-bold">{{ getDateAndTime(event.time) }}</p>
          <h3 class="text-vue-brand py-4">{{ event.name }}</h3>
          <p>{{ event.yes_rsvp_count }} attendees</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import dateAndTime from '~/mixins/dateAndTime.js';

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

<style lang="scss" scoped>
li {
  flex-basis: 100%;
  
  @media (min-width: 768px) {
    flex-basis: 47%;
  }

  @media (min-width: 992px) {
    flex-basis: 48%;
  }
}
</style>
