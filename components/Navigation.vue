<template>
  <div class="nav">
    <div 
      class="nav__mobile tablet:hidden fixed z-20 text-center pin-t pin-r cursor-pointer mt-4 mr-4"
      @click="toggleMobileNav">
      <span :class="{ 'nav__mobile-open': isNavOpen }" />
      <span :class="{ 'nav__mobile-open': isNavOpen }" />
      <span :class="{ 'nav__mobile-open': isNavOpen }" />
      <span :class="{ 'nav__mobile-open': isNavOpen }" />
    </div>
    <nav 
      :class="{'nav__desktop--show': isNavOpen}"
      class="nav__desktop fixed z-10 pin-x pin-t bg-black text-vue-brand font-bold p-4">
      <ul class="list-reset flex mobile:flex-col items-center tablet:justify-center tablet:flex-wrap mobile:mt-8">
        <li 
          v-for="(item, index) in navItems"
          :key="index"
          class="cursor-pointer mobile:my-1 tablet:mx-2"
          @click="$emit('scrollToSection', item, isNavOpen = false)">{{ item }}
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
  $p: &;

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
      width: 30px;
      transform: rotate(0deg);
      transition: .5s ease-in-out;

      span {
        position: absolute;
        height: 5px;
        width: 30px;
        background: #42b883;
        border-radius: 9px;
        opacity: 1;
        right: 0;
        transform: rotate(0deg);
        transition: .25s ease-in-out;

        &:first-child {
          top: 0;
        }

        &:nth-child(2),
        &:nth-child(3) {
          top: 10px;
        }

        &:last-child {
          top: 20px;
        }

        &.nav__mobile-open {
          &:first-child,
          &:last-child {
            top: 10px;
            width: 0%;
            right: 40%;
          }

          &:nth-child(2) {
            transform: rotate(45deg);
          }

          &:nth-child(3) {
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
</style>
