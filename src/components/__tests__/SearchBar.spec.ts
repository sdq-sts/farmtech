import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchBar from '@/components/SearchBar.vue'
import SearcherIcon from '@/components/SearcherIcon.vue'

describe('SearchBar.vue', () => {
  it('renders properly', () => {
    const wrapper = mount(SearchBar)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the search input with correct attributes', () => {
    const wrapper = mount(SearchBar)
    const input = wrapper.find('input.covid-searcher__input')
    expect(input.exists()).toBe(true)
    expect(input.attributes('type')).toBe('text')
    expect(input.attributes('placeholder')).toBe('Digite o nome do país')
  })

  it('emits search event on input', async () => {
    const wrapper = mount(SearchBar)
    const input = wrapper.find('input.covid-searcher__input')
    await input.setValue('Brasil')
    expect(wrapper.emitted()).toHaveProperty('search')
  })

  it('renders the SearcherIcon component', () => {
    const wrapper = mount(SearchBar)
    const icon = wrapper.findComponent(SearcherIcon)
    expect(icon.exists()).toBe(true)
  })

  it('has the correct classes and structure', () => {
    const wrapper = mount(SearchBar)
    expect(wrapper.classes()).toContain('covid-searcher')

    const content = wrapper.find('.covid-searcher__content')
    expect(content.exists()).toBe(true)

    const title = wrapper.find('.covid-searcher__title')
    expect(title.exists()).toBe(true)
    expect(title.text()).toBe('Filtrar dados sobre um país')

    const form = wrapper.find('.covid-searcher__form')
    expect(form.exists()).toBe(true)
  })
})
