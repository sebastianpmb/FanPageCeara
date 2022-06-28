<template>
  <footer class="relative z-20 pt-8 -mt-[8%] overflow-x-hidden md:overflow-visible">
    <!-- footer mobile -->
    <div class="lg:hidden">
      <section id="footer-mobile" class="relative bg-cover pb-5 transform -rotate-3 scale-110">
        <img
          class="absolute w-40 right-0 mr-6 transform rotate-3 scale-90 -mt-3 shadow-xl hidden sm:mr-10 md:mr-20 lg:absolute"
          src="~/static/img/logo-NacaoAlvinegra-white.webp"
          alt="Logo Nação Alvinegra"
        >
        <div class="container flex flex-wrap justify-center pt-12 items-center transform rotate-3 scale-90">
          <img class="m-5 w-28" src="~/static/img/footer-logo-vozao.png" alt="Logo Vozão">
          <img class="m-5 w-28" src="~/static/img/footer-logo-socio.png" alt="Logo Sócio Vozão">
          <img class="m-5 w-28" src="~/static/img/footer-logo-time.png" alt="Logo Vozão Time do Povo">
        </div>
      </section>
      <!-- address and social-->
      <section class="bg-white -mt-6 md:flex md:flex-row-reverse">
        <article class="relative container pt-20 md:w-1/2 md:pl-0 md:-ml-12 md:pt-16 lg:pt-28">
          <p class="text-xs mb-6">
            <strong>Ceará Sporting Club</strong><br>
            Avenida João Pessoa, 3532 - Porangabuçu - Ceará - CEP 60425-813 <br>
            <a href="mailto:contato@nacaoalvinegra.com" class="underline mr-2">contato@nacaoalvinegra.com</a>
            <font-awesome-icon :icon="['fab', 'whatsapp']"/>
            (85) 3052-7777
          </p>
        </article>
        <!-- social -->
        <article class="bg-white overflow-y-hidden md:w-10/12">
          <div id="footer-social"
               class="bg-contain bg-no-repeat w-10/12 max-w-xs -mb-12 pt-16 pb-16 md:w-full c-social-links">
            <div class="flex text-sm mb-12 md:mb-10 md:pt-2">
              <div class="w-1/3 text-black text-right">
                <p>
                  <a href="https://www.instagram.com/sociovozao/" target="_blank">
                    <font-awesome-icon class="mr-1" :icon="['fab', 'instagram']"/>
                  </a>
                  <a href="https://www.facebook.com/SocioVozaoOficial" target="_blank">
                    <font-awesome-icon class="mr-1" :icon="['fab', 'facebook']"/>
                  </a>
                  <a href="https://twitter.com/sociovozao" target="_blank">
                    <font-awesome-icon class="mr-1" :icon="['fab', 'twitter']"/>
                  </a>
                </p>
                <p>
                  <a href="https://www.tiktok.com/@cearasc" target="_blank">
                    <font-awesome-icon class="mr-1" :icon="['fab', 'tiktok']"/>
                  </a>
                  <a href="https://www.instagram.com/cearasc/" target="_blank">
                    <font-awesome-icon class="mr-1" :icon="['fab', 'instagram']"/>
                  </a>
                  <a href="https://www.facebook.com/CearaSC" target="_blank">
                    <font-awesome-icon class="mr-1" :icon="['fab', 'facebook']"/>
                  </a>
                  <a href="https://twitter.com/CearaSC" target="_blank">
                    <font-awesome-icon class="mr-1" :icon="['fab', 'twitter']"/>
                  </a>
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
                <a href="https://www.youtube.com/c/Cearasc" target="_blank" class="text-black">
                  <font-awesome-icon :icon="['fab', 'youtube']"/>
                  vozaotv
                </a>
              </div>
            </div>
            <div class="container flex items-center pl-2 text-white text-xs">
              <p>Powered by</p>
              <img class="-mt-1 ml-2 w-20" src="~/static/img/fanbase.png" alt="Logo Fanbase">
            </div>
          </div>
        </article>
      </section>
