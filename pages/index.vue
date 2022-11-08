<template>
  <div class="relative">
    <header
      class="bg-center bg-cover bg-black pt-40 pb-24 lg:pt-56 xl:pb-32 xl:pt-60"
    >
      <div class="container font-tusker text-center">
        <article class="max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-none 2xl:px-32">
          <p class="my-6 uppercase text-yellow-700 text-2xl sm:text-3xl lg:text-5xl">Vamos nos conhecer melhor?</p>
          <h1 class="mb-12 font-gilroy font-bold text-white tracking-tight leading-none text-5xl
                     sm:text-6xl md:text-7xl lg:text-9xl">
            O Ceará quer jogar com você!
          </h1>
          <button
            class="inline-block mb-14 py-3 px-20 font-noodle rounded text-black bg-yellow-700 text-3xl
             hover:text-black hover:opacity-80 md:text-4xl"
            @click="goToSurvey"
          >
            QUERO PARTICIPAR!
          </button>
        </article>
      </div>
    </header>

    <!-- section 2 -->
    <section id="sec2" class="relative bg-cover bg-center overflow-x-hidden pb-6">
      <div class="md:container md:mx-auto">
        <div class="pt-12 px-5 pb-32 max-w-screen-xs mx-auto md:pt-12 md:pb-32 lg:w-7/12 lg:ml-auto lg:mr-0 xl:pb-40">
          <!-- white card -->
          <div class="bg-white flex items-center w-80 mx-auto px-5 pt-3 pb-8 lg:w-3/4 lg:pt-5 lg:pb-10 xl:pt-10">
            <h2 class="w-2/3 font-gilroy font-bold text-black text-center">
              <span class="block -mb-6 tracking-tight text-4xl lg:text-5xl xl:tracking-wide xl:text-6xl">O VOZÃO</span><br>
              <span class="mr-1.5 font-normal font-tusker text-2xl lg:text-3xl xl:text-4xl">É VOCÊ QUEM FAZ!</span>
            </h2>
            <img class="w-1/3 pr-3 lg:pr-4 xl:w-32 xl:pb-4" src="~/static/img/logo-ceara.png" alt="Logo Ceará Sporting Club">
          </div>
          <!-- black card -->
          <div id="sec2-card" class="relative bg-neutral-900 w-96 mx-auto shadow-2xl transform -rotate-2 lg:w-11/12">
            <div class="c-mask absolute inset-0 w-full h-full bg-opacity-0 bg-cover">
            </div>
            <p class="-mt-4 mb-8 pt-8 pb-5 px-8 font-light text-white text-justify text-xs transform rotate-2
            lg:mb-16 lg:text-base lg:px-12 xl:px-24 xl:text-xl">
              O Ceará Sporting Club está lançando um grande censo da Nação Alvinegra. Já somos mais de <strong>100
              mil</strong> VOZÃO IDs. Mas para criarmos produtos, serviços e experiências cada vez mais personalizadas
              para você, precisamos te conhecer melhor!
              <br><br>
              Para nós, é uma enorme satisfação ter você com a gente, cantando, vibrando e apoiando. O Ceará Sporting
              Club é você quem faz!
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  layout: 'default',
  transition: 'pageSlide',
  methods: {
    goToSurvey () {
      if (this.$store.state.sso.isAuthenticated) {
        this.getTokenAndGoToSurvey()
      } else {
        window.open('https://censo.nacaoalvinegra.com/', '_blank')
      }
    },
    getTokenAndGoToSurvey () {
      const url = 'https://connect.fanbase.com.br/api/login2'
      const payload = {
        id: String(this.$store.state.sso.userData.data.cpf),
        password: '',
        loginType: 1,
        systemId: 2,
        RecId: 96,
        ownerId: 23,
        subDomainLogin: ''
      }
      this.$axios.$post(url, payload)
        .then((res) => {
          alert(JSON.stringify(res.data))
          if (res.data && res.data.data && res.data.data.access_token) {
            this.redirectWithToken(res.data.data.access_token)
          } else {
            window.open('https://censo.nacaoalvinegra.com/', '_blank')
          }
        })
        .catch((err) => {
          alert(err)
        })
    },
    redirectWithToken (token) {
      window.open(`https://censo.nacaoalvinegra.com/?authToken=${token}`, '_blank')
    }
  }
}
</script>
