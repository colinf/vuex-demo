<template>
  <div class="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-6 left-pane">
          <div class="col-xs-12 nav-pane">
            <ul class="nav nav-tabs">
              <li>
                <router-link to="/component1">Component 1</router-link>
              </li>
              <li>
                <router-link to="/component2">Component 2</router-link>
              </li>
              <li>
                <router-link to="/component3">Component 3</router-link>
              </li>
            </ul>
          </div>
          <div class="col-xs-12 component-pane">
            <router-view></router-view>
          </div>
        </div>
        <div class="col-xs-6 col-sm-6 vuex-pane">
          <vuex-view></vuex-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from './vuex/store'
  import VuexView from './components/VuexView.vue'
  export default {
    store,
    name: 'app',
    components: {VuexView}
  }
</script>

<style>
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }

  .component-pane {
    padding-top: 10px;
  }

  .router-link-active {
    background-color: #eeeeee;
  }

  .error {
    color: crimson;
  }
</style>
