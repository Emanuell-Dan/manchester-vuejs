<template>
  <div class="nav">
    <span 
      class="nav__mobile tablet:hidden absolute text-center pin-t pin-r cursor-pointer mt-4 mr-4"
      @click="toggleMobileNav" />
    <nav 
      :class="{'nav__desktop--show': isNavOpen}"
      class="nav__desktop tablet:fixed pin-x pin-t z-10 bg-black text-vue-brand font-bold p-4">
      <ul class="list-reset flex mobile:flex-col items-center tablet:justify-center tablet:flex-wrap mobile:mt-8">
        <li 
          v-for="(item, index) in navItems"
          :key="index"
          class="cursor-pointer mobile:my-1 tablet:mx-2">{{ item }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
const NAV_ITEMS = [
  'About',
  'Future events',
  'Past events',
  'Resources'
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

<style lang="scss">
.nav {
  &__desktop {
    @media (max-width: 767px) {
      margin-top: -168px;
      transition: all .5s;

      &--show {
        margin-top: 0;
      }
    }
  }

  &__mobile {
    &:before {
      content: url('../static/menu.svg');
    }
  }
}
</style>
