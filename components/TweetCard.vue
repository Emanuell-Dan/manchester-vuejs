<template>
  <ul 
    :class="[
      `tweet-card--${gridPosition}`,
      {
        'md:mt-16': gridPosition === 'left',
        'md:mt-32': gridPosition === 'right'
      }
    ]"
    class="tweet-card__list flex flex-col items-center mx-2 lg:mx-4">
    <li 
      v-for="(tweet, index) in tweets"
      :key="index"
      class="tweet-card__item bg-white flex items-center max-w-md rounded-lg my-2">
      <a 
        :href="`https://twitter.com/${getUserScreenName(index)}/status/${getUserId(index)}`"
        target="_blank"
        class="block py-4 px-6">
        <p 
          v-if="tweet.retweeted_status"
          class="tweet-card__retweeted relative pl-8 mb-2">
          Retweeted
        </p>
        <div class="tweet-card__header flex items-center mb-2">
          <img 
            :src="getProfileImage(index)" 
            alt=""
            class="tweet-card__profile-logo rounded">
          <p class="tweet-card__profile-name pl-2">{{ getUserName(index) }}</p>
        </div>

        <div class="tweet-card__content mb-2">
          <p class="tweet-card__text">{{ getTweetMessage(index) }}</p>
        </div>

        <div class="tweet-card__footer flex">
          <p class="tweet-card__count relative pl-8 pr-2 mr-2">{{ getRetweetsCount(index) }}</p>
          <p class="tweet-card__likes relative pl-8">{{ getLikesCount(index) }}</p>
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
			return this.tweets[index].retweeted_status ? this.tweets[index].retweeted_status.user.profile_image_url_https : this.tweets[index].user.profile_image_url_https;
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