<!--      <div class="w-full py-2 bg-black text-center text-xs">-->
<!--        <p class="container text-neutral-300">-->
<!--          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio impedit praesentium quos. Ab adipisci-->
<!--          architecto beatae blanditiis debitis.-->
<!--        </p>-->
<!--      </div>-->
    </div>

    <!-- footer desk -->
    <div class="hidden lg:block lg:relative">
      <section class="w-10/12 h-full -mt-6 flex flex-row-reverse items-end float-right xl:w-11/12 2xl:w-full">
        <img class="relative xl:h-56 xl:w-full 2xl:h-64" src="~/static/img/footer-black-bg.png" alt="Footer background 2">
        <div class="absolute top-0 w-full">
          <article class="pt-7 flex justify-end xl:pt-16 2xl:pt-24">
            <div class="w-5/12 pl-12 pr-20 xl:pl-32 xl:pr-12">
              <p class="text-xs xl:pt-2 2xl:text-sm">
                <strong>Ceará Sporting Club</strong><br>
                Avenida João Pessoa, 3532 - Porangabuçu - Ceará - <br class=""/>CEP 60425-813
                <br>
                <a href="mailto:contato@nacaoalvinegra.com" class="underline mr-2">contato@nacaoalvinegra.com</a>
                <font-awesome-icon :icon="['fab', 'whatsapp']"/>
                (85) 3052-7777
              </p>
            </div>
            <div class="relative w-1/3 pr-6 flex justify-between items-center xl:pr-12 xl:w-5/12">
              <img class="absolute w-56 right-0 top-0 -mt-16 mr-6 px-1 shadow-xl
                          xl:w-6/12 xl:-mt-24 2xl:-mt-36 2xl:mr-10 2xl:px-0"
                   src="~/static/img/logo-NacaoAlvinegra-white.webp"
                   alt="Logo Nação Alvinegra"
              >
              <img class="w-24 xl:w-28 2xl:w-36" src="~/static/img/footer-logo-vozao.png" alt="Logo Vozão">
              <img class="w-24 xl:w-28 2xl:w-36" src="~/static/img/footer-logo-socio.png" alt="Logo Sócio Vozão">
              <img class="w-24 xl:w-28 2xl:w-36" src="~/static/img/footer-logo-time.png" alt="Logo Vozão Time do Povo">
            </div>
          </article>
        </div>
        <!-- social -->
        <article class="absolute left-0 max-w-xs pr-4 xl:pr-0">
          <div class="bg-contain bg-no-repeat w-full">
            <img class="relative" src="~/static/img/footer-purple-bg.png" alt="Footer background">
            <div class="absolute top-0 w-full">
              <div class="container flex text-sm pt-16 xl:px-0 c-social-links">
                <div class="w-1/3 text-black text-right">
                  <p>
                    <a href="https://www.instagram.com/sociovozao/" target="_blank">
                      <font-awesome-icon class="mr-1" :icon="['fab', 'instagram']"/>
                    </a>
                    <a href="https://www.facebook.com/SocioVozaoOficial" target="_blank">
                      <font-awesome-icon class="mr-1" :icon="['fab', 'facebook']"/>
                    </a>
                    <a href="https://twitter.com/sociovozao" target="_blank">
                      <font-awesome-icon class="mr-1" :icon="['fab', 'twitter']"/>
                    </a>
                  </p>
                  <p>
                    <a href="https://www.tiktok.com/@cearasc" target="_blank">
                      <font-awesome-icon class="mr-1" :icon="['fab', 'tiktok']"/>
                    </a>
                    <a href="https://www.instagram.com/cearasc/" target="_blank">
                      <font-awesome-icon class="mr-1" :icon="['fab', 'instagram']"/>
                    </a>
                    <a href="https://www.facebook.com/CearaSC" target="_blank">
                      <font-awesome-icon class="mr-1" :icon="['fab', 'facebook']"/>
                    </a>
                    <a href="https://twitter.com/CearaSC" target="_blank">
                      <font-awesome-icon class="mr-1" :icon="['fab', 'twitter']"/>
                    </a>
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
                  <a href="https://www.youtube.com/c/Cearasc" target="_blank" class="text-black">
                    <font-awesome-icon :icon="['fab', 'youtube']"/>
                    vozaotv
                  </a>
                </div>
              </div>
              <div class="container flex items-center mt-8 pl-2 pb-3 text-white text-xs lg:px-6 xl:mt-10">
                <p>Powered by</p>
                <img class="-mt-1 ml-2 w-20" src="~/static/img/fanbase.png" alt="Logo Fanbase">
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'main-footer'
}
</script>
