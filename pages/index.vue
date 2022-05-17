<template>
  <div class="relative">
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
          <p class="text-pink-300 text-xl md:text-2xl">ESCOLHA AGORA A NOVA</p>
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

    <!-- section 2 -->
    <section id="sec2" class="relative bg-cover overflow-x-hidden">
      <img class="pt-32 max-w-md md:w-1/2 md:max-w-none md:z-20"
           src="~/assets/img/sec2-camisa.webp"
           alt="Camisa Nação Alvinegra" />
      <div class="absolute inset-0">
        <div class="relative md:container md:mx-auto">
          <div class="relative pt-64 px-5 max-w-screen-xs mx-auto md:float-right md:pt-40 lg:w-7/12 lg:ml-auto lg:mr-0">
            <div class="bg-white flex items-center w-80 mx-auto px-5 pt-3 pb-8 lg:w-3/4 lg:pt-5 lg:pb-10 xl:pt-10">
              <img class="w-1/3 pr-3 lg:pr-4 xl:w-32 xl:pb-4" src="~/assets/img/sec2-frame-escudo.png" alt="Frame de escudo">
              <h2 class="w-2/3 font-gilroy font-bold text-violet-800 text-center">
                <span class="mr-1.5 font-normal font-tusker text-3xl lg:text-4xl xl:text-5xl">A CARA DA</span><br>
                <span class="block -mt-3 lg:-mt-3 text-6xl lg:text-7xl xl:tracking-wide xl:text-8xl">Nação</span>
              </h2>
            </div>
            <div id="sec2-card" class="relative bg-neutral-900 w-96 mx-auto shadow-2xl transform -rotate-2 lg:w-11/12">
              <p class="-mt-4 mb-8 pt-12 pb-10 px-8 font-light text-white text-justify text-xs transform rotate-2
              lg:mb-16 lg:text-base lg:px-12 xl:px-24 xl:text-xl">
                Chegamos ao segundo ano com a sua participação na criação do terceiro uniforme das Meninas do Vozão. Você,
                que é o nosso maior patrimônio, está presente em cada detalhe, desde a criação até a escolha da cara da
                nossa NAÇÃO ALVINEGRA. <br><br>
                Para nós, é uma enorme satisfação ter você com a gente, cantando, vibrando e apoiando. O Ceará Sporting Club
                é você quem faz! Muito obrigado por mais um ano de parceria, e que seja uma grande temporada para as Meninas
                do Vozão.
              </p>
            </div>
            <p id="sec2-frame"
               class="bg-contain bg-no-repeat w-80 mx-auto font-light text-center text-white py-2
               md:text-violet-800 lg:-mt-8 xl:mt-0 xl:w-96 xl:py-3 xl:text-xl">
              A TORCIDA <span class="font-bold">CRIA</span> E <span class="font-bold">ESCOLHE</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- section 3 -->
    <section id="sec3" class="relative" style="margin-top: -30%;">
      <img src="~/assets/img/sec3-camisa-nacao.webp" alt="Fundo Camisa Nação Alvinegra">
    </section>

    <!-- Planos section -->
<!--    <section id="planos" class="bg-white">-->
<!--      <div class="container py-24">-->
<!--        <h2 class="mb-16 text-black font-bold uppercase text-center text-5xl xl:text-6xl">-->
<!--          Planos-->
<!--        </h2>-->

<!--        &lt;!&ndash; card details modal&ndash;&gt;-->
<!--        <transition name="cardModal" mode="in-out">-->
<!--          <card-modal v-if="showModal" :modal-item="modalItem" :show="showModal" @close="showModal=false" />-->
<!--        </transition>-->

