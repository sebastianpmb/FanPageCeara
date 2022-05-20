<template>
  <nav class="relative w-full font-ind bg-cover bg-no-repeat"
  >
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
            <button class="flex content-center mr-12 hover:text-purple-700" @click="closeSideBar">
              <font-awesome-icon class="fa-2x px-1 -mt-1" icon="xmark"/>
              <span class="ml-2">Fechar</span>
            </button>
          </div>
          <ul class="mt-12 w-full" @click="closeSideBar">
            <nuxt-link to="/" class="hover:text-neutral-900">
              <li class="py-6 pl-8 border-b-2 border-neutral-700 hover:bg-purple-700 transition duration-300"
                  :class="{'text-pink-300' : $route.fullPath === '/'}"
              >
                PROJETO
              </li>
            </nuxt-link>
            <nuxt-link :to="{ path: '/',hash:'#camisa'}" class="hover:text-neutral-900">
              <li class="py-6 pl-8 border-b-2 border-neutral-700 hover:bg-purple-700 transition duration-300"
                  :class="{'text-pink-300' : $route.fullPath === '/#camisa'}"
              >
                CAMISA 2021
              </li>
            </nuxt-link>
            <nuxt-link to="/regulamento" class="hover:text-neutral-900">
              <li class="py-6 pl-8 border-b-2 border-neutral-700 hover:bg-purple-700 transition duration-300"
                  :class="{'text-pink-300' : $route.path === '/regulamento'}"
              >
                REGULAMENTO
              </li>
            </nuxt-link>
            <nuxt-link to="/faq" class="hover:text-neutral-900">
              <li class="py-6 pl-8 border-b-2 border-neutral-700 hover:bg-purple-700 transition duration-300"
                  :class="{'text-pink-300' : $route.path === '/faq'}"
              >
                FAQ
              </li>
            </nuxt-link>
            <a href="https://nacaoalvinegra2.fanbase.com.br/" target="_blank" class="hover:text-neutral-900">
              <li class="py-6 pl-8 border-b-2 border-neutral-700 hover:bg-purple-700 transition duration-300"
                  :class="{'text-pink-300' : $route.path === '/votacao'}"
              >
                CLIQUE E VOTE
              </li>
            </a>
<!--            <li class="py-6 pl-8 border-b-2 border-neutral-700 text-neutral-400">-->
<!--              VOTE EM BREVE-->
<!--            </li>-->
          </ul>
        </div>
      </div>
    </transition>
    <section id="fixed-nav"
             class="fixed inset-x-0 bg-cover bg-no-repeat py-8 h-12 lg:py-14 shadow-lg transform duration-300">
      <div class="relative container flex justify-end items-center h-full px-5 lg:justify-center">
        <nuxt-link to="/">
          <img id="fixed-logo"
               class="absolute top-0 left-0 w-56 -mt-5 -ml-4 xl:w-80 xl:-mt-12 xl:-ml-10 transform duration-300"
               src="~/static/img/logo.png"
               alt="Logo Nação Alvinegra - Meninas do Vozão"
          />
        </nuxt-link>
        <ul class="hidden flex-row justify-between items-center lg:flex lg:w-7/12 xl:w-8/12 xl:px-10">
          <li class="text-base" :class="{'text-pink-300' : $route.fullPath === '/'}">
            <nuxt-link to="/">PROJETO</nuxt-link>
          </li>
          |
          <li class="text-base" :class="{'text-pink-300' : $route.fullPath === '/#camisa'}">
            <nuxt-link :to="{ path: '/',hash:'#camisa'}">CAMISA 2021</nuxt-link>
          </li>
          |
          <li class="text-base" :class="{'text-pink-300' : $route.path === '/regulamento'}">
            <nuxt-link to="/regulamento">REGULAMENTO</nuxt-link>
          </li>
          |
          <li class="text-base" :class="{'text-pink-300' : $route.path === '/faq'}">
            <nuxt-link to="/faq">FAQ</nuxt-link>
          </li>
          |
          <li class="text-base" :class="{'text-pink-300' : $route.path === '/votacao'}">
            <a href="https://nacaoalvinegra2.fanbase.com.br/" target="_blank">CLIQUE E VOTE</a>
