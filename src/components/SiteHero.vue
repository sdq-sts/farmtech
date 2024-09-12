<script setup lang="ts"></script>

<template>
  <section class="site-hero">
    <div class="site-hero__content">
      <h1 class="site-hero__title">Conheça o Covidômetro</h1>
      <p class="site-hero__text">
        Fique atualizado com velocidade e transparência. O Covidômetro é uma ferramenta que mostra
        para você em tempo real o número de casos e óbitos relacionados à pandemia da COVID-19 ao
        redor do mundo.
      </p>
    </div>

    <div class="site-hero__doctors">
      <img
        class="site-hero__doctors-img"
        src="@/assets/imgs/doctors.svg"
        alt="Covidômetro doctors"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.site-hero {
  display: flex;
  padding-top: 4rem;
  justify-content: space-between;
  z-index: 1;

  &__content {
    max-width: 50%;
    padding: 4rem 0;
  }

  &__title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    letter-spacing: 0.15rem;
  }

  &__text {
    font-size: 1.15rem;
    line-height: 1.5;
    color: var(--color-text);
  }

  &__doctors {
    z-index: 0;
  }

  &__doctors-img {
    width: 100%;
    transform: scale(1.1) translateX(-5%);
  }
}
</style>
