<template>
  <section class="bg-neutral-100 min-h-screen">
    <div class="container text-center py-40">
      <svg class="animate-spin mx-auto h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      <div class="title text-black mb-6">
        Aguarde o Login...
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginWebViewApiPage',
  layout: 'default',
  transition: 'pageSlide',
  mounted () {
    if (window.vozaoDigitalApi) {
      window.vozaoDigitalApi.onReady(async () => {
        const userData = await window.vozaoDigitalApi.getUser()
        this.$store.dispatch('sso/setUserData', userData)
      })
    }
    // fetch eventPathTemp
    this.routerPushAfterLogin()
  },
  methods: {
    async routerPushAfterLogin () {
      let path = '/'
      await this.$store.dispatch('sso/fetch_eventPathForUserReturnAfterLogin')
      if (this.$store.state.sso.eventPathTemp) {
        path = this.$store.state.sso.eventPathTemp
      }
      this.$store.dispatch('sso/remove_eventPathForUserReturnAfterLogin')
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
</style>
