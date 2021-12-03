import SearchSection from './SearchSection.svelte'
import {render} from '@testing-library/svelte'

test('matches the snapshot', () => {
  const {container} = render(SearchSection)
  expect(container).toMatchSnapshot()
})
