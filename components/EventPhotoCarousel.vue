<template>
  <!-- <ul class="flex">
    <li 
      v-for="photo in eventAlbum"
      :key="photo.id"
      class="list-reset">
      <img 
        :src="photo.thumb_link"
        :alt="photo.member.name">
    </li>
  </ul> -->
  <carousel 
    :per-page="3"
    :autoplay="true"
    :loop="true"
    :pagination-enabled="false" 
    :navigation-enabled="true">
    <slide 
      v-for="photo in eventAlbum"
      :key="photo.id">
      <img 
        :src="photo.thumb_link"
        :alt="photo.member.name">
    </slide>
  </carousel>
</template>

<script>
import {mapState} from 'vuex';

export default {
	name: 'EventPhotoCarousel',
	props: {
		eventId: {
			type: String,
			default: ''
		}
	},
  computed: {
    ...mapState('meetup', ['eventAlbum'])
	}
}
</script>
