import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SiteHeader from '@/components/SiteHeader.vue'

describe('SiteHeader', () => {
  it('renders properly', () => {
    const wrapper = mount(SiteHeader)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the logo image', () => {
    const wrapper = mount(SiteHeader)
    const logo = wrapper.find('img')
    expect(logo.exists()).toBe(true)
    expect(logo.attributes('alt')).toBe('Covidômetro logo')
  })

  it('has the correct container class', () => {
    const wrapper = mount(SiteHeader)
    const container = wrapper.find('.site-header__container')
    expect(container.exists()).toBe(true)
  })
})
