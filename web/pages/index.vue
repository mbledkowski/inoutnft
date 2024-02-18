<template>
  <div id="index">
    <article id="hero">
      <div class="content">
        <section>
          <h1>{{ $t('motto') }}</h1>
        </section>
        <section>
          <p>
            <UIcon name="i-material-symbols-arrow-right-alt" /> {{ $t('steamnft') }}
          </p>
          <p>{{ $t('nftsteam') }}
            <UIcon name="i-material-symbols-arrow-left-alt" />
          </p>
        </section>
        <section class="buttons">
          <UButton class="button" size="md">{{ $t('howitworks') }}</UButton>
          <UButton class="button" size="md" icon="i-material-symbols-arrow-right-alt" trailing>{{ $t('start') }}</UButton>
        </section>
      </div>
      <div class="image">
      </div>
    </article>
    <article id="howto">
    </article>
    <article id="pricing">
    </article>
  </div>
</template>
<style scoped lang="scss">
#index {
  @apply w-svw bg-gray-50 dark:bg-gray-950;

  &>#hero {
    @apply p-8 h-svh;
    @apply flex items-center;

    &>.content {
      @apply max-w-sm md:max-w-lg;

      &>section:not(:last-child) {
        margin-bottom: 1rem;
      }

      p {
        @apply text-lg;
      }

      &>.buttons {
        &>.button:not(:last-child) {
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
