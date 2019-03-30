<template>
  <ul>
    <li>Test</li>
    <!-- <li 
      v-for="photo in album"
      :key="photo.id">
      <img 
        :src="photo.thumb_link"
        :alt="photo.member.name">
    </li> -->
  </ul>
</template>

<script>
import {mapState} from 'vuex';

export default {
	name: 'EventPhotoCarousel',
	computed: {
    ...mapState(['meetup'])
	},
	mounted() {
    console.log('carousel', this.meetup.eventAlbum);
  }
}
</script>
