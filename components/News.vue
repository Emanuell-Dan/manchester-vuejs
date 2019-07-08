<template>
  <div
    id="news" 
    class="py-16">
    <h2 class="text-vue-brand font-bold text-center text-2xl md:text-4xl mb-4 md:mb-8">Latest news</h2>

    <section class="flex flex-col md:flex-row justify-center tweet-grid">
      <tweet-card 
        :tweets="tweets.slice(0, 3)"
        grid-position="left" />

      <tweet-card 
        :tweets="tweets.slice(3, 6)"
        grid-position="center" />

      <tweet-card 
        :tweets="tweets.slice(6, 9)"
        grid-position="right" />
    </section>
  </div>
</template>

<script>
import TweetCard from '~/components/TweetCard';

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
