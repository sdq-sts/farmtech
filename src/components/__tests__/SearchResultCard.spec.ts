import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchResultCard from '@/components/SearchResultCard.vue'

describe('CovidCountryData.vue', () => {
  const defaultProps = {
    country: 'Brasil',
    totalCases: 1000000,
    deaths: 50000,
    fatalityRate: 0.05
  }

  let originalInnerWidth: number

  beforeEach(() => {
    originalInnerWidth = window.innerWidth
  })

  afterEach(() => {
    window.innerWidth = originalInnerWidth
  })

  it('renders properly with default props', () => {
    const wrapper = mount(SearchResultCard, {
      props: defaultProps
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the correct country name', () => {
    const wrapper = mount(SearchResultCard, {
      props: defaultProps
    })
    const countryName = wrapper.find('.covid-country-data__country')
    expect(countryName.exists()).toBe(true)
    expect(countryName.text()).toBe('Brasil')
  })

  it('displays formatted totalCases', () => {
    const wrapper = mount(SearchResultCard, {
      props: defaultProps
    })
    const totalCasesValue = wrapper.find(
      '.covid-country-data__stat:nth-child(1) .covid-country-data__value'
    )
    expect(totalCasesValue.exists()).toBe(true)
    expect(totalCasesValue.text()).toBe('1.000.000')
  })

  it('displays formatted deaths', () => {
    const wrapper = mount(SearchResultCard, {
      props: defaultProps
    })
    const deathsValue = wrapper.find(
      '.covid-country-data__stat:nth-child(2) .covid-country-data__value'
    )
    expect(deathsValue.exists()).toBe(true)
    expect(deathsValue.text()).toBe('50.000')
  })

  it('displays formatted fatality rate', () => {
    const wrapper = mount(SearchResultCard, {
      props: defaultProps
    })
    const fatalityValue = wrapper.find(
      '.covid-country-data__stat:nth-child(3) .covid-country-data__value'
    )
    expect(fatalityValue.exists()).toBe(true)
    expect(fatalityValue.text()).toBe('5.00%')
  })

  it('displays "Casos" label when window width is less than 540', () => {
    window.innerWidth = 500
    const wrapper = mount(SearchResultCard, {
      props: defaultProps
    })
    const label = wrapper.find('.covid-country-data__stat:nth-child(1) .covid-country-data__label')
    expect(label.text()).toBe('Casos')
  })

  it('displays "Total de casos" label when window width is 540 or more', () => {
    window.innerWidth = 600
    const wrapper = mount(SearchResultCard, {
      props: defaultProps
    })
    const label = wrapper.find('.covid-country-data__stat:nth-child(1) .covid-country-data__label')
    expect(label.text()).toBe('Total de casos')
  })

  it('updates label when window is resized', async () => {
    window.innerWidth = 600
    const wrapper = mount(SearchResultCard, {
      props: defaultProps
    })
    const label = wrapper.find('.covid-country-data__stat:nth-child(1) .covid-country-data__label')
    expect(label.text()).toBe('Total de casos')

    window.innerWidth = 500
    window.dispatchEvent(new Event('resize'))
    await wrapper.vm.$nextTick()
    expect(label.text()).toBe('Casos')

    window.innerWidth = 600
    window.dispatchEvent(new Event('resize'))
    await wrapper.vm.$nextTick()
    expect(label.text()).toBe('Total de casos')
  })
})
