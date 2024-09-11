<script setup lang="ts"></script>

<template>
  <header class="site-header">
    <div class="site-header__container">
      <img src="@/assets/imgs/logo.png" alt="Covidômetro logo" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.site-header {
  display: block;
  padding: 1rem 0;
  width: 100%;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 4px 8px 0px;

  &__container {
    max-width: var(--max-site-width);
    margin: 0 auto;
  }
}
</style>
