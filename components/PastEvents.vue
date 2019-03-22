<template>
  <div class="past-events py-16">
    <h2 class="text-vue-brand text-center mobile:text-xl text-4xl mb-8">Past events</h2>
    <ul v-if="events.length">
      <li 
        v-for="event in events"
        :key="event.id">
        {{ event.name }}
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
  }
};
</script>
