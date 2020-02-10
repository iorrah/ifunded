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
              placeholder=""
              required=""
              class="inpField"
              :value="search"
              @input="updateSearch"
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
              <select
                required="required"
                class="inpField inpField__select"
                @change="updateCreator($event)"
              >
                <option label="Everyone" value="banana" selected="selected"></option>

                <option
                  v-for="creator in creators"
                  v-bind:key="creator.id"
                  v-bind:value="creator.id"
                  v-once
                >
                  {{creator.first_name}} {{creator.last_name}}
                </option>
              </select>

              <div class="jq-selectbox__select">
                <div class="jq-selectbox__select-text placeholder">
                  <span v-if="showCreatedBy">Created by</span>
                  <span v-else>
                    {{ creatorName }}
                  </span>
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
  props: ['search', 'appUsers', 'creatorId'],
  computed: {
    creators() {
      const creatorsIds = this.appUsers.map((e) => e.creator_id);
      const uniqueIds = creatorsIds.filter((item, pos) => creatorsIds.indexOf(item) === pos);
      return uniqueIds.map((id) => this.appUsers.find((e) => e.id === id));
    },
    showCreatedBy() {
      return this.$props.creatorId === null;
    },
    creatorName() {
      const creator = this.creators.find((e) => e.id === this.$props.creatorId);
      return `${creator.first_name} ${creator.last_name}`;
    },
  },
  methods: {
    updateSearch(e) {
      this.$emit('update:search', e.target.value);
    },
    updateCreator(e) {
      this.$emit('update:creatorId', parseInt(e.target.value, 10));
    },
  },
};
</script>
