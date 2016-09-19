<template>
  <div class="alphabet">
    <ul>
      <a v-for="letter in alphabet"
         v-on:click="update(letter)"
         tabindex="{{$index}}"
         class="alphabet__letter">
        {{letter}}
      </a>
    </ul>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
        url: 'http://localhost:7000/api/v1.0/search',
        queryParamName: 'z',
        query: ''
      }
    },
    methods: {
      update: function update (letter) {
        this.query = letter

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
            // Emit search results to parent.
            this.$parent.$emit('search-results', response.data)
          }
        })
      },
      fetch: function fetch () {
        var _vue = require('vue')
        var _defineProperty2 = require('babel-runtime/helpers/defineProperty')
        var _defineProperty3 = _interopRequireDefault(_defineProperty2)
        var _assign = require('babel-runtime/core-js/object/assign')
        var _assign2 = _interopRequireDefault(_assign)

        function _interopRequireDefault (obj) {
          return obj && obj.__esModule ? obj : {default: obj}
        }

        if (!this.$http) {
          return _vue.util.warn('You need to install the `vue-resource` plugin', this)
        }

        this.src = this.url

        if (!this.queryParamName && this.src.substr(-1) !== '/') {
          this.src += '/'
        }

        var query = this.query

        var src = this.queryParamName ? this.src : this.src + query

        var params = this.queryParamName ? (0, _assign2.default)((0, _defineProperty3.default)({}, this.queryParamName, query), this.data) : this.data

        return this.$http.get(src, params)
      }
    }
  }
</script>

<style scoped>
  .alphabet > ul {
    padding: .5em 0 0;
    text-align: center;
  }
  .alphabet__letter {
    display: inline-block;
    text-decoration: underline;
    margin: .3em .35em 0;
    cursor: pointer;
    color: #7889c3;
    text-transform: uppercase;
    font-size: .9em;
    line-height: 16px;
    font-weight: 400;
    letter-spacing: 2px;
    -moz-transition: color 250ms ease;
    -o-transition: color 250ms ease;
    -webkit-transition: color 250ms ease;
    -ms-transition: color 250ms ease;
    transition: color 250ms ease;
  }

  .alphabet__letter:hover, .alphabet__letter:active {
    color: #a9ecff;
  }
</style>
