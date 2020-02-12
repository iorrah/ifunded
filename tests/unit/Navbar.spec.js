import { mount } from '@vue/test-utils';
import Navbar from '../../src/components/Navbar/index';

describe('Navbar', () => {
  test('renders correctly', () => {
    const wrapper = mount(Navbar);
    expect(wrapper.element).toMatchSnapshot();
  });
});
