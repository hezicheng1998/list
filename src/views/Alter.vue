<template>
  <div id="shou">
    <div class="header">
      <router-link tag="div" to="/Login" class="ding">
        <div>
          <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
        </div>
        <div class="qingqiu">
          <div>点击登录</div>
          <div>登录后数据不会丢失</div>
        </div>
      </router-link>
    </div>
    <div class="header">
      <ul>
        <router-link tag="li" to="">
          <div>
            <van-icon name="music-o" />
          </div>
          <div>最近播放</div>
          <div>
            <van-icon name="arrow" />
          </div>
        </router-link>
        <router-link tag="li" to="">
          <div>
            <van-icon name="like-o" />
          </div>
          <div>我的收藏</div>
          <div>
            <van-icon name="arrow" />
          </div>
        </router-link>
        <router-link tag="li" to="">
          <div>
            <van-icon name="down" />
          </div>
          <div>离线音乐</div>
          <div>
            <van-icon name="arrow" />
          </div>
        </router-link>
        <router-link tag="li" to="">
          <div>
            <van-icon name="medal-o" />
          </div>
          <div>系统消息</div>
          <div>
            <van-icon name="arrow" />
          </div>
        </router-link>
        <router-link tag="li" to="">
          <div>
            <van-icon name="setting-o" />
          </div>
          <div>系统设置</div>
          <div>
            <van-icon name="arrow" />
          </div>
        </router-link>
        <router-link tag="li" to="">
          <div>
            <van-icon name="comment-circle-o" />
          </div>
          <div>关于我们</div>
          <div>
            <van-icon name="arrow" />
          </div>
        </router-link>
        <router-link tag="li" to="">
          <div>
            <van-icon name="envelop-o" />
          </div>
          <div>意见反馈</div>
          <div>
            <van-icon name="arrow" />
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Alter'
}
</script>
<style lang="scss">
#shou {
  width: 100%;
  background: #fafafa;
}
.header {
  width: 100%;
  background: #ffffff;
}
.ding {
  width: 90%;
  margin: 2rem auto;
  display: flex;
}
.van-icon__image {
  width: 6rem;
  height: 6rem;
  object-fit: contain;
}
.qingqiu {
  margin-left: 1rem;
  margin-top: 0.5rem;
}
.qingqiu div:nth-child(1) {
  font-size: 1.5rem;
  font-weight: bold;
  color: #444444;
}
.qingqiu div:nth-child(2) {
  font-size: 1.4rem;
  margin-top: 0.2rem;
  color: #989898;
}
.header ul {
  width: 90%;
  margin: 0 auto;
  padding-top: 1rem;
}
.header ul li {
  list-style-type: none;
}
.header li {
  display: flex;
  margin-top: 0.5rem;
  color: #9a9a9a;
  line-height: 4rem;
}
.header li div:nth-child(1) {
  font-size: 2rem;
}
.header li div:nth-child(2) {
  margin-left: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
}
.header li div:nth-child(3) {
  font-size: 2rem;
  margin-left: 21rem;
}
</style>
