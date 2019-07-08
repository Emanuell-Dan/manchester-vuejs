<template>
  <ul 
    :class="[
      `tweet-grid--${gridPosition}`,
      {
        'md:mt-16': gridPosition === 'left',
        'md:mt-32': gridPosition === 'right'
      }
    ]"
    class="flex flex-col items-center mx-2 lg:mx-4">
    <li 
      v-for="(tweet, index) in tweets"
      :key="index"
      class="bg-white max-w-md rounded my-2">
      <a 
        :href="`https://twitter.com/${getUserScreenName(index)}/status/${getUserId(index)}`"
        target="_blank"
        class="block py-4 px-6">
        <p 
          v-if="tweet.retweeted_status"
          class="relative pl-6 mb-2 tweet-card__retweeted">
          Retweeted
        </p>
        <div class="flex items-center mb-2 tweet-card__header">
          <img 
            :src="getProfileImage(index)" 
            alt=""
            class="rounded tweet-card__profile-logo">
          <p class="pl-2 tweet-card__profile-name">{{ getUserName(index) }}</p>
        </div>

        <div class="mb-2 tweet-card__content">
          <p class="tweet-card__text">{{ getTweetMessage(index) }}</p>
        </div>

        <div class="flex tweet-card__footer">
          <p class="relative pl-6 tweet-card__count">{{ getRetweetsCount(index) }}</p>
          <span class="px-2 tweet-card__divider">|</span>
          <p class="relative pl-6 tweet-card__likes">{{ getLikesCount(index) }}</p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
	name: 'TweetCard',
	props: {
		tweets: {
      type: Array,
      default: () => []
		},
		gridPosition: {
			type: String,
			required: true
		}
	},
	methods: {
		getUserScreenName(index) {
			return this.tweets[index].retweeted_status ? this.tweets[index].retweeted_status.user.screen_name : this.tweets[index].user.screen_name;
		},
		getUserId(index) {
			return this.tweets[index].retweeted_status ? this.tweets[index].retweeted_status.id_str : this.tweets[index].id_str;
		},
		getProfileImage(index) {
			return this.tweets[index].retweeted_status ? this.tweets[index].retweeted_status.user.profile_image_url : this.tweets[index].user.profile_image_url;
		},
		getUserName(index) {
			return this.tweets[index].retweeted_status ? this.tweets[index].retweeted_status.user.name : this.tweets[index].user.name;
		},
		getTweetMessage(index) {
			return this.tweets[index].retweeted_status ? this.tweets[index].retweeted_status.text : this.tweets[index].text;
		},
		getRetweetsCount(index) {
			return this.tweets[index].retweeted_status ? this.tweets[index].retweeted_status.retweet_count : this.tweets[index].retweet_count;
		},
		getLikesCount(index) {
			return this.tweets[index].retweeted_status ? this.tweets[index].retweeted_status.favorite_count : this.tweets[index].favorite_count;
		}
	}
}
</script>
