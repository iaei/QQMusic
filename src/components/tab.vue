<template>
  <div id="tab">
    <ul class="tab-items">
      <router-link :to="{ name: 'recommend'}">精选</router-link>
      <router-link :to="{ name: 'singer'}">歌手</router-link>
      <router-link :to="{ name: 'ranking'}">排行</router-link>
      <router-link :to="{ name: 'radio'}">电台</router-link>
      <router-link :to="{ name: 'channel'}">分类歌单</router-link>
      <!-- <router-link :to="{ name: ''}">有声</router-link>
      <router-link :to="{ name: ''}">数字专辑</router-link> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tab'
}
</script>

<style lang="css">
  a {
    text-decoration: none;
  }
  a:active, a:link{
    color: black;
  }
</style>
