import Navbar from './Navbar.svelte'
import {render} from '@testing-library/svelte'

test('matches the snapshot', () => {
  const {container} = render(Navbar)
  expect(container).toMatchSnapshot()
})
