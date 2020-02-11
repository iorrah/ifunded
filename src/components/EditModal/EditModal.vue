<template>
  <div class="modal__overlay">
    <div class="modal__aligner">
      <div class="modal__card">
        <div class="modal__header">
          <h2 class="modal__title">Edit user</h2>

          <img
            src="../../assets/cross.svg"
            class="modal__close-modal"
            @click="closeEditModalFromWithin"
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

          <button
            type="button"
            class="button button--secondary modal__button--secondary"
            @click="closeEditModalFromWithin"
          >
            Cancel
          </button>

          <button type="button" class="button button--primary" @click="saveChanges">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditModal',
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
        ...this.$props.user,
        first_name: firstName,
        last_name: lastName,
        email,
      };
    },
    saveChanges() {
      const user = this.buildUser(this.firstName, this.lastName, this.email);
      this.$props.dispatschEditUser(user);
    },
    closeEditModalFromWithin() {
      this.$props.closeEditModal();
    },
  },
  created() {
    this.firstName = this.$props.user.first_name;
    this.lastName = this.$props.user.last_name;
    this.email = this.$props.user.email;
  },
  props: ['dispatschEditUser', 'user', 'closeEditModal'],
};
</script>
