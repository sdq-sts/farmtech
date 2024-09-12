<script setup lang="ts">
import { ref } from 'vue'
import SearcherIcon from './SearcherIcon.vue'

const search = ref('')
</script>

<template>
  <section class="covid-searcher">
    <div class="covid-searcher__content">
      <h2 class="covid-searcher__title">Filtrar dados sobre um país</h2>

      <form class="covid-searcher__form">
        <SearcherIcon class="covid-searcher__icon" />
        <input
          class="covid-searcher__input"
          type="text"
          placeholder="Digite o nome do país"
          v-model="search"
        />
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
.covid-searcher {
  padding: 2rem 7rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 100%;
  border-radius: 6px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 0px 3px 0px;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
  }

  &__title {
    font-size: 1.6rem;
    margin: 0 0 1rem 0;
  }

  &__form {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--color-accent);
    padding: 5px;
    width: 100%;
  }

  &__icon {
    margin-right: 8px;
    fill: #ff6b6b;
    width: 24px;
    height: 24px;
    transform: scale(0.8) translateY(-4px);
  }

  &__input {
    border: none;
    outline: none;
    flex: 1;
    font-size: 16px;
    color: #a9a9a9;
    padding: 5px;
  }

  &__input::placeholder {
    color: #a9a9a9;
    font-size: 1.2rem;
  }

  &__form:focus-within {
    border-color: var(--color-accent);
  }
}
</style>
