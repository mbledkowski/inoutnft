<template>
  <div id="headers">
    <header class="header-big">
      <div class="logo">
        <picture>
          <img src="~/assets/img/logo.svg" alt="inoutnft logo" />
        </picture>
        <p>inoutnft</p>
      </div>
      <div class="login">
        <UButton class="hidden sm:flex" truncate size="md" :label="$t('login')">
          <template #leading>
            <UAvatar size="2xs" icon="i-material-symbols-account-balance-wallet-outline-sharp" alt="Unknown avatar"
              color="violet" />
          </template>
        </UButton>
        <UAvatar class="sm:hidden flex" size="md" icon="i-material-symbols-account-balance-wallet-outline-sharp"
          alt="Unknown avatar" color="violet" />
      </div>
    </header>
    <header class="header-smol">
      <div class="logo">
        <picture>
          <img src="~/assets/img/logo.svg" alt="inoutnft logo" />
        </picture>
        <p>inoutnft</p>
      </div>
      <div class="login">
        <UButton class="hidden sm:flex" truncate size="sm" :label="$t('login')">
          <template #leading>
            <UAvatar size="3xs" icon="i-material-symbols-account-balance-wallet-outline-sharp" alt="Unknown avatar"
              color="violet" />
          </template>
        </UButton>
        <UAvatar class="sm:hidden flex" size="sm" icon="i-material-symbols-account-balance-wallet-outline-sharp"
          alt="Unknown avatar" color="violet" />
      </div>
    </header>
  </div>
</template>

<style scoped lang="scss">
#headers {
  position: absolute;
  width: 100%;

  height: 4.5rem;

  &>header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    @apply bg-gray-50 dark:bg-gray-950;
    @apply sticky top-0 left-0 right-0 z-20;

    &>div:not(:last-child) {
      margin-right: 2rem;
    }

    &>.logo {
      display: flex;
      align-items: center;

      &>picture {
        width: 2.5rem;
        height: 2.5rem;
        @apply dark:invert;
      }

      &>p {
        @apply text-lg font-semibold font-main;
      }
    }

    &>.login {
      display: flex;
    }
  }

  &>.header-smol {
    background: rgba(255, 255, 255, .2);
    padding: .5rem;
    margin: .5rem;
    @apply bg-gray-50/75 dark:bg-gray-950/75;
    @apply rounded-full backdrop-blur;
    @apply fixed top-0 left-0 right-0 z-10;


    &>.logo {
      &>picture {
        width: 2rem;
        height: 2rem;
      }

      &>p {
        @apply text-base font-semibold font-main;
      }
    }
  }
}
</style>
