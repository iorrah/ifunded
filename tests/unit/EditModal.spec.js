import { mount } from '@vue/test-utils';
import EditModal from '../../src/components/EditModal/index';

const props = {
  propsData: {
    dispatschEditUser: jest.fn(),
    closeEditModal: jest.fn(),
    user: {
      id: 1,
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'jane.doe@email.com',
      created_date: new Date('2019-02-12'), // Feb
      creator_id: 1,
    },
  },
};

describe('EditModal', () => {
  test('renders correctly', () => {
    const wrapper = mount(EditModal, props);
    expect(wrapper.element).toMatchSnapshot();
  });
});
