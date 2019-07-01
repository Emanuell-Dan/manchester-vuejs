<template>
  <div class="lightbox fixed flex bg-white text-black text-center w-full min-h-half md:min-h-1/3 bottom-0 left-0 px-4 z-20">
    <div class="relative flex justify-center flex-col md:flex-row">
      <!-- <span 
        class="lightbox__close absolute bg-vue-brand shadow-md rounded text-center pin-t pin-r cursor-pointer mb-4 lg:mb-12 lg:mr-20"
        @click="$emit('close')" /> -->
      <div class="font-bold">
        <p>{{ getDateAndTime(event.time) }}</p>
        <h3 class="text-vue-brand uppercase py-2">{{ event.name }}</h3>
        <p>{{ event.yes_rsvp_count }} attendees</p>
        <p class="pt-4">{{ event.venue.name }}, {{ event.venue.address_1 }} {{ event.venue.address_2 }}</p>
      </div>
      <div class="pt-8">
        <div>
          <h3>Photos</h3>
          <event-photo-carousel 
            v-if="event.id"
            :event-id="event.id" />
        </div>
        <div>
          <h3>Resources</h3>
          <a 
            href="~/assets/resources/IntelliJIDEA_ReferenceCard.pdf"
            download>
            Slides
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventPhotoCarousel from './EventPhotoCarousel';
import dateAndTime from '~/mixins/dateAndTime.js';

export default {
  name: 'Lightbox',
  components: {
    EventPhotoCarousel
  },
  mixins: [dateAndTime],
  props: {
    event: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    getImage(image) {
      const defaultImage = '_nuxt/static/manchester-banner.png';
      
      return image ? image.replace('global', 'highres') : defaultImage;
    }
  }
}
</script>

<style lang="scss" scoped>
  // .lightbox {
  //   background-color: rgba(0, 0, 0, 0.8);

  //   &__close {
  //     &::before {
  //       background: url('../static/cancel-circle.svg') center no-repeat;
  //       border-radius: 0.25rem;
  //       display: block;
  //       content: "";
  //       height: 32px;
  //       padding: 1.5rem;
  //       width: 32px;
  //     }

  //     &:focus::before,
  //     &:hover::before {
  //       background-color: rgba(0,0,0,.35);
  //     }
  //   }
  // }
</style>
