<template>
  <div class="relative">
    <header
      class="bg-center bg-cover bg-black pt-56 pb-32 xl:pt-60"
    >
      <div class="container font-tusker text-center">
        <article class="w-80 mx-auto md:w-8/12 xl:w-6/12 2xl:px-12">
          <p class="text-pink-300 text-xl md:text-2xl">ESCOLHA AGORA A NOVA</p>
          <h1 class="font-gilroy font-bold text-white text-7xl md:text-8xl lg:text-9xl">
            <span class="mr-1.5">Nação</span><br>
            <span class="block -mt-1.5 md:-mt-3 lg:-mt-5">Alvinegra</span>
          </h1>
          <img class="w-48 -mt-2 mb-16 md:w-56 md:-mt-3 md:ml-2 lg:w-72 lg:-mt-5 lg:ml-10 xl:ml-0"
               src="~/static/img/tag-meninas-do-vozao.png"
               alt="Tarja Nação Alvinegra - Meninas do Vozão" />
          <a href="https://nacaoalvinegra2.fanbase.com.br/"
             target="_blank"
             id="btn-header"
             class="inline-block mb-14 py-3 px-20 font-noodle rounded text-white text-3xl
             hover:text-white hover:opacity-80 md:text-4xl">
            VOTE AGORA!
          </a>
<!--          <p id="btn-header"-->
<!--             class="inline-block mb-14 py-3 px-16 font-noodle rounded text-white text-3xl-->
<!--             hover:text-white md:px-20 md:text-4xl">-->
<!--            VOTAÇÃO EM BREVE!-->
<!--          </p>-->
        </article>
<!--        <p class="font-sans text-xs text-white lg:w-8/12 lg:mx-auto xl:w-6/12 2xl:px-12">-->
<!--          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore-->
<!--          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.-->
<!--        </p>-->
      </div>
    </header>

    <!-- section 2 -->
    <section id="camisa" class="relative bg-cover overflow-x-hidden pb-6">
      <img class="pt-32 max-w-md md:w-1/2 md:max-w-none md:z-20"
           src="~/static/img/sec2-camisa.webp"
           alt="Camisa Nação Alvinegra" />
      <div class="absolute inset-0">
        <div class="relative md:container md:mx-auto">
          <div class="relative pt-80 px-5 max-w-screen-xs mx-auto md:float-right md:pt-40 lg:w-7/12 lg:ml-auto lg:mr-0">
            <div class="bg-white flex items-center w-80 mx-auto px-5 pt-3 pb-8 lg:w-3/4 lg:pt-5 lg:pb-10 xl:pt-10">
              <img class="w-1/3 pr-3 lg:pr-4 xl:w-32 xl:pb-4" src="~/static/img/sec2-frame-escudo.png" alt="Frame de escudo">
              <h2 class="w-2/3 font-gilroy font-bold text-violet-800 text-center">
                <span class="mr-1.5 font-normal font-tusker text-3xl lg:text-4xl xl:text-5xl">A CARA DA</span><br>
                <span class="block -mt-3 lg:-mt-3 text-6xl lg:text-7xl xl:tracking-wide xl:text-8xl">Nação</span>
              </h2>
            </div>
            <div id="sec2-card" class="relative bg-neutral-900 w-96 mx-auto shadow-2xl transform -rotate-2 lg:w-11/12">
              <div class="c-mask absolute inset-0 w-full h-full bg-opacity-0 bg-contain">
              </div>
              <p class="-mt-4 mb-8 pt-8 pb-5 px-8 font-light text-white text-justify text-xs transform rotate-2
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
      <img src="~/static/img/sec3-camisa-nacao.webp" alt="Fundo Camisa Nação Alvinegra">
    </section>
  </div>
</template>

<script>

export default {
  layout: 'default',
  transition: 'pageSlide',
  name: 'IndexPage'
}
</script>
