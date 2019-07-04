<template>
  <div
    id="news" 
    class="py-16">
    <h2 class="text-vue-brand font-bold text-center mobile:text-xl text-4xl mb-8">Latest news</h2>

    <ul>
      <li 
        v-for="(tweet, index) in tweets"
        :key="index">
        {{ tweet.text }}
      </li>
    </ul>
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
