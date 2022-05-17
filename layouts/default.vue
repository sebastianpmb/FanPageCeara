<template>
  <div>
    <!-- navbar on top -->
    <navbar class="relative z-10" />

    <Nuxt />


  </div>
</template>

<script>
import navbar from '~/layouts/Navbar'

export default {
  components: {
    navbar
  }
}
</script>
