<template>
  <div>
    <!-- Q&A section -->
    <section id="perguntas" class="pt-12 mb-24 md:pt-24 md:pb-32">
      <div class="container">
        <h2 class="mb-16 uppercase font-ind font-bold text-black text-center text-5xl xl:text-6xl">
          Perguntas Frequentes
        </h2>
        <div class="text-neutral-700">
          <questions-accordion title="Quem pode votar?">
            <p class="pb-5">
              Todos os torcedores com cadastro na plataforma podem participar da votação.
            </p>
          </questions-accordion>
          <questions-accordion title="Até quando posso votar?">
            <p class="pb-5">
              A votação do concurso vai até o dia 24/05/2022.
            </p>
          </questions-accordion>
          <questions-accordion title="É possível votar mais de uma vez?">
            <p class="pb-5">
              Não, mas o seu voto pode ter um valor ainda maior. Sócios torcedores adimplentes e quem possui cadastro completo na plataforma possuem o voto com pesos diferentes na contagem da votação.
            </p>
          </questions-accordion>
          <questions-accordion title="Quando saberei qual o uniforme vencedor?">
            <p class="pb-5">
              Conforme o regulamento, a previsão do lançamento do uniforme é para o dia 24/11/2022, sujeito a alterações.
            </p>
          </questions-accordion>
          <questions-accordion title="Como será feito o anúncio do vencedor do concurso?">
            <p class="pb-5">
              O anúncio do vencedor será feito através das redes sociais oficiais do Ceará Sporting Club, concomitantemente com o lançamento do uniforme vencedor e o início da comercialização das vendas da camisa.
            </p>
          </questions-accordion>
        </div>
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
