<template>
  <div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-20" @keyup.esc="close_modal">
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" @click.self="close_modal()" />

    <div id='modal'
         class="modal-container bg-white w-11/12 max-h-screen mx-auto
         overflow-y-auto rounded-2xl shadow-lg z-50 text-black">
      <div class="modal-content py-4 text-left px-6">
        <div class="flex justify-center items-center py-4 border-b border-neutral-300">
          <h2 class="text-2xl text-center">
            {{ modalItem.title }}
          </h2>
        </div>

        <!-- plan section -->
        <div class='py-4 border-b border-neutral-300'>
          <h3 class='font-bold mb-2'>
            {{ modalItem.infos.title }}
          </h3>
          <p class="font-light text-sm text-neutral-700">
            <span class='whitespace-pre-line'>{{ modalItem.infos.desc }}</span>
          </p>
        </div>

        <!-- Resume section -->
        <div class='py-4' :class='[showFixedBtn ? "mb-20": "mb-6"]'>
          <h3 class='font-bold mb-2'>
            {{ modalItem.resume.title }}
          </h3>
          <p v-for='(item, index) in modalItem.resume.items'
             :key='index'
             class="mb-2 font-light text-sm text-neutral-700">
            <span class='font-bold'>{{ item.title }}:</span>
            <span class='whitespace-pre-line'>{{ item.desc }}</span>
          </p>
        </div>

        <!-- Button section mobile and tablet -->
        <section v-if='showFixedBtn' class='fixed bottom-0 left-0 w-full'>
          <div class='w-11/12 mx-auto pt-16 pb-4 px-6 bg-gradient-to-t from-white via-white rounded-b-2xl'>
            <button
              ref='btnOk'
              type='button'
              class='inline-flex justify-center rounded-md border border-transparent bg-yellow-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2'
              @click='close_modal'
            >
              Entendi, obrigado!
            </button>
          </div>
        </section>
        <!-- Button section desktopxl -->
        <section v-else class=''>
          <div class='bg-white '>
            <button
              ref='btnOk'
              type='button'
              class='inline-flex justify-center rounded-md border border-transparent bg-yellow-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2'
              @click='close_modal'
            >
              Entendi, obrigado!
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    show: Boolean,
    modalItem: Object
  },
  data () {
    return {
      showFixedBtn: false
    }
  },
  mounted() {
    this.checkHeight()
    document.body.classList.add("scroll-lock");
    this.$nextTick(() => {
      const btn = this.$refs.btnOk
      btn.focus()
    })
  },
  beforeDestroy () {
    document.body.classList.remove("scroll-lock")
  },
  methods: {
    checkHeight() {
      const modalH = document.getElementById('modal').offsetHeight
      const htmlH = window.innerHeight
      this.showFixedBtn = (modalH === htmlH)
    },
    close_modal () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>
