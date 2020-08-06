<template>
  <div id="shou">
    <div id="word">
      <router-link tag="div" to="/About" class="tab">
        <van-icon name="arrow-left" />
      </router-link>
      <div class="tap">推荐音乐</div>
      <router-link tag="div" to="/About" class="tab">
        <van-icon name="more-o" />
      </router-link>
    </div>
    <div class="actor">
      <ul>
        <li>
          <div>
            <img src="../assets/image/04.png" alt="">
          </div>
          <div class="hzc">
            <div>MAP OF THE SOUL</div>
            <div>BTS (防弹少年团)</div>
          </div>
          <div>
            <van-icon name="like-o" />
            <van-icon name="down" />
          </div>
        </li>
        <li>
          <div>
            <img src="../assets/image/05.png" alt="">
          </div>
          <div class="hzc">
            <div>STRAY SHEEP</div>
            <div>米津玄師</div>
          </div>
          <div>
            <van-icon name="like-o" />
            <van-icon name="down" />
          </div>
        </li>
        <li>
          <div>
            <img src="../assets/image/06.png" alt="">
          </div>
          <div class="hzc">
            <div>麻雀</div>
            <div>李荣浩</div>
          </div>
          <div>
            <van-icon name="like-o" />
            <van-icon name="down" />
          </div>
        </li>
        <li>
          <div>
            <img src="../assets/image/10.png" alt="">
          </div>
          <div class="hzc">
            <div>IN THE SUMMER</div>
            <div>嵐</div>
          </div>
          <div>
            <van-icon name="like-o" />
            <van-icon name="down" />
          </div>
        </li>
        <li>
          <div>
            <img src="../assets/image/08.png" alt="">
          </div>
          <div class="hzc">
            <div>先知</div>
            <div>田馥甄</div>
          </div>
          <div>
            <van-icon name="like-o" />
            <van-icon name="down" />
          </div>
        </li>
        <li>
          <div>
            <img src="../assets/image/09.png" alt="">
          </div>
          <div class="hzc">
            <div>folklore</div>
            <div>Taylor Swift</div>
          </div>
          <div>
            <van-icon name="like-o" />
            <van-icon name="down" />
          </div>
        </li>
        <li>
          <div>
            <img src="../assets/image/07.png" alt="">
          </div>
          <div class="hzc">
            <div>致我们终将逝去的青春</div>
            <div>张靓颖</div>
          </div>
          <div>
            <van-icon name="like-o" />
            <van-icon name="down" />
          </div>
        </li>
        <li>
          <div>
            <img src="../assets/image/50.png" alt="">
          </div>
          <div class="hzc">
            <div>世界上不存在的歌 (2020重唱版)</div>
            <div>陈奕迅</div>
          </div>
          <div>
            <van-icon name="like-o" />
            <van-icon name="down" />
          </div>
        </li>
        <li>
          <div>
            <img src="../assets/image/51.png" alt="">
          </div>
          <div class="hzc">
            <div>Rager teenager!</div>
            <div>Troye Sivan</div>
          </div>
          <div>
            <van-icon name="like-o" />
            <van-icon name="down" />
          </div>
        </li>
        <li>
          <div>
            <img src="../assets/image/52.png" alt="">
          </div>
          <div class="hzc">
            <div>SWEET TIME</div>
            <div>원소윤</div>
          </div>
          <div>
            <van-icon name="like-o" />
            <van-icon name="down" />
          </div>
        </li>
        <li>
          <div>
            <img src="../assets/image/53.png" alt="">
          </div>
          <div class="hzc">
            <div>我曾</div>
            <div>隔壁老樊</div>
          </div>
          <div>
            <van-icon name="like-o" />
            <van-icon name="down" />
          </div>
        </li>
        <li>
          <div>
            <img src="../assets/image/54.png" alt="">
          </div>
          <div class="hzc">
            <div>昨日青空</div>
            <div>尤长靖</div>
          </div>
          <div>
            <van-icon name="like-o" />
            <van-icon name="down" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Music',
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
.actor ul li {
  list-style-type: none;
  display: flex;
  width: 100%;
  line-height: 2.3rem;
  border-bottom: 1px solid #0000000f;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.actor ul li div img {
  width: 5rem;
  border-radius: 0.6rem;
}
.actor ul li .hzc {
  width: 60%;
  margin-left: 1rem;
}
.actor ul li .hzc div:nth-child(2) {
  color: #9a9a9a;
}
.actor ul li div:nth-child(3) {
  width: 30%;
  text-align: end;
  color: #96bd53;
  font-size: 2rem;
}
.actor ul li div:nth-child(3) i {
  margin-left: 1rem;
  margin-top: 1rem;
}
</style>