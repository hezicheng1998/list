<template>
  <div id="shou">
    <div id="word">
      <router-link tag="div" to="/About" class="tab">
        <van-icon name="arrow-left" />
      </router-link>
      <div class="tap">推荐榜单</div>
      <router-link tag="div" to="/About" class="tab">
        <van-icon name="more-o" />
      </router-link>
    </div>
    <div class="actor">
      <div class="tu">
        <div class="biao">
          <div> <img src="../assets/image/34.png" alt=""></div>
          <div class="green">听说你也在找好听的话语歌</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/35.png" alt=""></div>
          <div class="green">别整太大鸭力，要多鸡立自己</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/09.png" alt=""></div>
          <div class="green">愿山野浓雾都有路灯风雨漂泊都有归舟</div>
        </div>
      </div>
      <div class="tu">
        <div class="biao">
          <div> <img src="../assets/image/37.png" alt=""></div>
          <div class="green">本人写作业学习歌单</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/38.png" alt=""></div>
          <div class="green">人间忽碗 山河已秋</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/39.png" alt=""></div>
          <div class="green">适合写作业时随机播放的BGM</div>
        </div>
      </div>
      <div class="tu">
        <div class="biao">
          <div> <img src="../assets/image/40.png" alt=""></div>
          <div class="green">[RAP]中文励志说唱-为梦想努力奋斗</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/41.png" alt=""></div>
          <div class="green">跳自闭城的大佬专属BGM</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/42.png" alt=""></div>
          <div class="green">愿你走出半生，归来仍是少年</div>
        </div>
      </div>
      <div class="tu">
        <div class="biao">
          <div> <img src="../assets/image/43.png" alt=""></div>
          <div class="green">与民谣共老吧</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/44.png" alt=""></div>
          <div class="green">神仙翻唱:超级好听的翻唱翻自集鸭</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/45.png" alt=""></div>
          <div class="green">欧阳娜娜VLOG(根据Nabi's vlog微博更新)</div>
        </div>
      </div>
      <div class="tu">
        <div class="biao">
          <div> <img src="../assets/image/46.png" alt=""></div>
          <div class="green">[经典民谣]不止南山南</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/47.png" alt=""></div>
          <div class="green">音乐里的城市记忆(香港)</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/48.png" alt=""></div>
          <div class="green">网抑云(抖音)</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Seeall',
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">
#shou {
  width: 100%;
  background: #fafafa;
}
#word {
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
.van-icon-play-circle::before {
  font-size: 4rem;
  color: #96bd53;
  margin: -2rem 0rem 0rem 30rem;
}
.actor {
  width: 90%;
  margin: 2rem auto;
}
.tu {
  display: flex;
  padding: 0.5rem 0rem 1.5rem 0rem;
}
.biao {
  margin-right: 2rem;
}
.biao img {
  width: 10rem;
}
.green {
  width: 10rem;
  color: #333;
  font-size: 1rem;
  padding-bottom: 2rem;
}
</style>