<template>
  <div id="shou">
    <header id="header">
      <router-link tag="div" to="/About" class="tab">
        <van-icon name="arrow-left" />
      </router-link>
      <div class="tap">推荐榜单</div>
      <router-link tag="div" to="/About" class="tab">
        <van-icon name="more-o" />
      </router-link>
    </header>
    <div>
      <div class="bing">
        <div class="bang">
          <div class="dan">
            <div><img src="../assets/image/17.png" alt=""></div>
            <div class="fa">
              <p>潮耳音乐热歌榜</p>
              <p>
                <van-icon name="clock-o" />
                最近更新：07月30日
              </p>
            </div>
          </div>
          <div class="text">潮耳音乐用户一周内收听所有歌曲官方TOP排行榜，每周四更新</div>
          <router-link tag="div" to="" class="biao">
            <van-icon name="play-circle" />
          </router-link>
        </div>
      </div>
      <div class="bing fei">
        <div class="bang">
          <div class="ting">推荐理由</div>
          <div class="hui">
            <div>作词： {{ci}}</div>
            <div>作曲： {{qu}}</div>
          </div>
        </div>
      </div>
      <div class="bing fei">
        <div class="bang">
          14124
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Recommended',
  data () {
    return {
      ci: '',
      qu: ''
    }
  }
}
</script>
<style lang="scss">
#shou {
  width: 100%;
  background: #fafafa;
}
#header {
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  background: #96bd53;
  color: #ffffff;
  font-size: 12px;
  display: flex;
}
.tap {
  font-size: 2rem;
  margin-left: 10rem;
}
.van-icon-arrow-left::before {
  font-size: 2rem;
  color: #ffffff;
  margin-left: 2rem;
  margin-top: 1.4rem;
}
.van-icon-more-o::before {
  font-size: 2rem;
  color: #ffffff;
  margin-left: 11rem;
  margin-top: 1.4rem;
}
.biao {
  position: relative;
}
.van-icon-play-circle::before {
  position: absolute;
  font-size: 4rem;
  color: #96bd53;
  margin: -2rem 0rem 0rem 30rem;
}
.bing {
  width: 100%;
  background: #ffffff;
  margin-top: -0.6rem;
}
.bang {
  width: 90%;
  margin: 1rem auto;
}
.dan {
  display: flex;
}
.dan div img {
  width: 10rem;
}
.fa {
  margin-left: 1rem;
}
.fa p:nth-child(1) {
  font-size: 1.5rem;
}
.fa p:nth-child(2) {
  font-size: 1.2rem;
  color: #919191;
}
.van-icon-clock-o::before {
  margin-top: 0.2rem;
}
.ting {
  color: #96bd53;
  font-size: 1.5rem;
  padding-top: 1.5rem;
}
.text {
  color: #919191;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  padding-bottom: 1rem;
}
.fei {
  margin-top: 2rem;
}
.hui {
  font-size: 1rem;
  margin-top: 0.5rem;
  color: #9c9c9c;
}
.hui > div {
  margin-top: 0.5rem;
}
</style>