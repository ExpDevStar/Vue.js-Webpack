<template>
  <header class="header">
    <div class="wrap">
      <div class="header__i">
        <div class="wrap-logo">
          <a class="logo" href="/" title="Druply.me" rel="home">
            <!--Druply.me-->
          </a>
        </div>
      </div>
    </div>
  </header>

  <div class="app container">
    <div class="row">
      <div class="col-md-7 col-centered">
        <tabs></tabs>
        <search></search>
        <notifications></notifications>
      </div>
    </div>
  </div>
</template>

<script>
  import tabs from './components/tabs/tabs'
  import search from './components/search/search'
  import notifications from './components/notifications/notifications'
  export default {
    components: {
      tabs,
      search,
      notifications
    }
  }
</script>

<style>
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.3/css/bootstrap.min.css"
</style>

<style>
  html, html > body {
    background-color: #1f2331;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 0;
  }

  .header {
    height: 80px;
    width: 100%;
    margin-bottom: 40px;
    background: #191c26;
  }

  .header .wrap {
    padding-top: 9px;
    padding-bottom: 0;
  }

  .logo {
    font-size: 55px;
    line-height: 56px;
    font-weight: 400;
    font-family: "Avenir Next W10 Bold", sans-serif;
    color: #a9ecff;
    text-decoration: none;
    letter-spacing: 4px;
    margin: 0 20px;
  }

  .wrap-logo .logo img {
    display: block;
    width: 100%;
  }

  .app {
    margin: 80px auto;
  }

  .actions {
    margin-top: 1em;
  }

  .actions button {
    border-radius: 40px;
  }

  button {
    background: rgba(238,98,71,0.2);
    min-width: 100px;
    text-transform: uppercase;
    -webkit-transition-property: background,box-shadow,-webkit-filter;
    transition-property: background,box-shadow,-webkit-filter;
    -webkit-transition-duration: 0.6s;
    transition-duration: 0.6s;
    -webkit-transition-timing-function: ease;
    transition-timing-function: ease;
    border-radius: 40px;
    padding: 7px;
    border: 0;
    outline: 0;
    display: block;
    box-sizing: border-box;
    cursor: pointer;
  }

  button > span {
    height: 50px;
    display: block;
    color: #fff;
    position: relative;
    background: url(https://cases4real.com/sites/all/themes/csgo/img/btn-bg-red.png) repeat-x;
    border-radius: 35px;
    border: 0;
    line-height: 50px;
    font-size: 1.5em;
    font-family: "Avenir Next W10 Medium",sans-serif;
    word-spacing: -1px;
    letter-spacing: 2.1px;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
    padding: 0;
  }

  button:hover {
    color: #ffbaaa;
  }

  button > span:hover {
    background-color: #ff7774;
    filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0,startColorstr='#FFFF7774',endColorstr='#FFFF6866');
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgi…pZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
    background-size: 100%;
    background-image: -webkit-gradient(linear,50% 0%,50% 100%,color-stop(0%,#ff7774),color-stop(100%,#ff6866));
    background-image: -moz-linear-gradient(top,#ff7774 0%,#ff6866 100%);
    background-image: -webkit-linear-gradient(top,#ff7774 0%,#ff6866 100%);
    background-image: linear-gradient(to bottom,#ff7774 0%,#ff6866 100%);
  }

  .col-centered{
    float: none;
    margin: 0 auto;
  }
</style>