<!--        &lt;!&ndash; cards &ndash;&gt;-->
<!--        <section v-for="(plan, index) in plans" :key="index" class="mb-10">-->
<!--          <h3 class="mb-6 font-light text-black uppercase text-center text-4xl xl:text-5xl">-->
<!--            {{ plan.title }}-->
<!--          </h3>-->
<!--          <article class="pb-12 flex flex-col md:flex-row md:flex-wrap md:justify-center">-->
<!--            <div v-for="(card, i) in plan.cards" :key="i" class="md:w-1/2 lg:w-1/3 mb-8">-->
<!--              <div-->
<!--                class="overflow-hidden mx-2 mt-5 rounded-2xl shadow-2xl drop-shadow-lg hover:scale-105 transition duration-100"-->
<!--                @click="clickCardDetails(card)"-->
<!--              >-->
<!--                <div class="bg-stone-950 pt-4 pl-10 bg-cover" style="background-image: url('https://images.unsplash.com/photo-1541280910158-c4e14f9c94a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')">-->
<!--                  <span class="bg-white rounded-lg py-1 px-8 text-sm text-black">{{ card.type }}</span>-->
<!--                  <div class="flex h-32 justify-between pt-7">-->
<!--                    <div class="text-lg font-black uppercase">-->
<!--                      <h4 class="mb-2 text-white">-->
<!--                        <span class="whitespace-pre-line">{{ card.title }}</span>-->
<!--                      </h4>-->
<!--                      <button-->
<!--                        class="text-xs text-pink-300 font-light"-->
<!--                        data-bs-toggle="modal"-->
<!--                        data-bs-target="#exampleModalCenteredScrollable"-->
<!--                        @click="clickCardDetails(card)"-->
<!--                      >-->
<!--                        Mais detalhes-->
<!--                      </button>-->
<!--                    </div>-->
<!--                    <div-->
<!--                      class="flex flex-col justify-center w-1/3 mt-10 text-center text-black bg-purple-700"-->
<!--                      style="clip-path: polygon(0 13%, 100% 0, 100% 100%, 0% 100%)"-->
<!--                    >-->
<!--                      <span class="font-black text-lg">{{ card.price[0] }}</span>-->
<!--                      <span class="text-xs font-normal">{{ card.price[1] }}</span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div-->
<!--                  class="flex flex-col align-middle justify-center h-16 px-2-->
<!--                text-center font-light bg-black"-->
<!--                >-->
<!--                  <span class="whitespace-pre-line text-white">{{ card.subtitle }}</span>-->
<!--                </div>-->
<!--                <div-->
<!--                  v-if="card.desc"-->
<!--                  class="flex flex-col justify-center h-20 py-0 px-6-->
<!--                     text-center align-text-top text-sm font-light bg-neutral-500"-->
<!--                >-->
<!--                  <span class="whitespace-pre-line">{{ card.desc }}</span>-->
<!--                </div>-->
<!--                <ul class="text-black w-full container md:px-8 xl:px-10">-->
<!--                  <li-->
<!--                    v-for="(item, itemIndex) in card.items"-->
<!--                    :key="itemIndex"-->
<!--                    class="flex flex-col justify-center h-20 py-0 border-b border-b-neutral-300 last:border-0"-->
<!--                  >-->
<!--                    <p class="text-center font-light text-sm">-->
<!--                      <span class="whitespace-pre-line">{{ item }}</span>-->
<!--                    </p>-->
<!--                  </li>-->
<!--                </ul>-->
<!--                <button-->
<!--                  class="relative z-10 w-full py-5 border border-transparent bg-purple-700 text-white font-black uppercase-->
<!--                hover:bg-purple-800 focus:bg-purple-800 outline-purple-900 rounded-b-2xl"-->
<!--                >-->
<!--                  {{ card.button }}-->
<!--                </button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </article>-->
<!--        </section>-->
<!--      </div>-->
<!--    </section>-->

<!--    &lt;!&ndash; Q&A section &ndash;&gt;-->
<!--    <section id="perguntas" class="bg-neutral-200 py-12 md:py-24">-->
<!--      <div class="container">-->
<!--        <h2 class="mb-16 uppercase font-bold text-black text-center text-5xl xl:text-6xl">-->
<!--          Perguntas Frequentes-->
<!--        </h2>-->
<!--        <div class="text-neutral-700">-->
<!--          <questions-accordion title="Trevor Belmont">-->
<!--            <p class="pb-5">-->
<!--              Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.-->
<!--            </p>-->

<!--            <p class="pb-5">-->
<!--              Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.-->
<!--            </p>-->
<!--          </questions-accordion>-->
<!--          <questions-accordion title="Alucard">-->
<!--            <p class="pb-5">-->
<!--              Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.-->
<!--            </p>-->

<!--            <p class="pb-5">-->
<!--              Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.-->
<!--            </p>-->
<!--          </questions-accordion>-->
<!--          <questions-accordion title="Sypha Belnades">-->
<!--            <p class="pb-5">-->
<!--              Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.-->
<!--            </p>-->

<!--            <p class="pb-5">-->
<!--              Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.-->
<!--            </p>-->
<!--          </questions-accordion>-->
<!--          <questions-accordion title="Sypha Belnades">-->
<!--            <p class="pb-5">-->
<!--              Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.-->
<!--            </p>-->

<!--            <p class="pb-5">-->
<!--              Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.-->
<!--            </p>-->
<!--          </questions-accordion>-->
<!--          <questions-accordion title="Sypha Belnades">-->
<!--            <p class="pb-5">-->
<!--              Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.-->
<!--            </p>-->

<!--            <p class="pb-5">-->
<!--              Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.-->
<!--            </p>-->
<!--          </questions-accordion>-->
<!--          <questions-accordion title="Sypha Belnades">-->
<!--            <p class="pb-5">-->
<!--              Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.-->
<!--            </p>-->

