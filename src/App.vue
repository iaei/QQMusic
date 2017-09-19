<template>
  <div id="app">
    <sideBar></sideBar>
    <main>
      <header>
        <tab></tab>
      </header>
      <router-view></router-view>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import tab from '@/components/tab'
import sideBar from '@/components/sideBar'

export default {
  name: 'app',
  components: { tab, sideBar }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
