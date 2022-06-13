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
            <button class="flex content-center mr-12 hover:text-yellow-700" @click="closeSideBar">
              <font-awesome-icon class="fa-2x px-1 -mt-1" icon="xmark"/>
              <span class="ml-2">Fechar</span>
            </button>
          </div>
          <ul class="mt-12 w-full" @click="closeSideBar">
<!--            <nuxt-link to="/" class="hover:text-neutral-900">-->
<!--              <li class="py-6 pl-8 border-b-2 border-neutral-700 hover:bg-yellow-700 hover:text-black transition duration-300"-->
<!--                  :class="{'text-yellow-700 underline underline-offset-4 hover:text-black' : $route.fullPath === '/'}"-->
<!--              >-->
<!--                PROJETO-->
<!--              </li>-->
<!--            </nuxt-link>-->
<!--            <nuxt-link :to="{ path: '/',hash:'#sec2'}" class="hover:text-neutral-900">-->
<!--              <li class="py-6 pl-8 border-b-2 border-neutral-700 hover:bg-yellow-700 hover:text-black transition duration-300"-->
<!--                  :class="{'text-yellow-700 underline underline-offset-4 hover:text-black' : $route.fullPath === '/#sec2'}"-->
<!--              >-->
<!--                VOZÃO-->
<!--              </li>-->
<!--            </nuxt-link>-->
<!--            <nuxt-link to="/regulamento" class="hover:text-neutral-900">-->
<!--              <li class="py-6 pl-8 border-b-2 border-neutral-700 hover:bg-yellow-700 hover:text-black transition duration-300"-->
<!--                  :class="{'text-yellow-700 underline underline-offset-4 hover:text-black' : $route.path === '/regulamento'}"-->
<!--              >-->
<!--                REGULAMENTO-->
<!--              </li>-->
<!--            </nuxt-link>-->
<!--            <nuxt-link to="/faq" class="hover:text-neutral-900">-->
<!--              <li class="py-6 pl-8 border-b-2 border-neutral-700 hover:bg-yellow-700 hover:text-black transition duration-300"-->
<!--                  :class="{'text-yellow-700 underline underline-offset-4 hover:text-black' : $route.path === '/faq'}"-->
<!--              >-->
<!--                FAQ-->
<!--              </li>-->
<!--            </nuxt-link>-->
<!--            <a href="https://censo.nacaoalvinegra.com/" target="_blank" class="hover:text-neutral-900">-->
<!--              <li class="py-6 pl-8 border-b-2 border-neutral-700 hover:bg-yellow-700 hover:text-black transition duration-300"-->
<!--                  :class="{'text-yellow-700 underline underline-offset-4 hover:text-black' : $route.path === '/censo'}"-->
<!--              >-->
<!--                CLIQUE E PARTICIPE-->
<!--              </li>-->
<!--            </a>-->
<!--            <li class="py-6 pl-8 border-b-2 border-neutral-700 text-neutral-400">-->
<!--              VOTE EM BREVE-->
<!--            </li>-->
          </ul>
        </div>
      </div>
    </transition>

    <section id="fixed-nav"
             class="fixed inset-x-0 h-12 bg-cover bg-no-repeat shadow-lg transform duration-300"
             :class="[scrollDown ? 'lg:h-16' : 'h-16 lg:h-20 xl:h-24']"
    >
      <div class="relative container flex justify-end items-center h-full px-5 lg:justify-center">
        <nuxt-link to="/">
          <img id="fixed-logo"
               class="absolute top-0 left-0 ml-3 mt-5 shadow-lg transform duration-300 -rotate-3"
               :class="[scrollDown ? 'w-32 lg:mt-5 lg:w-48 xl:w-56' : 'ml-3 w-48 xl:mt-8 lg:w-72 xl:w-80']"
               src="~/static/img/logo-NacaoAlvinegraBr.webp"
               alt="Logo Nação Alvinegra"
          />
        </nuxt-link>
        <ul class="hidden flex-row justify-between items-center lg:flex lg:w-5/12 xl:w-6/12 xl:px-10">
