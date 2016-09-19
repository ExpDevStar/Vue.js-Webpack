<template>
  <div class="tabs">
    <ul>
      <li v-for="category in categories"
          v-on:click="activeTab = $index"
          :class="{ active: activeTab == $index, tabs__tab: true }">{{category}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        categories: ['All extensions', 'Modules', 'Themes', 'Distributions'],
        activeTab: 0
      }
    }
  }
</script>

<style lang="stylus" scoped src="./styles.styl"></style>

