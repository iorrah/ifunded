import { mount } from '@vue/test-utils';
import Context from '../../src/components/Context/index';

describe('Context', () => {
  test('renders correctly', () => {
    const wrapper = mount(Context);
    expect(wrapper.element).toMatchSnapshot();
  });
});
