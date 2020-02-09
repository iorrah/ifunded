import { shallowMount } from '@vue/test-utils';
import Users from '@/components/Users.vue';

describe('Users.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Users, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
