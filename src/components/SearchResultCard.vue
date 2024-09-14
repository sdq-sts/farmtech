<script setup lang="ts">
import { defineProps } from 'vue'

type Props = {
  country: string
  totalCases: number
  deaths: number
  fatalityRate: number
}

withDefaults(defineProps<Props>(), {
  country: '',
  totalCases: 0,
  deaths: 0,
  fatalityRate: 0
})
</script>

<template>
  <div class="covid-country-data">
    <h3 class="covid-country-data__country">{{ country }}</h3>
    <div class="covid-country-data__stats">
      <div class="covid-country-data__stat">
        <span class="covid-country-data__label">Total de casos</span>
        <span class="covid-country-data__value">{{ totalCases.toLocaleString('pt-br') }}</span>
      </div>
      <div class="covid-country-data__stat">
        <span class="covid-country-data__label">Mortes</span>
        <span class="covid-country-data__value">{{ deaths.toLocaleString('pt-br') }}</span>
      </div>
      <div class="covid-country-data__stat">
        <span class="covid-country-data__label">Fatalidade</span>
        <span class="covid-country-data__value">{{ (fatalityRate * 100).toFixed(2) }}%</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.covid-country-data {
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 1.5rem;
}

.covid-country-data__country {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 20px;
}

.covid-country-data__stats {
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.covid-country-data__stat {
  flex: 1;
  border-left: 1px solid #dddddd73;
  padding: 0 15px;
}

.covid-country-data__stat:first-child {
  border-left: none;
}

.covid-country-data__label {
  display: block;
  font-size: 1.2rem;
  color: var(--color-text);
  margin-bottom: 5px;
}

.covid-country-data__value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-accent);
  font-family: var(--font-primary);
}
</style>
