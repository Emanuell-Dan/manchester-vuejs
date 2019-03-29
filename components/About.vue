<template>
  <div 
    id="about"
    class="pt-16">
    <h2 class="about__title text-vue-brand text-center mobile:text-xl text-4xl mb-8">What we're about</h2>
			
    <div class="about__content text-base">
      <p class="mb-4">Welcome,</p>
      <p class="mb-4">Organised and sponsored by the MoneySuperMarket team in Manchester, this group will run monthly events.
      This will offer a great opportunity for both developers with or without experience in this stack.
      The format of the meetup may differ each month, to give both developers mentioned previously a chance to learn new things and challenge themselves.</p>
      <p class="mb-4">Suggestions for improvements or new topics are always welcomed!</p>
      <p class="mb-4">Should you have something interesting to talk about, either from a theoretical point of view or a demo to showcase,
      this will be your chance! Get in touch with the organiser for more details.</p>

      <div class="tablet:flex tablet:justify-between">
        <p class="mb-4">Thanks and I hope you will all be joining us,<br>Emanuell &amp; the MoneySuperMarket team</p>
        <div class="mobile:pt-8 about__social flex items-center">
          <p class="font-bold mr-4">Find us on:</p>
          <ul class="list-reset flex items-center">
            <li class="mr-4">
              <a
                href="https://www.meetup.com/VueJS-Manchester/"
                target="_blank">
                <img
                  class="cursor-pointer"
                  src="@/static/meetup.png" 
                  alt="Meetup logo">
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/vuejsmcr"
                target="_blank">
                <img 
                  class="cursor-pointer"
                  src="@/static/twitter.png" 
                  alt="Twitter logo">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'About'
};
</script>
