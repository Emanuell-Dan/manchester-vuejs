<template>
  <div
    id="news" 
    class="news py-16"
  >
    <h2 class="news__heading font-bold text-center text-2xl md:text-4xl mb-4 md:mb-8">
      Latest news
    </h2>

    <section class="news__grid flex flex-col md:flex-row justify-center">
      <template v-if="tweets.length === 9">
        <tweet-card
          :tweets="tweets.slice(0, 3)"
          grid-position="left"
        />

        <tweet-card
          :tweets="tweets.slice(3, 6)"
          grid-position="center"
        />

        <tweet-card
          :tweets="tweets.slice(6, 9)"
          grid-position="right"
        />
      </template>
    </section>
  </div>
</template>

<script>
import TweetCard from '@/components/TweetCard.vue';

export default {
  name: 'News',
  components: {
    TweetCard
  },
  props: {
    tweets: {
      type: Array,
      default: () => []
    }
  }
};
</script>
