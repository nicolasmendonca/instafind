import CategoriesSection from './CategoriesSection.svelte'
import {render} from '@testing-library/svelte'

test('matches the snapshot', () => {
  const {container} = render(CategoriesSection)
  expect(container).toMatchSnapshot()
})