<!--          <li class="text-base" :class="{'underline underline-offset-4' : $route.fullPath === '/'}">-->
<!--            <nuxt-link to="/">PROJETO</nuxt-link>-->
<!--          </li>-->
<!--          |-->
<!--          <li class="text-base" :class="{'underline underline-offset-4' : $route.fullPath === '/#sec2'}">-->
<!--            <nuxt-link :to="{ path: '/',hash:'#sec2'}">VOZÃO</nuxt-link>-->
<!--          </li>-->
<!--          |-->
<!--          <li class="text-base" :class="{'underline underline-offset-4' : $route.path === '/regulamento'}">-->
<!--            <nuxt-link to="/regulamento">REGULAMENTO</nuxt-link>-->
<!--          </li>-->
<!--          |-->
<!--          <li class="text-base" :class="{'underline underline-offset-4' : $route.path === '/faq'}">-->
<!--            <nuxt-link to="/faq">FAQ</nuxt-link>-->
<!--          </li>-->
<!--          |-->
<!--          <li class="text-base" :class="{'underline underline-offset-4' : $route.path === '/censo'}">-->
<!--            <a href="https://censo.nacaoalvinegra.com/" target="_blank">CLIQUE E PARTICIPE</a>-->
<!--          </li>-->
          <div class="flex absolute right-0 mr-8">
            <div class="mt-1 ml-5 text-right font-sans md:ml-8 transform duration-300"
                 :class="[scrollDown ? 'text-sm' : 'text-lg']">
              <p class="uppercase font-extrabold leading-none">Vozão ID</p>
              <span class="text-black font-light">
                <a href="https://cadastro.vozaoid.com/" target="_blank">Cadastrar</a>
              </span>
            </div>
            <button class="relative w-7 -mt-1 ml-3 fill-zinc-900 hover:fill-yellow-700">
              <div
                v-if="profileNotify"
                class="absolute top-0 right-0 w-5 -mt-3 -mr-3.5 rounded-full bg-yellow-700 hover:text-black text-sm text-black lg:-mt-2"
              >
                {{ profileNotify }}
              </div>
              <div
                class="rounded-full bg-white border border-black overflow-hidden transform duration-300"
                :class="[scrollDown ? 'w-8 h-8 xl:w-9 xl:h-9 xl:mt-1' : 'w-9 h-9 xl:w-11 xl:h-11 xl:mt-1']"
              >
                <img src="~/static/img/profileDefaultImage.png" alt="Perfil padrão">
              </div>
            </button>
          </div>
        </ul>

        <!-- mobile buttons -->
        <div class="flex items-center lg:hidden">
<!--          <button class="hover:text-yellow-700" @click="openSideBar">-->
<!--            <font-awesome-icon class="fa-2x px-1" icon="bars"/>-->
<!--          </button>-->
          <div class="ml-5 text-right font-sans transform duration-300 md:ml-8"
               :class="[scrollDown ? 'text-xs' : 'text-base']"
          >
            <p class="uppercase font-extrabold leading-none">Vozão ID</p>
            <span class="text-black font-light">
              <a href="https://cadastro.vozaoid.com/" target="_blank">Cadastrar</a>
            </span>
          </div>
          <button class="relative w-7 -mt-1 ml-3 fill-zinc-900 hover:fill-yellow-700">
            <div v-if="profileNotify"
                 class="absolute top-0 right-0 w-5 -mt-3 -mr-3.5 rounded-full bg-yellow-700 hover:text-black text-sm text-black">
              {{ profileNotify }}
            </div>
            <div class="rounded-full bg-white border border-black overflow-hidden transform duration-300"
                 :class="[scrollDown ? 'w-8 h-8' : 'w-10 h-10']"
            >
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
      lastScrollTop: 0,
      scrollDown: false
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
      if (st > this.lastScrollTop){
        // downscroll code
        this.scrollDown = true
      } else {
        // upscroll code
        this.scrollDown = false
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
