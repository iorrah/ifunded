<template>
  <div class="modal__overlay">
    <div class="modal__aligner">
      <div class="modal__card">
        <div class="modal__header">
          <h2 class="modal__title">Add user</h2>

          <img
            src="../../assets/cross.svg"
            class="modal__close-modal"
          />
        </div>

        <div class="modal__body">
          <div class="material-form">
            <div class="material-form__input-text modal__input-text--first-name">
              <div class="group">
                <input
                  data-message="The format of your email is incorrect"
                  type="text"
                  placeholder=""
                  required=""
                  class="inpField"
                  v-model="firstName"
                />

                <span class="highlight"></span>
                <span class="bar"></span>

                <label>
                  First name
                </label>

                <span class="error-message">
                  Error
                </span>
              </div>
            </div>

            <div class="material-form__input-text modal__input-text--last-name">
              <div class="group">
                <input
                  data-message="The format of your email is incorrect"
                  type="text"
                  placeholder=""
                  required=""
                  class="inpField"
                  v-model="lastName"
                />

                <span class="highlight"></span>
                <span class="bar"></span>

                <label>
                  Last name
                </label>

                <span class="error-message">
                  Error
                </span>
              </div>
            </div>
          </div>

          <div class="material-form modal__material-form--email">
            <div class="material-form__input-text modal__input-text--email">
              <div class="group">
                <input
                  data-message="The format of your email is incorrect"
                  type="text"
                  placeholder=""
                  required=""
                  class="inpField"
                  v-model="email"
                />

                <span class="highlight"></span>
                <span class="bar"></span>

                <label>
                  Email
                </label>

                <span class="error-message">
                  Error
                </span>
              </div>
            </div>
          </div>

          <button type="button" class="button button--secondary modal__button--secondary">
            Cancel
          </button>

          <button type="button" class="button button--primary" @click="addUser">
            Add User
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddModal',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
    };
  },
  methods: {
    buildUser(firstName, lastName, email) {
      return {
        first_name: firstName,
        last_name: lastName,
        email,
        creator_id: 1,
        created_date: new Date(),
      };
    },
    addUser() {
      const user = this.buildUser(this.firstName, this.lastName, this.email);
      this.$props.dispatschAddUser(user);
    },
  },
  props: ['dispatschAddUser'],
};
</script>
