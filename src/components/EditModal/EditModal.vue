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
                  Error with {{ firstName }}
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
                  Error with {{ lastName }}
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
                  Error with {{ email }}
                </span>
              </div>
            </div>
          </div>

          <p class="modal__error" v-if="errorMessage !== ''">
            {{ errorMessage }}
          </p>

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
import { isValidName, isValidEmail } from '../../utils/validation';

export default {
  name: 'EditModal',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      errorMessage: '',
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
      if (this.hasChanged(this.firstName, this.lastName, this.email)) {
        if (isValidName(this.firstName)) {
          if (isValidName(this.lastName)) {
            if (isValidEmail(this.email)) {
              this.prepareToDispatch(
                this.firstName,
                this.lastName,
                this.email,
              );
            } else {
              this.showError('Invalid email address');
            }
          } else {
            this.showError('Invalid last name');
          }
        } else {
          this.showError('Invalid first name');
        }
      } else {
        this.closeEditModalFromWithin();
      }
    },
    showError(error) {
      this.errorMessage = error;
    },
    prepareToDispatch() {
      const user = this.buildUser(this.firstName, this.lastName, this.email);
      this.$props.dispatschEditUser(user);
    },
    closeEditModalFromWithin() {
      this.$props.closeEditModal();
    },
    hasChanged(firstName, lastName, email) {
      const { user } = this.$props;

      if (firstName !== user.first_name) {
        return true;
      }

      if (lastName !== user.last_name) {
        return true;
      }

      if (email !== user.email) {
        return true;
      }

      return false;
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
