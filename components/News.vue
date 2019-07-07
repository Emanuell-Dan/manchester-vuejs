<template>
  <div
    id="news" 
    class="py-16 md:-mt-2">
    <h2 class="text-vue-brand font-bold text-center text-2xl md:text-4xl mb-4 md:mb-8">Latest news</h2>

    <section class="flex flex-col md:flex-row justify-center tweet-grid">
      <ul class="flex flex-col items-center mx-2 lg:mx-4 md:mt-16 tweet-grid--left">
        <li 
          v-for="(tweet, index) in tweets.slice(0, 3)"
          :key="index"
          class="bg-white max-w-md rounded my-2">
          <a 
            :href="`https://twitter.com/${tweet.retweeted_status ? tweet.retweeted_status.user.screen_name : tweet.user.screen_name}/status/${tweet.retweeted_status ? tweet.retweeted_status.id_str : tweet.id_str}`"
            target="_blank"
            class="block py-4 px-6">
            <p 
              v-if="tweet.retweeted_status"
              class="relative pl-6 mb-2 tweet-card__retweeted">
              Retweeted
            </p>
            <div class="flex items-center mb-2 tweet-card__header">
              <img 
                :src="tweet.retweeted_status ? tweet.retweeted_status.user.profile_image_url : tweet.user.profile_image_url" 
                alt=""
                class="tweet-card__profile-logo">
              <p class="pl-2 tweet-card__profile-name">{{ tweet.retweeted_status ? tweet.retweeted_status.user.name : tweet.user.name }}</p>
            </div>

            <div class="mb-2 tweet-card__content">
              <p class="tweet-card__text">{{ tweet.retweeted_status ? tweet.retweeted_status.text : tweet.text }}</p>
            </div>

            <div class="flex tweet-card__footer">
              <p class="relative pl-6 tweet-card__count">{{ tweet.retweeted_status ? tweet.retweeted_status.retweet_count : tweet.retweet_count }}</p>
              <span class="px-2 tweet-card__divider">|</span>
              <p class="relative pl-6 tweet-card__likes">{{ tweet.retweeted_status ? tweet.retweeted_status.favorite_count : tweet.favorite_count }}</p>
            </div>
          </a>
        </li>
      </ul>

      <ul class="flex flex-col items-center mx-2 lg:mx-4 tweet-grid--center">
        <li 
          v-for="(tweet, index) in tweets.slice(3, 6)"
          :key="index"
          class="bg-white max-w-md rounded my-2">
          <a 
            :href="`https://twitter.com/${tweet.retweeted_status ? tweet.retweeted_status.user.screen_name : tweet.user.screen_name}/status/${tweet.retweeted_status ? tweet.retweeted_status.id_str : tweet.id_str}`"
            target="_blank"
            class="block py-4 px-6">
            <p 
              v-if="tweet.retweeted_status"
              class="relative pl-6 mb-2 tweet-card__retweeted">
              Retweeted
            </p>
            <div class="flex items-center mb-2 tweet-card__header">
              <img 
                :src="tweet.retweeted_status ? tweet.retweeted_status.user.profile_image_url : tweet.user.profile_image_url" 
                alt=""
                class="tweet-card__profile-logo">
              <p class="pl-2 tweet-card__profile-name">{{ tweet.retweeted_status ? tweet.retweeted_status.user.name : tweet.user.name }}</p>
            </div>

            <div class="mb-2 tweet-card__content">
              <p class="tweet-card__text">{{ tweet.retweeted_status ? tweet.retweeted_status.text : tweet.text }}</p>
            </div>

            <div class="flex tweet-card__footer">
              <p class="relative pl-6 tweet-card__count">{{ tweet.retweeted_status ? tweet.retweeted_status.retweet_count : tweet.retweet_count }}</p>
              <span class="px-2 tweet-card__divider">|</span>
              <p class="relative pl-6 tweet-card__likes">{{ tweet.retweeted_status ? tweet.retweeted_status.favorite_count : tweet.favorite_count }}</p>
            </div>
          </a>
        </li>
      </ul>

      <ul class="flex flex-col items-center mx-2 lg:mx-4 md:mt-32 tweet-grid--right">
        <li 
          v-for="(tweet, index) in tweets.slice(6, 9)"
          :key="index"
          class="bg-white max-w-md rounded my-2">
          <a 
            :href="`https://twitter.com/${tweet.retweeted_status ? tweet.retweeted_status.user.screen_name : tweet.user.screen_name}/status/${tweet.retweeted_status ? tweet.retweeted_status.id_str : tweet.id_str}`"
            target="_blank"
            class="block py-4 px-6">
            <p 
              v-if="tweet.retweeted_status"
              class="relative pl-6 mb-2 tweet-card__retweeted">
              Retweeted
            </p>
            <div class="flex items-center mb-2 tweet-card__header">
              <img 
                :src="tweet.retweeted_status ? tweet.retweeted_status.user.profile_image_url : tweet.user.profile_image_url" 
                alt=""
                class="tweet-card__profile-logo">
              <p class="pl-2 tweet-card__profile-name">{{ tweet.retweeted_status ? tweet.retweeted_status.user.name : tweet.user.name }}</p>
            </div>

            <div class="mb-2 tweet-card__content">
              <p class="tweet-card__text">{{ tweet.retweeted_status ? tweet.retweeted_status.text : tweet.text }}</p>
            </div>

            <div class="flex tweet-card__footer">
              <p class="relative pl-6 tweet-card__count">{{ tweet.retweeted_status ? tweet.retweeted_status.retweet_count : tweet.retweet_count }}</p>
              <span class="px-2 tweet-card__divider">|</span>
              <p class="relative pl-6 tweet-card__likes">{{ tweet.retweeted_status ? tweet.retweeted_status.favorite_count : tweet.favorite_count }}</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'News',
  props: {
    tweets: {
      type: Array,
      default: () => []
    }
  }
};
</script>
