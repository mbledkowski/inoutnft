<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'inoutnft',
  // meta: [
  //   { name: 'description', content: 'My amazing site.' }
  // ],
  link: [
    { rel: 'stylesheet', type: 'text/css', href: '/css/general-sans.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/css/quicksand.css' }
  ]
})
</script>

<style scoped lang="scss">
#app {
  @apply font-body font-medium;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-main font-bold;
  }
}
</style>