<!--            <p class="text-neutral-400">VOTE EM BREVE</p>-->
          </li>
          <div class="flex absolute right-0 mr-8">
            <div class="ml-5 text-right font-sans text-xs md:ml-8 lg:text-sm">
              <p class="uppercase font-extrabold">Vozão ID</p>
              <span class="text-pink-300 font-light">
                <a href="https://vozaoid.fanbase.com.br/#/cadastro" target="_blank">Criar Conta</a>
              </span>
            </div>
            <button class="relative w-7 -mt-1 ml-3 fill-zinc-900 hover:fill-purple-700">
              <div
                v-if="profileNotify"
                class="absolute top-0 right-0 w-5 -mt-3 -mr-3.5 rounded-full bg-purple-700 text-sm text-black lg:-mt-2"
              >
                {{ profileNotify }}
              </div>
              <div
                class="w-8 h-8 rounded-full bg-white border border-black overflow-hidden lg:w-9 lg:h-9 xl:w-11 xl:h-11"
              >
                <img src="~/static/img/profileDefaultImage.png" alt="Perfil padrão">
              </div>
            </button>
          </div>
        </ul>

        <!-- mobile buttons -->
        <div class="flex items-center lg:hidden">
          <button class="hover:text-purple-700" @click="openSideBar">
            <font-awesome-icon class="fa-2x px-1" icon="bars"/>
          </button>
          <div class="ml-5 text-right font-sans text-xs md:ml-8">
            <p class="uppercase font-extrabold">Vozão ID</p>
            <span class="text-pink-300 font-light">
              <a href="https://vozaoid.fanbase.com.br/#/cadastro" target="_blank">Criar Conta</a>
            </span>
          </div>
          <button class="relative w-7 -mt-1 ml-3 fill-zinc-900 hover:fill-purple-700">
            <div v-if="profileNotify"
                 class="absolute top-0 right-0 w-5 -mt-3 -mr-3.5 rounded-full bg-purple-700 text-sm text-black">
              {{ profileNotify }}
            </div>
            <div class="w-8 h-8 rounded-full bg-white border border-black overflow-hidden">
              <img src="~/static/img/profileDefaultImage.png" alt="Perfil padrão">
            </div>
          </button>
        </div>
      </div>
    </section>
  </nav>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return {
      sidebar: false,
      profileNotify: 0,
      lastScrollTop: 0
    }
  },
  mounted() {
    window.addEventListener("scroll", this.changeNavOnScroll)
  },
  beforeDestroy () {
    window.removeEventListener("scroll", this.changeNavOnScroll)
  },
  methods: {
    changeNavOnScroll() {
      const st = window.pageYOffset || document.documentElement.scrollTop // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      const elNav = document.getElementById('fixed-nav')
      const elLogo = document.getElementById('fixed-logo')
      if (st > this.lastScrollTop){
        // downscroll code
        elNav.classList.replace('py-8', 'pt-0')
        elNav.classList.replace('lg:py-14', 'lg:pt-0')
        elLogo.classList.replace('-mt-5', 'mt-0')
        elLogo.classList.replace('w-56', 'w-40')
        elLogo.classList.replace('xl:-mt-12', 'xl:-mt-5')
        elLogo.classList.replace('xl:w-80', 'xl:w-56')
      } else {
        // upscroll code
        elNav.classList.replace('pt-0', 'py-8')
        elNav.classList.replace('lg:pt-0', 'lg:py-14')
        elLogo.classList.replace('mt-0', '-mt-5')
        elLogo.classList.replace('w-40', 'w-56')
        elLogo.classList.replace('xl:-mt-5', 'xl:-mt-12')
        elLogo.classList.replace('xl:w-56', 'xl:w-80')
      }
      this.lastScrollTop = st <= 0 ? 0 : st
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
