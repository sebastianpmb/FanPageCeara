<template>
  <div>
    <!-- sidebar  -->
    <transition name="nav">
      <div
        v-if="sidebar === true"
        :key="sidebar"
        class="fixed inset-0 z-50 overflow-y-auto w-screen h-min-screen bg-gray-200 font-ind"
      >
        <div
          class="w-full mb-24 pt-12 flex flex-col justify-end items-center"
        >
          <div class="w-full flex justify-end">
            <button class="flex content-center mr-12 hover:text-purple-700" @click="closeSideBar()">
              <font-awesome-icon class="fa-2x px-1 -mt-1" icon="xmark" />
              <span class="ml-2">Fechar</span>
            </button>
          </div>
          <ul class="mt-12 w-full" @click="closeSideBar()">
            <a href="#planos" class="hover:text-neutral-900">
              <li class="py-6 pl-8 border-b-2 border-neutral-700 hover:bg-purple-700 transition duration-300">
                PROJETO
              </li>
            </a>
            <a href="#setores" class="hover:text-neutral-900">
              <li class="py-6 pl-8 border-b-2 border-neutral-700 hover:bg-purple-700 transition duration-300">
                CAMISA 2020
              </li>
            </a>
            <a href="#parceiros" class="hover:text-neutral-900">
              <li class="py-6 pl-8 border-b-2 border-neutral-700 hover:bg-purple-700 transition duration-300">
                REGULAMENTO
              </li>
            </a>
            <a href="#perguntas" class="hover:text-neutral-900">
              <li class="py-6 pl-8 border-b-2 border-neutral-700 hover:bg-purple-700 transition duration-300">
                FAQ
              </li>
            </a>
            <a href="" class="hover:text-neutral-900">
              <li class="py-6 pl-8 border-b-2 border-neutral-700 hover:bg-purple-700 transition duration-300">
                CLIQUE E VOTE
              </li>
            </a>
          </ul>
        </div>
      </div>
    </transition>

    <!-- navbar on top -->
    <nav class="relative w-full font-ind bg-cover bg-no-repeat"
    >
      <section class="relative container flex justify-end items-center h-24 pt-6 px-5 lg:justify-center xl:h-28">
        <img class="absolute top-0 left-0 w-56 mt-5 -ml-4 xl:w-80 xl:mt-3 xl:-ml-16"
             src="~/assets/img/logo.png"
             alt="Logo Nação Alvinegra - Meninas do Vozão" />
        <ul class="hidden flex-row justify-between items-center lg:flex lg:w-7/12 xl:w-8/12 xl:px-10">
          <li class="text-pink-300 text-base">
            <a href="#planos">PROJETO</a>
          </li>
          |
          <li class="text-base">
            <a href="#setores">CAMISA 2020</a>
          </li>
          |
          <li class="text-base">
            <a href="#parceiros">REGULAMENTO</a>
          </li>
          |
          <li class="text-base">
            <a href="#perguntas">FAQ</a>
          </li>
          |
          <li class="text-base">
            <a href="">CLIQUE E VOTE</a>
          </li>
          <div class="flex absolute right-0 mr-8">
            <div class="ml-5 text-right font-sans text-xs md:ml-8 lg:text-sm">
              <p class="uppercase font-extrabold">John Doe</p>
              <span class="text-pink-300 font-light"><a href="">EDITAR</a> | <a href="">SAIR</a></span>
            </div>
            <button class="relative w-7 -mt-1 ml-3 fill-zinc-900 hover:fill-purple-700">
              <div class="absolute top-0 right-0 w-5 -mt-3 -mr-3.5 rounded-full bg-purple-700 text-sm text-black lg:-mt-2">
                1
              </div>
              <div class="w-8 h-8 rounded-full bg-white border border-black overflow-hidden lg:w-9 lg:h-9 xl:w-11 xl:h-11">
                <font-awesome-icon class="fa-2x mt-2 text-gray-600" icon="user"/>
              </div>
            </button>
          </div>
        </ul>

        <!-- mobile buttons -->
        <div class="flex items-center lg:hidden">
          <button class="hover:text-purple-700" @click="openSideBar()">
            <font-awesome-icon class="fa-2x px-1" icon="bars"/>
          </button>
          <div class="ml-5 text-right font-sans text-xs md:ml-8">
            <p class="uppercase font-extrabold">John Doe</p>
            <span class="text-pink-300 font-light"><a href="">EDITAR</a> | <a href="">SAIR</a></span>
          </div>
          <button class="relative w-7 -mt-1 ml-3 fill-zinc-900 hover:fill-purple-700">
            <div class="absolute top-0 right-0 w-5 -mt-3 -mr-3.5 rounded-full bg-purple-700 text-sm text-black">
              1
            </div>
            <div class="w-8 h-8 rounded-full bg-white border border-black overflow-hidden">
              <font-awesome-icon class="fa-2x mt-2 text-gray-600" icon="user"/>
            </div>
          </button>
        </div>
      </section>
    </nav>

    <header
      class="bg-center bg-cover bg-black py-32"
    >
      <div class="container font-tusker text-center">
        <article class="w-80 mx-auto md:w-8/12 xl:w-6/12 2xl:px-12">
          <p class=" text-pink-300 text-xl md:text-2xl">ESCOLHA AGORA A NOVA</p>
          <h1 class="font-gilroy font-bold text-white text-7xl md:text-8xl lg:text-9xl">
            <span class="mr-1.5">Nação</span><br>
            <span class="block -mt-1.5 md:-mt-3 lg:-mt-5">Alvinegra</span>
          </h1>
          <img class="w-48 -mt-2 mb-6 md:w-56 md:-mt-3 md:ml-2 lg:w-72 lg:-mt-5 lg:ml-10 xl:ml-0"
               src="~/assets/img/tag-meninas-do-vozao.png"
               alt="Tarja Nação Alvinegra - Meninas do Vozão" />
          <button id="btn-header" class="mb-14 py-3 px-20 font-noodle rounded text-white text-3xl md:text-4xl">
            VOTE AGORA!
          </button>
        </article>
        <p class="font-sans text-xs text-white lg:w-8/12 lg:mx-auto xl:w-6/12 2xl:px-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.
        </p>
      </div>
    </header>

    <!-- Planos section -->
    <section id="planos" class="bg-white">
      <div class="container py-24">
        <h2 class="mb-16 text-black font-bold uppercase text-center text-5xl xl:text-6xl">
          Planos
        </h2>

        <!-- card details modal-->
        <transition name="cardModal" mode="in-out">
          <card-modal v-if="showModal" :modal-item="modalItem" :show="showModal" @close="showModal=false" />
        </transition>

        <!-- cards -->
        <section v-for="(plan, index) in plans" :key="index" class="mb-10">
          <h3 class="mb-6 font-light text-black uppercase text-center text-4xl xl:text-5xl">
            {{ plan.title }}
          </h3>
          <article class="pb-12 flex flex-col md:flex-row md:flex-wrap md:justify-center">
            <div v-for="(card, i) in plan.cards" :key="i" class="md:w-1/2 lg:w-1/3 mb-8">
              <div
                class="overflow-hidden mx-2 mt-5 rounded-2xl shadow-2xl drop-shadow-lg hover:scale-105 transition duration-100"
                @click="clickCardDetails(card)"
              >
                <div class="bg-stone-950 pt-4 pl-10 bg-cover" style="background-image: url('https://images.unsplash.com/photo-1541280910158-c4e14f9c94a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')">
                  <span class="bg-white rounded-lg py-1 px-8 text-sm text-black">{{ card.type }}</span>
                  <div class="flex h-32 justify-between pt-7">
                    <div class="text-lg font-black uppercase">
                      <h4 class="mb-2 text-white">
                        <span class="whitespace-pre-line">{{ card.title }}</span>
                      </h4>
                      <button
                        class="text-xs text-pink-300 font-light"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenteredScrollable"
                        @click="clickCardDetails(card)"
                      >
                        Mais detalhes
                      </button>
                    </div>
                    <div
                      class="flex flex-col justify-center w-1/3 mt-10 text-center text-black bg-purple-700"
                      style="clip-path: polygon(0 13%, 100% 0, 100% 100%, 0% 100%)"
                    >
                      <span class="font-black text-lg">{{ card.price[0] }}</span>
                      <span class="text-xs font-normal">{{ card.price[1] }}</span>
                    </div>
                  </div>
                </div>
                <div
                  class="flex flex-col align-middle justify-center h-16 px-2
                text-center font-light bg-black"
                >
                  <span class="whitespace-pre-line text-white">{{ card.subtitle }}</span>
                </div>
                <div
                  v-if="card.desc"
                  class="flex flex-col justify-center h-20 py-0 px-6
                     text-center align-text-top text-sm font-light bg-neutral-500"
                >
                  <span class="whitespace-pre-line">{{ card.desc }}</span>
                </div>
                <ul class="text-black w-full container md:px-8 xl:px-10">
                  <li
                    v-for="(item, itemIndex) in card.items"
                    :key="itemIndex"
                    class="flex flex-col justify-center h-20 py-0 border-b border-b-neutral-300 last:border-0"
                  >
                    <p class="text-center font-light text-sm">
                      <span class="whitespace-pre-line">{{ item }}</span>
                    </p>
                  </li>
                </ul>
                <button
                  class="relative z-10 w-full py-5 border border-transparent bg-purple-700 text-white font-black uppercase
                hover:bg-purple-800 focus:bg-purple-800 outline-purple-900 rounded-b-2xl"
                >
                  {{ card.button }}
                </button>
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>

    <!-- Setores section -->
    <section id="setores" class="bg-white py-12 md:py-16">
      <div class="container">
        <h2 class="relative mb-16 uppercase font-bold text-black text-center text-5xl xl:text-6xl">
          Setores
        </h2>
        <div class="aspect-video mx-auto bg-gray-400 flex flex-col justify-center align-middle">
          <h3 class="mb-8 px-12 uppercase text-black text-center text-3xl xl:text-5xl">
            Mapa do Estádio
          </h3>
        </div>
      </div>
    </section>

    <!-- Parceiros section -->
    <section id="parceiros" class="bg-white text-black py-12 md:py-24">
      <div class="container">
        <h2 class="mb-16 uppercase font-bold text-black text-center text-5xl xl:text-6xl">
          Parceiros Lorem
        </h2>
        <div class="flex flex-wrap justify-center -mx-8 lg:mx-0">
          <div
            v-for="(partner, partnerIndex) in partners"
            :key="partnerIndex"
            class="w-1/2 mb-12 px-8 text-center md:w-1/3 lg:w-1/4"
          >
            <img :src="partner.imageSrc" class="mx-auto mb-3 rounded-full" :alt="partner.imageAlt">
            <h3 class="pb-3 mb-2 text-xl font-bold uppercase border-b border-black inline-block">
              {{ partner.name }}
            </h3>
            <p class="text-sm">
              {{ partner.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Q&A section -->
    <section id="perguntas" class="bg-neutral-200 py-12 md:py-24">
      <div class="container">
        <h2 class="mb-16 uppercase font-bold text-black text-center text-5xl xl:text-6xl">
          Perguntas Frequentes
        </h2>
        <div class="text-neutral-700">
          <questions-accordion title="Trevor Belmont">
            <p class="pb-5">
              Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.
            </p>

            <p class="pb-5">
              Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.
            </p>
          </questions-accordion>
          <questions-accordion title="Alucard">
            <p class="pb-5">
              Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.
            </p>

            <p class="pb-5">
              Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.
            </p>
          </questions-accordion>
          <questions-accordion title="Sypha Belnades">
            <p class="pb-5">
              Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.
            </p>

            <p class="pb-5">
              Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.
            </p>
          </questions-accordion>
          <questions-accordion title="Sypha Belnades">
            <p class="pb-5">
              Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.
            </p>

            <p class="pb-5">
              Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.
            </p>
          </questions-accordion>
          <questions-accordion title="Sypha Belnades">
            <p class="pb-5">
              Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.
            </p>

            <p class="pb-5">
              Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.
            </p>
          </questions-accordion>
          <questions-accordion title="Sypha Belnades">
            <p class="pb-5">
              Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.
            </p>

            <p class="pb-5">
              Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.
            </p>
          </questions-accordion>
          <questions-accordion title="Sypha Belnades">
            <p class="pb-5">
              Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.
            </p>

            <p class="pb-5">
              Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.
            </p>
          </questions-accordion>
          <questions-accordion title="Sypha Belnades">
            <p class="pb-5">
              Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.
            </p>

            <p class="pb-5">
              Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.
            </p>
          </questions-accordion>
        </div>
      </div>
    </section>

    <!-- footer -->
    <footer class="container flex flex-col justify-between py-24">
      <div class="flex flex-col md:flex-row md:mt-20">
        <!-- title  -->
        <div class="md:w-1/4">
          <h2 class="mb-8 text-purple-700 text-xl">
            Atendimento
          </h2>
          <!-- social media links  -->
          <div class="flex justify-between my-20 md:hidden">
            <a href=""><font-awesome-icon
              class="fa-2x"
              :icon="['fab', 'facebook']"
            /></a>
            <a href=""><font-awesome-icon
              class="fa-2x"
              :icon="['fab', 'instagram']"
            /></a>
            <a href=""><font-awesome-icon
              class="fa-2x"
              :icon="['fab', 'youtube']"
            /></a>
            <a href=""><font-awesome-icon
              class="fa-2x"
              :icon="['fab', 'tiktok']"
            /></a>
            <a href=""><font-awesome-icon
              class="fa-2x"
              :icon="['fab', 'twitter']"
            /></a>
          </div>
        </div>
        <!-- double menu  -->
        <div class="flex mb-8 md:w-1/2">
          <!-- left menu  -->
          <div class="w-1/2">
            <h3 class="text-purple-700 text-xl mb-8">
              Serviços
            </h3>
            <ul class="flex flex-col">
              <li class="mb-3">
                <a href="">Lorem</a>
              </li>
              <li class="mb-3">
                <a href="">3000+</a>
              </li>
              <li class="mb-3">
                <a href="">Loremcents</a>
              </li>
              <li class="mb-3">
                <a href="">Ingressos</a>
              </li>
              <li class="mb-3">
                <a href="">Cadeiras vitalícias</a>
              </li>
              <li class="mb-3">
                <a href="">Conselho</a>
              </li>
              <li class="mb-3">
                <a href="">Consórcio</a>
              </li>
            </ul>
          </div>
          <!-- right menu  -->
          <div class="w-1/2 pl-16 md:pl-0">
            <h3 class="text-purple-700 text-xl mb-8">
              Planos
            </h3>
            <ul class="flex flex-col">
              <li class="mb-3">
                <a href="">LoremTV</a>
              </li>
              <li class="mb-3">
                <a href="">Instagram</a>
              </li>
              <li class="mb-3">
                <a href="">Twitter</a>
              </li>
              <li class="mb-3">
                <a href="">Facebook</a>
              </li>
              <li class="mb-3">
                <a href="">Linkedin</a>
              </li>
              <li class="mb-3">
                <a href="">TikTok</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- club logo -->
        <div class="md:w-1/3">
          <!-- social media links  -->
          <div class="justify-between mb-20 hidden md:flex">
            <a href="">
              <font-awesome-icon
                class="fa-2x"
                :icon="['fab', 'facebook']"
              /></a>
            <a href="">
              <font-awesome-icon
                class="fa-2x"
                :icon="['fab', 'instagram']"
              /></a>
            <a href="">
              <font-awesome-icon
                class="fa-2x"
                :icon="['fab', 'youtube']"
              /></a>
            <a href="">
              <font-awesome-icon
                class="fa-2x"
                :icon="['fab', 'tiktok']"
              /></a>
            <a href="">
              <font-awesome-icon
                class="fa-2x"
                :icon="['fab', 'twitter']"
              /></a>
          </div>
          <div class="text-center">
            <font-awesome-icon class="fa-7x text-center mx-auto mb-12 w-28" icon="shield" />
          </div>
        </div>
      </div>
      <!-- copyright text  -->
      <div class="mt-12">
        <p class="text-center text-black text-sm">
          Lorem ID © 2022
        </p>
        <p class="text-center text-black text-sm">
          Todos os direitos reservados
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import CardModal from '../components/Modal.vue'
import QuestionsAccordion from '~/components/Accordion'
import shoppingCartIcon from '~/assets/img/shopping-cart-solid.svg?inline'

export default {
  name: 'IndexPage',
  components: {
    CardModal,
    QuestionsAccordion,
    shoppingCartIcon
  },
  data () {
    return {
      sidebar: false,
      showModal: false,
      modalItem: {},
      plans: [
        {
          title: 'Arquibancada',
          cards: [
            {
              type: 'Arquibancada',
              title: 'Lorem\nJúnior',
              price: ['R$ 19', 'por mês'],
              subtitle: '13 a 18 anos',
              items: [
                'Acesso livre a todos os jogos \nda Lorem no Estádio \n(setores arquibancada ou organizada)',
                '5% Desconto na loja oficial',
                'KIT Junior *',
                'Experiencias e Beneficios exclusivos'
              ],
              infos: {
                title: 'Informações do Plano',
                desc: 'Este plano é exclusivo para o torcedor de 13 a 18 anos e garante entrada em todos os jogos da Lorem Ipsum como mandante no Estádio, com entrada pelos portões 4 (Setor Geral/Organizadas) ou 5 (Arquibancada), sem necessidade da compra de ingresso. \n\nÉ a melhor opção para o torcedor estudante que ainda possui direito à compra de ingresso meia entrada, mas pode economizar mensalmente com o plano e de quebra garantir entrada em todos os jogos da Lorem com a sua carteirinha Lorem Junior. E não precisa ser dependente de um adulto para isso. \n\nAlém disso, o plano dá direito à prioridade de compra de ingressos com cargas limitadas (jogos fora de casa com venda praticada pela Lorem Ipsum ou partidas com possibilidade de casa cheia no Moisés Lucarelli), 5% de desconto em compras realizadas na 3000+, loja oficial da Lorem, todos os benefícios oferecidos pelos parceiros do programa (descontos em diversos estabelecimentos e ativações de experiência dessas empresas junto à Lorem), além da participação em sorteios e ativações exclusivas do próprio programa Lorem, como brindes, prêmios, eventos, experiências com jogadores e visitas exclusivas ao estádio e Centro de Treinamento. \n\nE quer saber o melhor de tudo? Sua contribuição deixa a Lorem Ipsum ainda mais forte!'
              },
              resume: {
                title: 'Resumo do Plano',
                items: [
                  {
                    title: 'Entrada',
                    desc: 'Acesso garantido nos portões 4 e 5 do Estádio.'
                  },
                  {
                    title: 'Prioridade',
                    desc: 'Prioridade 2 na compra de ingressos limitados (jogos fora de casa ou possibilidade de casa cheia).'
                  },
                  {
                    title: 'DESCONTO NA 3000+',
                    desc: '5% de desconto na loja oficial.'
                  },
                  {
                    title: 'KIT',
                    desc: '1 KIT JUNIOR após o pagamento da terceira mensalidade. '
                  },
                  {
                    title: 'BENEFÍCIOS DE PARCEIROS',
                    desc: 'Sim. '
                  },
                  {
                    title: 'EXPERIÊNCIAS',
                    desc: 'Participação em sorteios e ativações exclusivas do programa Lorem, como brindes, eventos, experiências com jogadores e visitas exclusivas ao estádio e CT.'
                  }
                ]
              },
              button: 'Assinar'
            },
            {
              type: 'Arquibancada',
              title: 'Lorem\nOrganizada',
              price: ['R$ 29', 'por mês'],
              subtitle: 'Torcida Organizada',
              items: [
                'Acesso livre a todos os jogos \nda Lorem no Estádio \n(setores arquibancada ou organizada)',
                '5% Desconto na loja oficial',
                '1 KIT Organizada *',
                'Experiencias e Beneficios exclusivos'
              ],
              infos: {
                title: 'Informações do Plano',
                desc: 'Este plano é exclusivo para o torcedor de 13 a 18 anos e garante entrada em todos os jogos da Lorem Ipsum como mandante no Estádio, com entrada pelos portões 4 (Setor Geral/Organizadas) ou 5 (Arquibancada), sem necessidade da compra de ingresso. \n\nÉ a melhor opção para o torcedor estudante que ainda possui direito à compra de ingresso meia entrada, mas pode economizar mensalmente com o plano e de quebra garantir entrada em todos os jogos da Lorem com a sua carteirinha Lorem Junior. E não precisa ser dependente de um adulto para isso. \n\nAlém disso, o plano dá direito à prioridade de compra de ingressos com cargas limitadas (jogos fora de casa com venda praticada pela Lorem Ipsum ou partidas com possibilidade de casa cheia no Moisés Lucarelli), 5% de desconto em compras realizadas na 3000+, loja oficial da Lorem, todos os benefícios oferecidos pelos parceiros do programa (descontos em diversos estabelecimentos e ativações de experiência dessas empresas junto à Lorem), além da participação em sorteios e ativações exclusivas do próprio programa Lorem, como brindes, prêmios, eventos, experiências com jogadores e visitas exclusivas ao estádio e Centro de Treinamento. \n\nE quer saber o melhor de tudo? Sua contribuição deixa a Lorem Ipsum ainda mais forte!'
              },
              resume: {
                title: 'Resumo do Plano',
                items: [
                  {
                    title: 'Entrada',
                    desc: 'Acesso garantido nos portões 4 e 5 do Estádio.'
                  },
                  {
                    title: 'Prioridade',
                    desc: 'Prioridade 2 na compra de ingressos limitados (jogos fora de casa ou possibilidade de casa cheia).'
                  },
                  {
                    title: 'DESCONTO NA 3000+',
                    desc: '5% de desconto na loja oficial.'
                  },
                  {
                    title: 'KIT',
                    desc: '1 KIT JUNIOR após o pagamento da terceira mensalidade. '
                  },
                  {
                    title: 'BENEFÍCIOS DE PARCEIROS',
                    desc: 'Sim. '
                  },
                  {
                    title: 'EXPERIÊNCIAS',
                    desc: 'Participação em sorteios e ativações exclusivas do programa Lorem, como brindes, eventos, experiências com jogadores e visitas exclusivas ao estádio e CT.'
                  }
                ]
              },
              button: 'Assinar'
            },
            {
              type: 'Arquibancada',
              title: 'Lorem\nArquibancada',
              price: ['R$ 49', 'por mês'],
              subtitle: 'Todos',
              items: [
                'Acesso livre a todos os jogos \nda Lorem no Estádio \n(setores arquibancada ou organizada)',
                '10% Desconto na loja oficial',
                'KIT Arquibancada *',
                'Experiencias e Beneficios exclusivos'
              ],
              infos: {
                title: 'Informações do Plano',
                desc: 'Este plano é exclusivo para o torcedor de 13 a 18 anos e garante entrada em todos os jogos da Lorem Ipsum como mandante no Estádio, com entrada pelos portões 4 (Setor Geral/Organizadas) ou 5 (Arquibancada), sem necessidade da compra de ingresso. \n\nÉ a melhor opção para o torcedor estudante que ainda possui direito à compra de ingresso meia entrada, mas pode economizar mensalmente com o plano e de quebra garantir entrada em todos os jogos da Lorem com a sua carteirinha Lorem Junior. E não precisa ser dependente de um adulto para isso. \n\nAlém disso, o plano dá direito à prioridade de compra de ingressos com cargas limitadas (jogos fora de casa com venda praticada pela Lorem Ipsum ou partidas com possibilidade de casa cheia no Moisés Lucarelli), 5% de desconto em compras realizadas na 3000+, loja oficial da Lorem, todos os benefícios oferecidos pelos parceiros do programa (descontos em diversos estabelecimentos e ativações de experiência dessas empresas junto à Lorem), além da participação em sorteios e ativações exclusivas do próprio programa Lorem, como brindes, prêmios, eventos, experiências com jogadores e visitas exclusivas ao estádio e Centro de Treinamento. \n\nE quer saber o melhor de tudo? Sua contribuição deixa a Lorem Ipsum ainda mais forte!'
              },
              resume: {
                title: 'Resumo do Plano',
                items: [
                  {
                    title: 'Entrada',
                    desc: 'Acesso garantido nos portões 4 e 5 do Estádio.'
                  },
                  {
                    title: 'Prioridade',
                    desc: 'Prioridade 2 na compra de ingressos limitados (jogos fora de casa ou possibilidade de casa cheia).'
                  },
                  {
                    title: 'DESCONTO NA 3000+',
                    desc: '5% de desconto na loja oficial.'
                  },
                  {
                    title: 'KIT',
                    desc: '1 KIT JUNIOR após o pagamento da terceira mensalidade. '
                  },
                  {
                    title: 'BENEFÍCIOS DE PARCEIROS',
                    desc: 'Sim. '
                  },
                  {
                    title: 'EXPERIÊNCIAS',
                    desc: 'Participação em sorteios e ativações exclusivas do programa Lorem, como brindes, eventos, experiências com jogadores e visitas exclusivas ao estádio e CT.'
                  }
                ]
              },
              button: 'Assinar'
            }
          ]
        },
        {
          title: 'VIP',
          cards: [
            {
              type: 'VIP',
              title: 'Lorem\nVIP Júnior',
              price: ['R$ 49', 'por mês'],
              subtitle: '13 a 18 anos',
              items: [
                'Acesso livre a todos os jogos \nda Lorem no Estádio \n(setor VIP)',
                '10% Desconto na loja oficial',
                'KIT VIP Júnior *',
                'Beneficios e Experiencias'
              ],
              infos: {
                title: 'Informações do Plano',
                desc: 'Este plano é exclusivo para o torcedor de 13 a 18 anos e garante entrada em todos os jogos da Lorem Ipsum como mandante no Estádio, com entrada pelos portões 4 (Setor Geral/Organizadas) ou 5 (Arquibancada), sem necessidade da compra de ingresso. \n\nÉ a melhor opção para o torcedor estudante que ainda possui direito à compra de ingresso meia entrada, mas pode economizar mensalmente com o plano e de quebra garantir entrada em todos os jogos da Lorem com a sua carteirinha Lorem Junior. E não precisa ser dependente de um adulto para isso. \n\nAlém disso, o plano dá direito à prioridade de compra de ingressos com cargas limitadas (jogos fora de casa com venda praticada pela Lorem Ipsum ou partidas com possibilidade de casa cheia no Moisés Lucarelli), 5% de desconto em compras realizadas na 3000+, loja oficial da Lorem, todos os benefícios oferecidos pelos parceiros do programa (descontos em diversos estabelecimentos e ativações de experiência dessas empresas junto à Lorem), além da participação em sorteios e ativações exclusivas do próprio programa Lorem, como brindes, prêmios, eventos, experiências com jogadores e visitas exclusivas ao estádio e Centro de Treinamento. \n\nE quer saber o melhor de tudo? Sua contribuição deixa a Lorem Ipsum ainda mais forte!'
              },
              resume: {
                title: 'Resumo do Plano',
                items: [
                  {
                    title: 'Entrada',
                    desc: 'Acesso garantido nos portões 4 e 5 do Estádio.'
                  },
                  {
                    title: 'Prioridade',
                    desc: 'Prioridade 2 na compra de ingressos limitados (jogos fora de casa ou possibilidade de casa cheia).'
                  },
                  {
                    title: 'DESCONTO NA 3000+',
                    desc: '5% de desconto na loja oficial.'
                  },
                  {
                    title: 'KIT',
                    desc: '1 KIT JUNIOR após o pagamento da terceira mensalidade. '
                  },
                  {
                    title: 'BENEFÍCIOS DE PARCEIROS',
                    desc: 'Sim. '
                  },
                  {
                    title: 'EXPERIÊNCIAS',
                    desc: 'Participação em sorteios e ativações exclusivas do programa Lorem, como brindes, eventos, experiências com jogadores e visitas exclusivas ao estádio e CT.'
                  }
                ]
              },
              button: 'Assinar'
            },
            {
              type: 'VIP',
              title: 'Lorem\nVIP',
              price: ['R$ 89', 'por mês'],
              subtitle: 'Todos',
              items: [
                'Acesso livre a todos os jogos \nda Lorem no Estádio \n(setor VIP)',
                '10% Desconto na loja oficial',
                'KIT VIP *',
                'Beneficios e experiencias'
              ],
              infos: {
                title: 'Informações do Plano',
                desc: 'Este plano é exclusivo para o torcedor de 13 a 18 anos e garante entrada em todos os jogos da Lorem Ipsum como mandante no Estádio, com entrada pelos portões 4 (Setor Geral/Organizadas) ou 5 (Arquibancada), sem necessidade da compra de ingresso. \n\nÉ a melhor opção para o torcedor estudante que ainda possui direito à compra de ingresso meia entrada, mas pode economizar mensalmente com o plano e de quebra garantir entrada em todos os jogos da Lorem com a sua carteirinha Lorem Junior. E não precisa ser dependente de um adulto para isso. \n\nAlém disso, o plano dá direito à prioridade de compra de ingressos com cargas limitadas (jogos fora de casa com venda praticada pela Lorem Ipsum ou partidas com possibilidade de casa cheia no Moisés Lucarelli), 5% de desconto em compras realizadas na 3000+, loja oficial da Lorem, todos os benefícios oferecidos pelos parceiros do programa (descontos em diversos estabelecimentos e ativações de experiência dessas empresas junto à Lorem), além da participação em sorteios e ativações exclusivas do próprio programa Lorem, como brindes, prêmios, eventos, experiências com jogadores e visitas exclusivas ao estádio e Centro de Treinamento. \n\nE quer saber o melhor de tudo? Sua contribuição deixa a Lorem Ipsum ainda mais forte!'
              },
              resume: {
                title: 'Resumo do Plano',
                items: [
                  {
                    title: 'Entrada',
                    desc: 'Acesso garantido nos portões 4 e 5 do Estádio.'
                  },
                  {
                    title: 'Prioridade',
                    desc: 'Prioridade 2 na compra de ingressos limitados (jogos fora de casa ou possibilidade de casa cheia).'
                  },
                  {
                    title: 'DESCONTO NA 3000+',
                    desc: '5% de desconto na loja oficial.'
                  },
                  {
                    title: 'KIT',
                    desc: '1 KIT JUNIOR após o pagamento da terceira mensalidade. '
                  },
                  {
                    title: 'BENEFÍCIOS DE PARCEIROS',
                    desc: 'Sim. '
                  },
                  {
                    title: 'EXPERIÊNCIAS',
                    desc: 'Participação em sorteios e ativações exclusivas do programa Lorem, como brindes, eventos, experiências com jogadores e visitas exclusivas ao estádio e CT.'
                  }
                ]
              },
              button: 'Assinar'
            },
            {
              type: 'VIP',
              title: 'Lorem\nVIP Plus',
              price: ['R$ 149', 'por mês'],
              subtitle: 'Todos',
              items: [
                'Acesso livre a todos os jogos \nda Lorem no Estádio \n(setor VIP)',
                '1 Ingresso para acompanhante \n(setor VIP)',
                '10% Desconto na loja oficial',
                'KIT VIP *'
              ],
              infos: {
                title: 'Informações do Plano',
                desc: 'Este plano é exclusivo para o torcedor de 13 a 18 anos e garante entrada em todos os jogos da Lorem Ipsum como mandante no Estádio, com entrada pelos portões 4 (Setor Geral/Organizadas) ou 5 (Arquibancada), sem necessidade da compra de ingresso. \n\nÉ a melhor opção para o torcedor estudante que ainda possui direito à compra de ingresso meia entrada, mas pode economizar mensalmente com o plano e de quebra garantir entrada em todos os jogos da Lorem com a sua carteirinha Lorem Junior. E não precisa ser dependente de um adulto para isso. \n\nAlém disso, o plano dá direito à prioridade de compra de ingressos com cargas limitadas (jogos fora de casa com venda praticada pela Lorem Ipsum ou partidas com possibilidade de casa cheia no Moisés Lucarelli), 5% de desconto em compras realizadas na 3000+, loja oficial da Lorem, todos os benefícios oferecidos pelos parceiros do programa (descontos em diversos estabelecimentos e ativações de experiência dessas empresas junto à Lorem), além da participação em sorteios e ativações exclusivas do próprio programa Lorem, como brindes, prêmios, eventos, experiências com jogadores e visitas exclusivas ao estádio e Centro de Treinamento. \n\nE quer saber o melhor de tudo? Sua contribuição deixa a Lorem Ipsum ainda mais forte!'
              },
              resume: {
                title: 'Resumo do Plano',
                items: [
                  {
                    title: 'Entrada',
                    desc: 'Acesso garantido nos portões 4 e 5 do Estádio.'
                  },
                  {
                    title: 'Prioridade',
                    desc: 'Prioridade 2 na compra de ingressos limitados (jogos fora de casa ou possibilidade de casa cheia).'
                  },
                  {
                    title: 'DESCONTO NA 3000+',
                    desc: '5% de desconto na loja oficial.'
                  },
                  {
                    title: 'KIT',
                    desc: '1 KIT JUNIOR após o pagamento da terceira mensalidade. '
                  },
                  {
                    title: 'BENEFÍCIOS DE PARCEIROS',
                    desc: 'Sim. '
                  },
                  {
                    title: 'EXPERIÊNCIAS',
                    desc: 'Participação em sorteios e ativações exclusivas do programa Lorem, como brindes, eventos, experiências com jogadores e visitas exclusivas ao estádio e CT.'
                  }
                ]
              },
              button: 'Assinar'
            }
          ]
        }
      ],
      partners: [
        {
          imageSrc: 'https://picsum.photos/60/60',
          imageAlt: 'Logo Zé Delivery',
          name: 'Zé Delivery',
          desc: '10% de desconto em todas as compras'
        },
        {
          imageSrc: 'https://picsum.photos/60/60',
          imageAlt: 'Logo Zé Delivery',
          name: 'Zé Delivery',
          desc: '10% de desconto em todas as compras'
        },
        {
          imageSrc: 'https://picsum.photos/60/60',
          imageAlt: 'Logo Zé Delivery',
          name: 'Zé Delivery',
          desc: '10% de desconto em todas as compras'
        },
        {
          imageSrc: 'https://picsum.photos/60/60',
          imageAlt: 'Logo Zé Delivery',
          name: 'Zé Delivery',
          desc: '10% de desconto em todas as compras'
        },
        {
          imageSrc: 'https://picsum.photos/60/60',
          imageAlt: 'Logo Zé Delivery',
          name: 'Zé Delivery',
          desc: '10% de desconto em todas as compras'
        },
        {
          imageSrc: 'https://picsum.photos/60/60',
          imageAlt: 'Logo Zé Delivery',
          name: 'Zé Delivery',
          desc: '10% de desconto em todas as compras'
        },
        {
          imageSrc: 'https://picsum.photos/60/60',
          imageAlt: 'Logo Zé Delivery',
          name: 'Zé Delivery',
          desc: '10% de desconto em todas as compras'
        },
        {
          imageSrc: 'https://picsum.photos/60/60',
          imageAlt: 'Logo Zé Delivery',
          name: 'Zé Delivery',
          desc: '10% de desconto em todas as compras'
        }
      ],
      experiences: [
        {
          date: '00/00/0000',
          title: 'Crianças em Campo',
          subtitle: 'Todos',
          items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
          button: 'Tenho interesse'
        },
        {
          date: '00/00/0000',
          title: 'TORCEDORES',
          subtitle: 'Todos',
          items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
          button: 'Tenho interesse'
        },
        {
          date: '00/00/0000',
          title: 'RESENHA COM ÍDOLOS',
          subtitle: 'Proprietários de Camarotes',
          items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
          button: 'Tenho interesse'
        },
        {
          date: '00/00/0000',
          title: 'Lorem CUP NO MAJESTOSO',
          subtitle: 'Todos',
          items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
          button: 'Tenho interesse'
        },
        {
          date: '00/00/0000',
          title: 'Lorem CUP NO MAJESTOSO',
          subtitle: 'Todos',
          items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
          button: 'Tenho interesse'
        },
        {
          date: '00/00/0000',
          title: 'ALMOÇO COM LUCCA',
          subtitle: 'Proprietários de Camarotes',
          items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
          button: 'Tenho interesse'
        },
        {
          date: '00/00/0000',
          title: 'TREINO VIP',
          subtitle: 'Todos',
          items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
          button: 'Tenho interesse'
        },
        {
          date: '00/00/0000',
          title: 'PRELEÇÃO DO DÉRBI',
          subtitle: 'Todos',
          items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
          button: 'Tenho interesse'
        },
        {
          date: '00/00/0000',
          title: 'VIAJE COM O TIME',
          subtitle: 'Lorem BLACK',
          items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
          button: 'Tenho interesse'
        }
      ]
    }
  },
  methods: {
    clickCardDetails (item) {
      this.showModal = true
      this.modalItem = item
    },
    openSideBar () {
      this.sidebar = true
      document.body.classList.add('scroll-lock')
    },
    closeSideBar () {
      document.body.classList.remove('scroll-lock')
      this.sidebar = false
    }
  }
}
</script>
