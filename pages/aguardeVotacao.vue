<template>
  <div>
    <!-- Q&A section -->
    <section id="aguarde" class="pt-12 mb-32 md:pt-24 md:pb-48 lg:pb-36">
      <div class="container">
        <h2 class="mb-16 uppercase font-ind font-bold text-black text-center text-5xl xl:text-6xl">
          Anote na sua agenda!
        </h2>
        <div class="text-neutral-700">
          <p class="mb-16">
            Votação iniciará dia 19/05/2022 00:00 e vai até 23 de novembro de 2022 23:59. <br>
            Saiba mais na <nuxt-link to="/regulamento" class="text-pink-300">página de regulamento</nuxt-link>
          </p>
        </div>
        <nuxt-link to="/" class="mb-40 group text-purple-700">
          <font-awesome-icon :icon="['fas', 'arrow-left']" class="transition duration-200 group-hover:-translate-x-2" /> Voltar à página inicial
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import QuestionsAccordion from '~/components/Accordion'

export default {
  name: 'faq',
  layout: 'default',
  components: {
    QuestionsAccordion
  }
}
</script>

<style scoped>

</style>
