<template>
  <ul class="search__results">
    <label v-for="result in results" class="search__results__result">
      <input type="checkbox" v-model="result.selected"> {{result.title}}
      <!--<a target="_blank" :href="result.link">[*]</a>-->
    </label>
    <div class="actions">
      <button v-if="results | filterBy 'true' in 'selected'"><span>Show All <icon name="angle-down"></icon></span></button>
    </div>
  </ul>
</template>

<script>
  import icon from 'vue-awesome'
  export default{
    props: ['results'],
    components: {
      icon
    }
  }
</script>

<style scoped>
  .search__results__result, .search__results__result a {
    display: block;
    text-decoration: none;
    margin: .4em 1em 0 0;
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

  .search__results__result a {
    display: inline-block;
  }

  .search__results__result > a:hover {
    text-decoration: underline;
  }

  button {
    width: 180px;
    margin: 0 auto;
  }

  button > span {
    font-size: .7em;
  }
</style>
