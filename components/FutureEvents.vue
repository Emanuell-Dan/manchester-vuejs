<template>
  <div class="future-events py-16">
    <h2 class="text-vue-brand text-center mobile:text-xl text-4xl mb-8">Coming next</h2>
    <div 
      v-if="event"
      class="flex mobile:flex-col justify-around cursor-pointer rounded shadow-md p-8"
      @click="openLightbox">
      <div>
        <h3 class="uppercase pb-4">{{ event.name }}</h3>
        <p>{{ event.yes_rsvp_count + ` / ${event.rsvp_limit ? event.rsvp_limit : ''}` }} going</p> 
      </div>
      <div>
        <p class="pb-2">{{ event.local_date }} at {{ event.local_time }}</p>
        <p>{{ event.venue.name }}</p>
        <p>{{ event.venue.address_1 }}</p>
        <p>{{ event.venue.address_2 }}</p>
      </div>
    </div>
    <div class="fixed bg-red text-black w-4/5 h-full">
      <h1>Hello</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FutureEvents',
  props: {
    event: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    openLightbox() {

    }
  }
};
</script>
