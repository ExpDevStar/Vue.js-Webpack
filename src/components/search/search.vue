<template>
  <selected :results="results"></selected>
  <div class="search">
    <div class="search__field">
      <i class="fa fa-spinner fa-spin" v-if="loading"></i>
      <template v-else>
        <i class="fa fa-search" v-show="isEmpty"></i>
        <i class="fa fa-times" v-show="isDirty" @click="reset"></i>
      </template>

      <input type="text"
             placeholder="Search Drupal extension"
             autocomplete="off"
             v-model="query"
             @keydown.down="down"
             @keydown.up="up"
             @keydown.enter="hit"
             @keydown.esc="reset"
             @input="update"/>
    </div>
    <alphabet></alphabet>
    <results :results="results"></results>
  </div>
</template>

<script>
  import vueTypeahead from 'vue-typeahead'
  import selected from './selected'
  import alphabet from './alphabet'
  import results from './results'
  export default {
    extends: vueTypeahead,
    data () {
      return {
        results: [],
        query: '',
        current: -1,
        loading: false,
        src: 'http://localhost:7000/api/v1.0/search',
        queryParamName: 'v',
        minChars: 3
      }
    },
    created: function () {
      this.$on('search-results', function (results) {
        this.$data.results = results
      })
    },
    components: {
      selected,
      alphabet,
      results
    },
    methods: {
      update: function update () {
        var _this = this

        if (!this.query) {
          return this.reset()
        }

        if (this.minChars && this.query.length < this.minChars) {
          return
        }

        this.loading = true

        this.fetch().then(function (response) {
          if (_this.query) {
            var data = response.data
            data = _this.prepareResponseData ? _this.prepareResponseData(data) : data
            _this.results = _this.limit ? data.slice(0, _this.limit) : data
            // Emit search results.
            this.$emit('search-results', _this.results)
            _this.current = -1
            _this.loading = false
          }
        })
      }
    }
  }
</script>


<style scoped>
  .search {
    position: relative;
    cursor: pointer;
    background: #191c27;
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
    border-radius: 25px;
    padding-top: 15px;
    padding-bottom: 14px;
    padding-left: 20px;
    padding-right: 20px
  }

  .search__field {
    position: relative;
  }

  .search__field input {
    width: 100%;
    font-size: 1em;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #2c3e50;
    line-height: 1.42857143;
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, .4);
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    font-weight: 400;
    padding: 12px 26px;
    border: none;
    border-radius: 22px;
    letter-spacing: 1px;
    box-sizing: border-box;
  }

  .search__field input:focus {
    border-color: #096fb7;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px #096fb7;
  }

  .fa-times {
    cursor: pointer;
  }

  i {
    float: right;
    position: relative;
    top: 30px;
    right: 29px;
    opacity: 0.4;
  }
</style>
