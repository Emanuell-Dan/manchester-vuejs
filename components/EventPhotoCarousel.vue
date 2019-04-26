<template>
  <ul>
    <li 
      v-for="photo in eventAlbum"
      :key="photo.id"
      class="list-reset">
      <img 
        :src="photo.thumb_link"
        :alt="photo.member.name">
    </li>
  </ul>
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
