<template>
  <div class="selected col-md-2 affix" v-show="hasSelected">
    <h3>Extensions</h3>
    <label v-for="result in results | filterBy 'true' in 'selected'" class="selected__item">
      <input type="checkbox" v-model="result.selected"> {{result.title}}
    </label>
    <div class="actions">
      <button><span>Build</span></button>
    </div>
  </div>
</template>


<script>
  export default{
    props: ['results'],
    data () {
      return {
        hasSelected: false
      }
    },
    watch: {
      results: {
        deep: true,
        handler: function (origin, results) {
          this.hasSelected = results.filter(function (result) {
            return result.selected
          }).length
        }
      }
    }
  }
</script>

<style scoped>
  .selected {
    padding: 1em;
    position: fixed;
    right: 3em;
    top: 28%;
    background: #191c27;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
  }

  .selected .selected__item {
    display: block;
    text-decoration: none;
    cursor: pointer;
    font-size: .8em;
    line-height: 1.5;
    font-weight: 300;
    letter-spacing: 2px;
    -moz-transition: color 250ms ease;
    -o-transition: color 250ms ease;
    -webkit-transition: color 250ms ease;
    -ms-transition: color 250ms ease;
    transition: color 250ms ease;
    color: #a9ecff;
  }

  h3 {
    color: #F85D59;
    margin: .4em 0;
    font-weight: 400;
  }

  button {
    width: 150px;
    margin: 0 auto;
    height: 48px;
    line-height: 48px;
  }

  button > span {
    font-size: .7em;
    height: 34px;
    line-height: 34px;
  }
</style>
