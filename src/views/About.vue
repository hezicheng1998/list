<template>
  <div id="shou">
    <div class="box">
      <router-link tag="input" to="/Search" placeholder="接单曲/音乐人/专辑名"></router-link>
    </div>
    <div class="bai">
      <router-link tag="div" to="" class="qie">
        <van-icon name="music-o" />
        猜你喜欢
      </router-link>
      <router-link tag="div" to="/Recommended" class="qie2">
        <van-icon name="fire-o" />
        推荐榜单
      </router-link>
    </div>
    <div class="ke">
      <div class="tui">
        <router-link tag="div" to="" class="zi">
          <span class="lu"></span>
          推荐歌单
        </router-link>
        <router-link tag="div" to="/Seeall" class="cheng">
          查看全部
          <van-icon name="play-circle-o" />
        </router-link>
      </div>
      <div class="tu">
        <div class="biao">
          <router-link tag="div" to="/Skip"><img src="../assets/image/01.png" alt=""></router-link>
          <div class="green">舒缓小调 | 心怀感恩，所遇皆温柔</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/02.png" alt=""></div>
          <div class="green">很潮很土很嗨很低調还盗版</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/03.png" alt=""></div>
          <div class="green">伤感片段:夜和你都在熬我</div>
        </div>
      </div>
    </div>
    <div class="ke">
      <div class="tui">
        <router-link tag="div" to="" class="zi">
          <span class="lu"></span>
          最新音乐
        </router-link>
        <router-link tag="div" to="/Music" class="cheng">
          查看全部
          <van-icon name="play-circle-o" />
        </router-link>
      </div>
      <div class="tu">
        <div class="biao">
          <div> <img src="../assets/image/04.png" alt=""></div>
          <div class="pes">MAPOFTHESOUL </div>
          <div class="pes">BTS (防弹少年团)</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/05.png" alt=""></div>
          <div class="pes">STRAY SHEEP</div>
          <div class="pes">米津玄師</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/06.png" alt=""></div>
          <div class="pes">麻雀 </div>
          <div class="pes">李荣浩</div>
        </div>
      </div>
      <div class="tu">
        <div class="biao">
          <div> <img src="../assets/image/10.png" alt=""></div>
          <div class="pes">IN THE SUMMER</div>
          <div class="pes">嵐</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/08.png" alt=""></div>
          <div class="pes">先知 </div>
          <div class="pes">田馥甄</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/09.png" alt=""></div>
          <div class="pes">folklore </div>
          <div class="pes">Taylor Swift</div>
        </div>
      </div>
    </div>
    <div class="ke">
      <div class="tui">
        <router-link tag="div" to="" class="zi">
          <span class="lu"></span>
          推荐歌手
        </router-link>
        <router-link tag="div" to="/Singer" class="cheng">
          查看全部
          <van-icon name="play-circle-o" />
        </router-link>
      </div>
      <div class="tu">
        <div class="biao">
          <div> <img src="../assets/image/11.png" alt=""></div>
          <div class="green">李荣浩</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/12.png" alt=""></div>
          <div class="green">薛之谦</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/13.png" alt=""></div>
          <div class="green">陈奕迅</div>
        </div>
      </div>
      <div class="tu">
        <div class="biao">
          <div> <img src="../assets/image/14.png" alt=""></div>
          <div class="green">隔壁老樊</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/15.png" alt=""></div>
          <div class="green">华晨宇</div>
        </div>
        <div class="biao">
          <div> <img src="../assets/image/16.png" alt=""></div>
          <div class="green">G.E.M.邓紫棋</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About'
}
</script>
<style lang="scss">
#shou {
  width: 100%;
  background: #fafafa;
}
.box {
  width: 100%;
  background: url(../assets/img/01.png);
  background-size: 100%;
  height: 21rem;
}
.box input {
  width: 20rem;
  height: 2rem;
  border-radius: 1rem;
  background: rgba(198, 191, 191, 0.62);
  margin-top: 2rem;
  margin-left: 22%;
  color: #ffffff;
  text-align: center;
  border: none;
}
.bai {
  margin-top: 2rem;
  display: flex;
}
.qie {
  background: #f97455;
  width: 14rem;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 0.8rem;
  margin-left: 12%;
}
.qie2 {
  background: #96bd53;
  width: 14rem;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 0.8rem;
  margin-left: 2%;
}
.ke {
  width: 90%;
  margin: 2rem auto;
}
.tui {
  display: flex;
}
.zi {
  color: #424242;
  font-size: 1.8rem;
  font-weight: bold;
}
.lu {
  width: 0.2rem;
  height: 0.8rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  background: #96bd53;
  border: 2px solid #96bd53;
}
.cheng {
  margin-left: 45%;
  color: #969696;
  font-size: 1.8rem;
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
.pes {
  width: 10rem;
  font-size: 1rem;
  overflow-y: hidden;
}
</style>
