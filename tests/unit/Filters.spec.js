import { mount } from '@vue/test-utils';
import Filters from '../../src/components/Filters/index';

const props = {
  propsData: {
    appUsers: [
      {
        id: 1,
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'jane.doeemail.com',
        created_date: new Date('2019-02-12'), // Feb
        creator_id: 1,
      },
      {
        id: 2,
        first_name: 'Bob',
        last_name: 'Aly',
        email: 'bob.aly@email.com',
        created_date: new Date('2019-12-02'), // Dec
        creator_id: 1,
      },
    ],
    creatorId: 1,
    month: 2,
    search: 'Doe',
  },
};

describe('Filters', () => {
  test('renders correctly', () => {
    const wrapper = mount(Filters, props);
    expect(wrapper.element).toMatchSnapshot();
  });
});
