<template>
  <div id="app">
    <sideBar></sideBar>
    <main>
      <header>
        <div class="header-tools">
          <div class="header-tools-l">
            <view-option>
              <span><</span>
              <span>></span>
              <span>f5</span>
            </view-option>
            <search></search>
            <find-by-listen></find-by-listen>
          </div>
          <div class="header-tools-r">
            <div class="setting">
              <span>反馈</span>
              <span>VIP</span>
              <span>换肤</span>
              <span>设置</span>
            </div>
            <win-option>
              <span>精简</span>
              <span>最小化</span>
              <span>最大化</span>
              <span>关闭</span>
            </win-option>
          </div>
        </div>
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
import search from '@/components/search'

export default {
  name: 'app',
  components: { tab, sideBar, search }
}
</script>

<style lang="scss">
  @import "./style/app.scss";
</style>
