<template>
  <div id="app">
    <Header />
    <NuxtPage />
    <Footer />
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
    { rel: 'stylesheet', type: 'text/css', href: '/css/quicksand.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/css/virgil.css' }
  ]
})
</script>

<style lang="scss">
#app {
  @apply font-body font-medium;
  @apply w-svw bg-gray-50 dark:bg-gray-950;

  div {
    @apply border-gray-300 dark:border-gray-700;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-main font-bold;
  }

  h1 {
    @apply md:text-3xl text-2xl;
    @apply mt-8;
  }

  h2 {
    @apply md:text-2xl text-xl;
    @apply mt-4;
  }

  h3 {
    @apply md:text-xl text-lg;
    @apply mt-4;
  }

  h4 {
    @apply md:text-lg text-base;
  }

  h5 {
    @apply text-base;
  }

  h6 {
    @apply text-base;
  }
}
</style>
