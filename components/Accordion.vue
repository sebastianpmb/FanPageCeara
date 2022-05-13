<template>
  <div class='mb-2'>
    <div class='tab__header'>
      <a href='#'
         class='tab__link relative z-10 p-4 block group rounded-2xl bg-white text-neutral-900
         hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2
         no-underline flex justify-between'
         @click.prevent='active = !active'
      >
        <strong class='text-neutral-900 hover:text-neutral-900'>{{ title }}</strong>
        <span class='down-Arrow group-hover:text-neutral-900 transition duration-300'
              :class='{"transform rotate-180": active}'>
          <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </span>
      </a>
    </div>
    <transition name='questionAccordion'>
      <div class='tab__content p-2' v-if='active'>
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'QuestionsAccordion',
  props: [
    'title'
  ],
  data () {
    return {
      active: false
    }
  }
}
</script>

<style scoped>

</style>
