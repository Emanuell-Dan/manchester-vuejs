<template>
  <div 
    id="past-events"
    class="pt-16">
    <h2 class="text-vue-brand text-center mobile:text-xl text-4xl mb-8">Past events</h2>
    <ul 
      v-if="events.length"
      class="flex justify-between flex-wrap">
      <li 
        v-for="event in events"
        :key="event.id"
        class="flex items-center list-reset rounded shadow-md m-2">
        <div class="px-4 py-8">
          <p>{{ convertDate(event.local_date) }}, {{ event.local_time }}</p>
          <h3 class="py-4">{{ event.name }}</h3>
          <p>{{ event.yes_rsvp_count }} attendees</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PastEvents',
  props: {
    events: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    convertDate(localDate) {
      let date = new Date(localDate);
      return date.toDateString().slice(4);
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
}

li {
  flex-basis: 48%;
}
</style>
