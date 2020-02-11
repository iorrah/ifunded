<template>
  <div class="users container" v-if="appUsers.length > 0">
    <Filters
      :search.sync="search"
      :creatorId.sync="creatorId"
      :month.sync="month"
      :appUsers="appUsers"
    />

    <div class="users__header flex__space-between">
      <h3 class="users__title">
        Users

        <small class="users__title-small">
          ({{ appUsers.length }})
        </small>
      </h3>

      <div>
        <button type="button" class="button button--primary" @click="openAddModal">
          Add User
        </button>
      </div>
    </div>

    <table class="users__table">
      <thead class="users__table-header">
        <tr>
          <th
            class="users__table-cell users__table-cell--name"
            @click="sortUsers('last_name')"
            title="Sort column by Last Name"
          >
            Name

            <img
              src="../../assets/select-arrows.svg"
              class="users__table-header-arrow"
            />
          </th>

          <th
            class="users__table-cell users__table-cell--email"
            @click="sortUsers('email')"
            title="Sort column by Email"
          >
            Email

            <img
              src="../../assets/select-arrows.svg"
              class="users__table-header-arrow"
            />
          </th>

          <th
            class="users__table-cell users__table-cell--date"
            @click="sortUsers('created_date')"
            title="Sort column by creation date"
          >
            Created at

            <img
              src="../../assets/select-arrows.svg"
              class="users__table-header-arrow"
            />
          </th>

          <th class="users__table-cell users__table-cell--action">
            &nbsp;
          </th>
        </tr>
      </thead>

      <tbody class="users__table-body" v-if="filteredUsers.length > 0">
        <tr class="users__table_row" v-for="user in filteredUsers" v-bind:key="user.id">
          <td class="users__table-cell">{{ user.first_name }} {{ user.last_name }}</td>
          <td class="users__table-cell">{{ user.email }}</td>
          <td class="users__table-cell">{{ formatDate(user.created_date) }}</td>

          <td class="users__table-cell">
            <div class="users__table-row-action-container" @click="() => openEditModal(user)">
              <img
                src="../../assets/action-icon.svg"
                class="users__table-row-action"
              />
            </div>
          </td>
        </tr>
      </tbody>

      <tbody v-else>
        <tr>
          <td colspan="4">
            <div class="users__empty-state">
              <p class="users__empty-state-icon">ʕ•́ᴥ•̀ʔっ</p>
              <p class="users__empty-state-text">No results match this filter criteria</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="users__pagination">
      <img
        src="../../assets/arrow-left-circle.svg"
        class="users__pagination__arrow"
      />

      <span class="users__pagination-label" v-if="filteredUsers.length > 0">
        1-{{ filteredUsers.length }} of {{ filteredUsers.length }}
      </span>
      <span class="users__pagination-label" v-else>
        0 of 0
      </span>

      <img
        src="../../assets/arrow-right-circle.svg"
        class="users__pagination__arrow"
      />
    </div>

    <div v-if="addModal === true">
      <AddModal
        :dispatschAddUser="dispatschAddUser"
        :closeAddModal="closeAddModal"
        />
    </div>

    <div v-if="editModal === true">
      <EditModal :dispatschEditUser="dispatschEditUser" :user="user" />
    </div>

    <div class="snackbar__container">
      <div class="snackbar" v-if="showUserCreated === true">
        User created successfully
      </div>

      <div class="snackbar" v-if="showUserEdited === true">
        User edited successfully
      </div>
    </div>
  </div>
</template>

<script>
import Filters from '../Filters/index';
import AddModal from '../AddModal/index';
import EditModal from '../EditModal/index';

import {
  ACTION_APP_GET_USERS,
  ACTION_APP_ADD_USER,
  ACTION_APP_EDIT_USER,
} from '../../store/app.store';

import { sortAsc, sortDesc } from '../../utils/sorting';
import { formatDate } from '../../utils/date-formatter';

export default {
  name: 'Users',
  props: [],
  computed: {
    appUsers() {
      return this.$store.getters.getUsers;
    },
    filteredUsers() {
      let users = this.appUsers;

      if (this.search !== '') {
        users = this.getFilteredBySearch(users, this.search);
      }

      if (this.creatorId !== null) {
        users = this.getFilteredByCreator(users, this.creatorId);
      }

      if (this.month !== null) {
        users = this.getFilteredByMonth(users, this.month);
      }

      return users;
    },
  },
  data() {
    return {
      sort: 'asc',
      search: '',
      creatorId: null,
      month: null,
      addModal: false,
      editModal: false,
      user: null,
      showUserCreated: false,
      showUserEdited: false,
    };
  },
  methods: {
    getUsers() {
      this.$store.dispatch(ACTION_APP_GET_USERS);
    },
    dispatschAddUser(user) {
      this.$store.dispatch(ACTION_APP_ADD_USER, user);
      this.showUserCreatedTmer();
      this.closeAddModal();
    },
    dispatschEditUser(user) {
      this.$store.dispatch(ACTION_APP_EDIT_USER, user);
      this.showUserEditedTmer();
      this.closeEditModal();
    },
    sortUsers(prop) {
      if (this.sort === 'asc') {
        this.sort = 'desc';
        return this.appUsers.sort((a, b) => sortAsc(a, b, prop));
      }

      this.sort = 'asc';
      return this.appUsers.sort((a, b) => sortDesc(a, b, prop));
    },
    getFilteredBySearch(users, search) {
      return users.filter((user) => {
        const userString = `${user.first_name} ${user.last_name} ${user.email}`;
        return userString.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
    },
    getFilteredByCreator(users, creatorId) {
      return users.filter((user) => user.creator_id === creatorId, 10);
    },
    getFilteredByMonth(users, month) {
      return users.filter((user) => {
        const creationMonth = new Date(user.created_date).getMonth() + 1;
        return creationMonth === month;
      });
    },
    formatDate(date) {
      return formatDate(date);
    },
    openAddModal() {
      this.addModal = true;
    },
    openEditModal(user) {
      this.user = user;
      this.editModal = true;
    },
    closeAddModal() {
      this.addModal = false;
    },
    closeEditModal() {
      this.user = null;
      this.editModal = false;
    },
    showUserCreatedTmer() {
      this.showUserCreated = true;

      setTimeout(() => {
        this.showUserCreated = false;
      }, 2000);
    },
    showUserEditedTmer() {
      this.showUserEdited = true;

      setTimeout(() => {
        this.showUserEdited = false;
      }, 2000);
    },
  },
  mounted() {
    this.getUsers();
  },
  components: {
    Filters,
    AddModal,
    EditModal,
  },
};
</script>
