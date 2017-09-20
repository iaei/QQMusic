<template>
  <div class="sideBar">
    <div class="user-info">
      <img src="#" alt="">
      <img src="#" alt="" title="尽享绿钻特权,彰显不一样的你"><span>开通</span>
      <p>QQ等级加速中</p>
    </div>
    <div class="user-own">
      <div class="sideBarClassify">
        <h5>在线音乐</h5>
        <div class="sideBarItems">
          <div class="sideBarItem" v-for='onlineItem in onlineItems' :class="{active: activeName===onlineItem.title}" @click="onActive(onlineItem.title)">
            <img class="sideBarImg" :src="activeName!==onlineItem.title ? onlineItem.src:onlineItem.activeSrc">
            <span class="sideBarTitle">{{ onlineItem.title }}</span>
          </div>
        </div>
      </div>
      <div class="sideBarClassify">
        <h5>我的音乐</h5>
        <div class="sideBarItems">
          <div class="sideBarItem" v-for="myItem in myItems" :class="{active: activeName===myItem.title}" @click="onActive(myItem.title)">
            <img class="sideBarImg" :src="activeName!==myItem.title?myItem.src:myItem.activeSrc">
            <span class="sideBarTitle">{{ myItem.title }}</span>
          </div>
        </div>
      </div>
      <div class="my-music-list" v-if="false">
        <h5>我创建的歌单</h5>
      </div>
      <div class="my-music-star" v-if="false">
        <h5>我收藏的歌单</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sideBar',
  data: function () {
    return {
      onlineItems: [
        {'title': '音乐馆', 'src': '../../static/img/icon-recommend.png', 'activeSrc': '../../static/img/icon-recommend-active.png'},
        {'title': 'MV', 'src': '../../static/img/icon-mv.png', 'activeSrc': '../../static/img/icon-mv-active.png'},
        {'title': '个性电台', 'src': '../../static/img/icon-radio.png', 'activeSrc': '../../static/img/icon-radio-active.png'}
      ],

      myItems: [
        {'title': '本地和下载', 'src': '#'},
        {'title': '播放历史', 'src': '#'},
        {'title': '试听列表', 'src': '#'}
      ],

      activeName: ''
    }
  },

  methods: {
    onActive () {
      this.activeName = arguments[0]
    }
  }
}
</script>

<style lang="scss" scoped>
   @import "../style/app.scss";
</style>
