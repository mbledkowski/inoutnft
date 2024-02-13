<template>
  <header>
    <div class="logo text-violet-300">
      <picture>
        <img src="~/assets/img/logo.svg" alt="inoutnft logo" />
      </picture>
      <p>inoutnft</p>
    </div>
    <div class="nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    <div class="login">
      <UButton :label="$t('login')">
        <template #leading>
          <UAvatar size="xs" icon="i-heroicons-photo" alt="Unknown avatar" color="violet" />
        </template>
      </UButton>
    </div>
  </header>
</template>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &>.logo {
    display: flex;
    align-items: center;

    &>picture {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