<!--            <p class="pb-5">-->
<!--              Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.-->
<!--            </p>-->
<!--          </questions-accordion>-->
<!--          <questions-accordion title="Sypha Belnades">-->
<!--            <p class="pb-5">-->
<!--              Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.-->
<!--            </p>-->

<!--            <p class="pb-5">-->
<!--              Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.-->
<!--            </p>-->
<!--          </questions-accordion>-->
<!--          <questions-accordion title="Sypha Belnades">-->
<!--            <p class="pb-5">-->
<!--              Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id pri, vis case abhorreant ea, id sea meis feugiat.-->
<!--            </p>-->

<!--            <p class="pb-5">-->
<!--              Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.-->
<!--            </p>-->
<!--          </questions-accordion>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

    <!-- footer -->
    <footer class="relative z-20 pt-8 -mt-[8%] overflow-x-hidden md:overflow-visible">
      <!-- footer mobile -->
      <div class="lg:hidden">
        <section id="footer-mobile" class="relative bg-cover pb-5 transform -rotate-3 scale-110">
          <img class="absolute w-40 right-0 mr-6 transform rotate-3 scale-90 -mt-3 shadow-xl hidden sm:mr-10 md:mr-20 lg:absolute"
               src="~/assets/img/footer-logo.png"
               alt="Logo Meninas do Vozão">
          <div class="container flex flex-wrap justify-center pt-12 items-center transform rotate-3 scale-90">
            <img class="m-3" src="~/assets/img/footer-logo-vozao.png" alt="Logo Vozão">
            <img class="m-3" src="~/assets/img/footer-logo-socio.png" alt="Logo Sócio Vozão">
            <img class="m-3" src="~/assets/img/footer-logo-time.png" alt="Logo Vozão Time do Povo">
          </div>
        </section>
        <!-- address and social-->
        <section class="bg-white -mt-6 md:flex md:flex-row-reverse">
          <article class="relative container pt-20 md:w-1/2 md:pl-0 md:-ml-12 md:pt-28">
            <p class="text-xs">
              <strong>Ceará Sporting Club</strong><br>
              Avenida João Pessoa, 3532 - Porangabuçu - Ceará - CEP 60425-813 <br>
              <a href="mailto:contato@nacaoalvinegra.com" class="underline mr-2">contato@nacaoalvinegra.com</a>
              <font-awesome-icon :icon="['fab', 'whatsapp']" /> (85) 3052-7777
            </p>
          </article>
          <!-- social -->
          <article class="bg-white md:w-2/3">
            <div id="footer-social" class="bg-contain bg-no-repeat w-11/12 max-w-sm pt-28 pb-16 md:w-full">
              <div class="container flex text-sm">
                <div class="w-1/3 text-black text-right">
                  <p>
                    <font-awesome-icon class="mr-2" :icon="['fab', 'instagram']" />
                    <font-awesome-icon class="mr-2" :icon="['fab', 'facebook']" />
                    <font-awesome-icon class="mr-2" :icon="['fab', 'twitter']" />
                  </p>
                  <p>
                    <font-awesome-icon class="mr-2" :icon="['fab', 'tiktok']" />
                    <font-awesome-icon class="mr-2" :icon="['fab', 'instagram']" />
                    <font-awesome-icon class="mr-2" :icon="['fab', 'facebook']" />
                    <font-awesome-icon class="mr-2" :icon="['fab', 'twitter']" />
                  </p>
                </div>
                <div class="w-1/3 font-sans font-extrabold pl-2">
                  <p class="text-black">
                    sociovozao
                  </p>
                  <p class="text-black">
                    cearasc
                  </p>
                </div>
                <div class="w-1/3 font-sans font-extrabold">
                  <p class="text-black">
                    <font-awesome-icon :icon="['fab', 'youtube']" />
                    vozaotv
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>
        <div class="w-full py-2 bg-black text-center text-xs">
          <p class="container text-neutral-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio impedit praesentium quos. Ab adipisci
            architecto beatae blanditiis debitis.
          </p>
        </div>
      </div>

      <!-- footer desk -->
      <div class="hidden lg:block lg:relative">
        <section class="w-10/12 h-full -mt-6 flex flex-row-reverse items-end float-right xl:w-11/12 2xl:w-full">
          <img class="relative" src="~/assets/img/footer-black-bg.png" alt="Footer background 2">
          <div class="absolute top-0 w-full">
            <article class="pt-8 flex justify-end xl:pt-16 2xl:pt-32">
              <div class="w-5/12 pl-12 pr-20 xl:pl-32 xl:pr-12">
                <p class="text-xs 2xl:text-sm">
                  <strong>Ceará Sporting Club</strong><br>
                  Avenida João Pessoa, 3532 - Porangabuçu - Ceará - <br class="" />CEP 60425-813
                  <br>
                  <a href="mailto:contato@nacaoalvinegra.com" class="underline mr-2">contato@nacaoalvinegra.com</a>
                  <font-awesome-icon :icon="['fab', 'whatsapp']" /> (85) 3052-7777
                </p>
              </div>
              <div class="relative w-1/3 pr-6 flex justify-between items-center xl:pr-12 xl:w-5/12">
                <img class="absolute w-48 right-0 top-0 -mt-20 mr-6 shadow-xl xl:w-6/12 xl:-mt-32 2xl:-mt-48"
                     src="~/assets/img/footer-logo.png"
                     alt="Logo Meninas do Vozão">
                <img class="w-16 xl:w-28 2xl:w-32" src="~/assets/img/footer-logo-vozao.png" alt="Logo Vozão">
                <img class="w-16 xl:w-28 2xl:w-32" src="~/assets/img/footer-logo-socio.png" alt="Logo Sócio Vozão">
                <img class="w-16 xl:w-28 2xl:w-32" src="~/assets/img/footer-logo-time.png" alt="Logo Vozão Time do Povo">
              </div>
            </article>
          </div>
          <!-- social -->
          <article class="absolute left-0 max-w-xs pr-4 xl:pr-0">
            <div class="bg-contain bg-no-repeat w-full">
              <img class="relative" src="~/assets/img/footer-purple-bg.png" alt="Footer background">
              <div class="absolute top-0 w-full">
                <div class="container flex text-sm pt-20 xl:px-0">
                  <div class="w-1/3 text-black text-right">
                    <p>
                      <font-awesome-icon class="mr-1" :icon="['fab', 'instagram']" />
                      <font-awesome-icon class="mr-1" :icon="['fab', 'facebook']" />
                      <font-awesome-icon class="mr-1" :icon="['fab', 'twitter']" />
                    </p>
                    <p>
                      <font-awesome-icon class="mr-1" :icon="['fab', 'tiktok']" />
                      <font-awesome-icon class="mr-1" :icon="['fab', 'instagram']" />
                      <font-awesome-icon class="mr-1" :icon="['fab', 'facebook']" />
                      <font-awesome-icon class="mr-1" :icon="['fab', 'twitter']" />
                    </p>
                  </div>
                  <div class="w-1/3 font-sans font-extrabold pl-2">
                    <p class="text-black">
                      sociovozao
                    </p>
                    <p class="text-black">
                      cearasc
                    </p>
                  </div>
                  <div class="w-1/3 font-sans font-extrabold">
                    <p class="text-black">
                      <font-awesome-icon :icon="['fab', 'youtube']" />
                      vozaotv
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </footer>
<!--    <div class="hidden lg:block w-full py-2 bg-black text-center text-xs">-->
<!--      <p class="container pt-36 text-neutral-300">-->
<!--        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio impedit praesentium quos. Ab adipisci-->
<!--        architecto beatae blanditiis debitis.-->
<!--      </p>-->
<!--    </div>-->
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
          imageAlt: 'Logo Lorem Ipsum',
          name: 'Lorem Ipsum',
          desc: '10% de desconto em todas as compras'
        },
        {
          imageSrc: 'https://picsum.photos/60/60',
          imageAlt: 'Logo Lorem Ipsum',
          name: 'Lorem Ipsum',
          desc: '10% de desconto em todas as compras'
        },
        {
          imageSrc: 'https://picsum.photos/60/60',
          imageAlt: 'Logo Lorem Ipsum',
          name: 'Lorem Ipsum',
          desc: '10% de desconto em todas as compras'
        },
        {
          imageSrc: 'https://picsum.photos/60/60',
          imageAlt: 'Logo Lorem Ipsum',
          name: 'Lorem Ipsum',
          desc: '10% de desconto em todas as compras'
        },
        {
          imageSrc: 'https://picsum.photos/60/60',
          imageAlt: 'Logo Lorem Ipsum',
          name: 'Lorem Ipsum',
          desc: '10% de desconto em todas as compras'
        },
        {
          imageSrc: 'https://picsum.photos/60/60',
          imageAlt: 'Logo Lorem Ipsum',
          name: 'Lorem Ipsum',
          desc: '10% de desconto em todas as compras'
        },
        {
          imageSrc: 'https://picsum.photos/60/60',
          imageAlt: 'Logo Lorem Ipsum',
          name: 'Lorem Ipsum',
          desc: '10% de desconto em todas as compras'
        },
        {
          imageSrc: 'https://picsum.photos/60/60',
          imageAlt: 'Logo Lorem Ipsum',
          name: 'Lorem Ipsum',
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
