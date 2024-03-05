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
        <video autoplay loop muted>
          <source src="~/assets/vid/hero.webm" type="video/webm" />
        </video>
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
    background-position: center;
    background-size: cover;
    background-image: v-bind(bgLight);
    @apply text-white;

    @apply px-8 py-16 min-h-svh sm:px-16 sm:py-32 md:px-32;
    @apply flex items-center justify-between flex-col lg:flex-row;
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
    &>.image {
      @apply max-h-max max-w-3xl;
    }
  }
  }
}
</style>
