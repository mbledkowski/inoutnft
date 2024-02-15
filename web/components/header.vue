<template>
  <header>
    <div class="header-big">
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
    </div>
    <div class="header-smol">
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
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  &>div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    &>div:not(:last-child) {
      margin-right: 2rem;
    }

    &>.logo {
      display: flex;
      align-items: center;

      &>picture {
        width: 40px;
        height: 40px;
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
    &>.logo {
      &>picture {
        width: 32px;
        height: 32px;
      }

      &>p {
        @apply text-base font-semibold font-main;
      }
    }
  }
}
</style>
