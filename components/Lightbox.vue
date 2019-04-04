<template>
  <div class="lightbox fixed text-white w-full h-full pin-t pin-l p-16">
    <div class="flex w-4/5 m-auto">
      <div class="flex-1">
        <div>
          <h3>Details</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eaque, expedita nam cupiditate exercitationem beatae, explicabo laudantium eligendi doloribus iusto aliquid in, dolores alias neque quae maiores quia consequatur? Pariatur!</p>
        </div>
        <div>
          <h3>Photos</h3>
          <event-photo-carousel :event-id="event.id" />
        </div>
        <div>
          <h3>Slides</h3>
        </div>
      </div>
      <img 
        :src="getHighResolutionImage(event.photo_url)"
        :alt="event.name"
        class="flex-1 w-1/2">
    </div>
  </div>
</template>

<script>
import EventPhotoCarousel from './EventPhotoCarousel';

export default {
  name: 'Lightbox',
  components: {
    EventPhotoCarousel
  },
  props: {
    event: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    getHighResolutionImage(image) {
      return image.replace('global', 'highres');
    }
  }
}
</script>

<style lang="scss" scoped>
  .lightbox {
    background-color: rgba(0, 0, 0, 0.8);
  }

  img {
    height: 50%;
  }
</style>
