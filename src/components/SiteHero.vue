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

  &__content {
    max-width: 50%;
    padding: 4rem 0;
  }

  &__title {
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    letter-spacing: 1px;
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

@media (max-width: $tablet-landscape) {
  .site-hero {
    &__content {
      margin-bottom: 2rem;
    }

    &__title {
      margin-top: 0;
    }
    &__doctors-img {
      transform: scale(1.2) translateX(-10%);
    }
  }
}

@media (max-width: $tablet-portrait) {
  .site-hero {
    flex-direction: column;
    align-items: center;

    &__content {
      max-width: 100%;
      padding: 2rem 1rem;
      text-align: center;
    }

    &__doctors-img {
      transform: scale(1) translateX(0);
    }
  }
}

@media (max-width: $mobile-small) {
  .site-hero {
    padding-top: 2rem;

    &__title {
      font-size: 2.5rem;
      line-height: 1.3;
    }

    &__text {
      font-size: 1rem;
    }
  }
}
</style>
