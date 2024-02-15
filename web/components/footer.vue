<template>
  <footer>
    <UDivider class="divider">
      <picture>
        <img src="~/assets/img/logo.svg" alt="inoutnft logo" />
      </picture>
    </UDivider>
    <div class="contents">
      <p>Source code - <ULink to="https://github.com/mbledkowski/inoutnft"
          class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200" target="_blank">
          GitHub
        </ULink>
      </p>
      <p>Created by <ULink to="https://github.com/mbledkowski"
          class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200" target="_blank">
          @mbledkowski
        </ULink>
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  &>.divider picture {
    width: 32px;
    height: 32px;
    @apply dark:invert;
  }

  &>.contents {
    @apply text-sm;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    @apply w-full max-w-screen-sm;
    @apply items-center;
    @apply flex-col sm:flex-row;
  }
}
</style>
