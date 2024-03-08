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
        <video class="block dark:hidden" autoplay loop muted>
          <source src="~/assets/vid/hero_yagami.webm" type="video/webm" />
        </video>
        <video class="hidden dark:block" autoplay loop muted>
          <source src="~/assets/vid/hero_dark.webm" type="video/webm" />
        </video>
      </div>
    </article>
    <article id="howit">
      <h1>{{ $t('howitworks') }}</h1>
      <section id="howto">
        <h2>{{ $t('howto.title') }}</h2>
        <section class="inout">
          <section class="in">
            <h3>in</h3>
            <ol class="list-decimal list-outside">
              <li>
                <h4>{{ $t('howto.connectTitle') }}</h4>
                <p>{{ $t('howto.connectDesc') }}</p>
              </li>
              <li>
                <h4>{{ $t('howto.sendTitle') }}</h4>
                <p>{{ $t('howto.sendDescIn') }}</p>
              </li>
              <li>
                <h4>{{ $t('howto.payTitle') }}</h4>
                <p>{{ $t('howto.payDescIn') }}</p>
              </li>
              <li>
                <h4>{{ $t('howto.receiveTitle') }}</h4>
                <p>{{ $t('howto.receiveDescIn') }}</p>
              </li>
              <li>
                <h4>{{ $t('howto.tradeTitleIn') }}</h4>
                <p>{{ $t('howto.tradeDescIn') }}</p>
              </li>
            </ol>
          </section>
          <section class="out">
            <h3>out</h3>
            <ol class="list-decimal list-outside">
              <li>
                <h4>{{ $t('howto.connectTitle') }}</h4>
                <p>{{ $t('howto.connectDesc') }}</p>
              </li>
              <li>
                <h4>{{ $t('howto.sendTitle') }}</h4>
                <p>{{ $t('howto.sendDescOut') }}</p>
              </li>
              <li>
                <h4>{{ $t('howto.payTitle') }}</h4>
                <p>{{ $t('howto.payDescOut') }}</p>
              </li>
              <li>
                <h4>{{ $t('howto.receiveTitle') }}</h4>
                <p>{{ $t('howto.receiveDescOut') }}</p>
              </li>
              <li>
                <h4>{{ $t('howto.playTitleOut') }}</h4>
                <p>{{ $t('howto.playDescOut') }}</p>
              </li>
            </ol>
          </section>
        </section>
      </section>
      <section id="underhood">
        <h2>{{ $t('underhood.title') }}</h2>
        <p>{{ $t('underhood.desc') }}</p>
        <div class="image">
          <div class="block dark:hidden" v-html="how_it_works" />
          <div class="hidden dark:block" v-html="how_it_works_dark" />
        </div>
        <p>{{ $t('underhood.figDesc') }}</p>
      </section>
    </article>
    <article id="pricing">
      <h1>{{ $t('pricing.title') }}</h1>
      <h2>{{ $t('pricing.withdrawalOf') }}</h2>
      <section class="cards">
        <div class="card">
          <h3>{{ $t('pricing.first', { lessThan: 10 }) }}</h3>
          <p class="price">0.2</p>
          <p class="currency">MATIC</p>
        </div>
        <div class="card">
          <h3>{{ $t('pricing.second', { moreThan: 10, lessThan: 50 }) }}</h3>
          <p class="price">1</p>
          <p class="currency">MATIC</p>
        </div>
        <div class="card">
          <h3>{{ $t('pricing.third', { moreThan: 50 }) }}</h3>
          <p class="price">5</p>
          <p class="currency">MATIC</p>
        </div>
      </section>
      <section class="legal">
        <p
          v-html="$t('pricing.legalMumboJumbo.firstPart', { masnodon: '<a href=https://toot.io/@inout><b>@inout@toot.io</b></a>' })">
        </p>
        <p>{{ $t('pricing.legalMumboJumbo.secondPart', { name: "inoutnft" }) }}</p>
      </section>
    </article>
  </div>
</template>
<style scoped lang="scss">
#index {
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

  &>#howit,
  &>#pricing {
    @apply m-8 sm:m-16 xl:mx-auto;
    @apply max-w-6xl;
  }

  &>#howit {
    &>#howto>.inout {
      @apply flex flex-col md:flex-row justify-between;
    }

    &>#underhood {
      .image {
        @apply my-8 rounded-xl shadow-md;
      }
    }
  }

  &>#pricing>.cards {
    @apply flex flex-col md:flex-row max-w-fit mx-auto my-8;

    &>.card {
      @apply rounded-xl border-2 shadow-md px-8 py-16 bg-gray-100 dark:bg-gray-900;
      @apply w-52 h-72 md:h-80 lg:w-60 lg:h-96;

      &:not(:last-child) {
        @apply mb-8 md:mr-8 md:mb-0;
      }

      &>h3 {
        @apply text-base font-medium;
      }

      @apply flex flex-col items-center justify-center;

      &>p {
        @apply font-bold;

        &.price {
          @apply text-3xl;
        }

        &.currency {
          @apply text-lg;
        }
      }
    }
  }
}

.dark #index>#hero {
  background-image: v-bind(bgDark);
}
</style>
<script setup lang="ts">
import how_it_works from '~/assets/img/how_it_works.svg?raw';
import how_it_works_dark from '~/assets/img/how_it_works_dark.svg?raw';
const img = useImage();
const bgLight = computed(() => `url(${img('hero_yagami.jpg', { quality: 70 })})`);
const bgDark = computed(() => `url(${img('hero_dark.jpg', { quality: 70 })}`);
</script>
