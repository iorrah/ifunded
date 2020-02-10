<template>
  <nav class="navbar container-fluid">
    <div class="flex__space-between">
      <div class="navbar__left">
        <a href="#" class="navbar__link">
          <img src="../../assets/ifunded-logo.svg" class="navbar__logo" />
        </a>

        <ul class="navbar__menu">
          <li class="navbar__menu-item">
            <a href="#" class="navbar__menu-link">Dashboard</a>
          </li>

          <li class="navbar__menu-item">
            <a href="#" class="navbar__menu-link">Customers</a>
          </li>

          <li class="navbar__menu-item">
            <a href="#" class="navbar__menu-link">Developers</a>
          </li>

          <li class="navbar__menu-item">
            <a href="#" class="navbar__menu-link">Projects</a>
          </li>

          <li class="navbar__menu-item">
            <a href="#" class="navbar__menu-link navbar__menu-link--active">
              Users
              <i class="navbar__menu-indicator--active"></i>
            </a>
          </li>

          <li class="navbar__menu-item">
            <a href="#" class="navbar__menu-link">Affiliates</a>
          </li>
        </ul>
      </div>

      <div class="navbar__right">
        <div class="navbar__form">
          <div class="material-form">
            <div class="material-form__input-text">
              <div class="group">
                <input
                  data-message="The format of your email is incorrect"
                  type="text"
                  name="_username"
                  placeholder=""
                  required=""
                  class="inpField"
                  id="username"
                  value=""
                />

                <img
                  src="../../assets/search-icon.svg"
                  class="material-form__search-icon"
                />

                <span class="highlight"></span>
                <span class="bar"></span>

                <label>
                  Search
                </label>

                <span class="error-message">
                  Error
                </span>
              </div>
            </div>

            <div class="material-form__input-select">
              <div class="group select-group">
                <div class="jq-selectbox jqselect inpField dropup opened">
                  <select required="required" class="inpField inpField__select">
                    <option label="English" selected="selected"></option>
                    <option label="German" selected=""></option>
                  </select>

                  <div class="jq-selectbox__select">
                    <div class="jq-selectbox__select-text placeholder">
                      Language
                    </div>

                    <div class="jq-selectbox__trigger">
                      <div class="jq-selectbox__trigger-arrow">
                        <img
                          src="../../assets/select-arrows.svg"
                          class="jq-selectbox__select-arrow"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <span class="highlight"></span>
                <span class="bar"></span>
              </div>
            </div>
          </div>
        </div>

        <a href="#" class="navbar__profile">
          <span class="navbar__salutation">Janet Weaver</span>
          <img src="../../assets/user-avatar.png" class="navbar__avatar">
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
