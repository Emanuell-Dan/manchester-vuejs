<template>
  <div class="lightbox fixed text-white w-full h-full pin-t pin-l p-16 z-20">
    <div class="relative flex items-center w-4/5 h-full m-auto">
      <span 
        class="lightbox__close absolute bg-vue-brand shadow-md rounded text-center pin-t pin-r cursor-pointer mb-4 lg:mb-12 lg:mr-20"
        @click="$emit('close')" />
      <div class="flex-1 px-8">
        <div class="py-8">
          <h3 class="pb-4">Details</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eaque, expedita nam cupiditate exercitationem beatae, explicabo laudantium eligendi doloribus iusto aliquid in, dolores alias neque quae maiores quia consequatur? Pariatur!</p>
        </div>
        <div class="py-8">
          <h3>Photos</h3>
          <event-photo-carousel 
            v-if="event.id"
            :event-id="event.id" />
        </div>
        <div class="py-8">
          <h3>Resources</h3>
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

    &__close {
      &::before {
        background: url('../static/cancel-circle.svg') center no-repeat;
        border-radius: 0.25rem;
        display: block;
        content: "";
        height: 32px;
        padding: 1.5rem;
        width: 32px;
      }

      &:focus::before,
      &:hover::before {
        background-color: rgba(0,0,0,.35);
      }
    }
  }
</style>
