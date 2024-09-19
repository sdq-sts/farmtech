import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SiteHero from '@/components/SiteHero.vue'

describe('SiteHero', () => {
  it('renders properly', () => {
    const wrapper = mount(SiteHero)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the correct title', () => {
    const wrapper = mount(SiteHero)
    const title = wrapper.find('.site-hero__title')
    expect(title.exists()).toBe(true)
    expect(title.text()).toBe('Conheça o Covidômetro')
  })

  it('renders the correct description text', () => {
    const wrapper = mount(SiteHero)
    const description = wrapper.find('.site-hero__text')
    expect(description.exists()).toBe(true)
    expect(description.text()).toContain(
      'Fique atualizado com velocidade e transparência. O Covidômetro é uma ferramenta que mostra para você em tempo real o número de casos e óbitos relacionados à pandemia da COVID-19 ao redor do mundo.'
    )
  })

  it('renders the doctors image with correct attributes', () => {
    const wrapper = mount(SiteHero)
    const doctorsImage = wrapper.find('.site-hero__doctors-img')
    expect(doctorsImage.exists()).toBe(true)
    expect(doctorsImage.attributes('alt')).toBe('Covidômetro doctors')
  })
})
