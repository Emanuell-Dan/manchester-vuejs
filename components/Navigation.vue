<template>
  <div class="nav">
    <div 
      class="nav__mobile md:hidden fixed z-20 text-center right-0 cursor-pointer mt-4 mr-4"
      @click="toggleMobileNav"
    >
      <span
        :class="{ 'nav__mobile-burger--open': isNavOpen }"
        class="nav__mobile-burger"
      />
      <span
        :class="{ 'nav__mobile-burger--open': isNavOpen }"
        class="nav__mobile-burger"
      />
      <span
        :class="{ 'nav__mobile-burger--open': isNavOpen }"
        class="nav__mobile-burger"
      />
      <span
        :class="{ 'nav__mobile-burger--open': isNavOpen }"
        class="nav__mobile-burger"
      />
    </div>
    <nav 
      :class="{'nav__desktop--show': isNavOpen}"
      class="nav__desktop fixed z-10 bg-black font-bold w-full"
    >
      <div class="nav__desktop-inner relative">
        <ul class="nav__list list-reset flex flex-col md:flex-row items-center md:justify-center mt-12 md:mt-4 mb-6 md:mb-4">
          <li 
            v-for="(item, index) in navItems"
            :key="index"
            class="nav__item cursor-pointer hover:text-white focus:text-white my-1 md:mx-2"
            @click="$emit('scrollToSection', item, isNavOpen = false)"
          >
            {{ item }}
          </li>
        </ul>
        <a
          href="https://github.com/Emanuell-Dan/manchester-vuejs"
          target="_blank"
          title="Manchester Vue.js GitHub repo"
          class="nav__link absolute h-5"
        />
      </div>
    </nav>
  </div>
</template>

<script>
const NAV_ITEMS = [
  'About',
  'Future events',
  'Past events',
  'News'
];

export default {
  name: 'Navigation',
  data() {
    return {
      navItems: NAV_ITEMS,
      isNavOpen: false
    }
  },
  methods: {
    toggleMobileNav() {
      this.isNavOpen = !this.isNavOpen;
    }
  }
};
</script>
