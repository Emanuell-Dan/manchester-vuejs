<template>
  <div class="absolute bg-red text-black w-full h-full">
    <h1>{{ event.name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Lightbox',
  props: {
    event: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
