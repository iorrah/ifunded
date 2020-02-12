import { mount } from '@vue/test-utils';
import AddModal from '../../src/components/AddModal/index';

const data = () => ({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane.doe#email.com',
  errorMessage: 'Invalid email address',
});

const propsData = {
  dispatschEditUser: jest.fn(),
  closeAddModal: jest.fn(),
};

const props = { data, propsData };

describe('AddModal', () => {
  test('renders correctly', () => {
    const wrapper = mount(AddModal, props);
    expect(wrapper.element).toMatchSnapshot();
  });
});
