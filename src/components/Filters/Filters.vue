<template>
  <div class="filters container">
    <p class="filters__title">
      <img src="../../assets/filter-icon.svg" class="filters__icon" />
      Filter by
    </p>

    <div class="filters__inputs">
      <div class="material-form">
        <div class="material-form__input-text filters__input-text">
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
              Name or email
            </label>

            <span class="error-message">
              Error
            </span>
          </div>
        </div>

        <div class="material-form__input-select filters__input-select">
          <div class="group select-group">
            <div class="jq-selectbox jqselect inpField dropup opened">
              <select required="required" class="inpField inpField__select">
                <option label="Everyone" selected="selected"></option>
                <option label="Janet Weaver"></option>
                <option label="Charles Morris"></option>
                <option label="Tracey Ramos"></option>
              </select>

              <div class="jq-selectbox__select">
                <div class="jq-selectbox__select-text placeholder">
                  Created by
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

        <div class="material-form__input-select filters__input-select">
          <div class="group select-group">
            <div class="jq-selectbox jqselect inpField dropup opened">
              <select required="required" class="inpField inpField__select">
                <option label="All dates" selected="selected"></option>
                <option label="February"></option>
                <option label="January"></option>
                <option label="December"></option>
                <option label="November"></option>
                <option label="October"></option>
              </select>

              <div class="jq-selectbox__select">
                <div class="jq-selectbox__select-text placeholder">
                  Creation date
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
  </div>
</template>

<script>
export default {
  name: 'Filters',
};
</script>
