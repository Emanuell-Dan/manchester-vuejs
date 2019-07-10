<template>
  <div 
    id="about"
    class="about pt-16">
    <h2 class="about__heading font-bold text-center text-2xl md:text-4xl mb-4 md:mb-8">What we're about</h2>
			
    <div class="about__content text-base">
      <p class="about__text mb-4">Welcome,</p>
      <p class="about__text mb-4">Organised and sponsored by the MoneySuperMarket team in Manchester, this group will run monthly events.
      This will offer a great opportunity for both developers with or without experience in this stack.
      The format of the meetup may differ each month, to give both developers mentioned previously a chance to learn new things and challenge themselves.</p>
      <p class="about__text mb-4">Suggestions for improvements or new topics are always welcomed!</p>
      <p class="about__text mb-4">Should you have something interesting to talk about, either from a theoretical point of view or a demo to showcase,
      this will be your chance! Get in touch with the organiser for more details.</p>

      <div class="about__footer md:flex md:justify-between">
        <p class="about__greet mb-4">Thanks and I hope you will all be joining us,<br>Emanuell &amp; the MoneySuperMarket team</p>
        <div class="about__social pt-2 md:pt-0 flex items-center">
          <p class="about__contact font-bold mr-4">Find us on:</p>
          <ul class="about__social-list list-reset flex items-center">
            <li class="about__social-item mr-4">
              <a
                href="https://www.meetup.com/VueJS-Manchester/"
                target="_blank"
                class="about__social-item--meetup cursor-pointer"/>
            </li>
            <li class="about__social-item about__social-item--twitter">
              <a
                href="https://twitter.com/vuejsmcr"
                target="_blank"
                class="about__social-item--twitter cursor-pointer"/>
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
