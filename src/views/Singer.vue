<template>
  <div>
    <header id="header">
      <router-link tag="div" to="/Search" class="tab">
        <van-icon name="arrow-left" />
      </router-link>
      <div class="tap">热门歌手</div>
    </header>
    <div class="city_sort">
      <div>
        <h2>A</h2>
        <ul>
          <li><span><img src="../assets/image/19.png" alt=""></span><span>阿杜</span></li>
          <li><span><img src="../assets/image/20.png" alt=""></span><span>Alan Walker</span></li>
          <li><span><img src="../assets/image/21.png" alt=""></span><span>A-Lin</span></li>
          <li><span><img src="../assets/image/22.png" alt=""></span><span>ANU</span></li>
        </ul>
      </div>
      <div>
        <h2>B</h2>
        <ul>
          <li><span><img src="../assets/image/23.png" alt=""></span><span>伯爵</span></li>
          <li><span><img src="../assets/image/24.png" alt=""></span><span>Big Sean</span></li>
          <li><span><img src="../assets/image/25.png" alt=""></span><span>毕夏</span></li>
          <li><span><img src="../assets/image/26.png" alt=""></span><span>Beyond</span></li>
        </ul>
      </div>
      <div>
        <h2>C</h2>
        <ul>
          <li><span><img src="../assets/image/13.png" alt=""></span><span>陈奕迅</span></li>
          <li><span><img src="../assets/image/27.png" alt=""></span><span>陈鸿宇</span></li>
          <li><span><img src="../assets/image/28.png" alt=""></span><span>陈小春</span></li>
          <li><span><img src="../assets/image/29.png" alt=""></span><span>陈柏宇</span></li>
        </ul>
      </div>
      <div>
        <h2>D</h2>
        <ul>
          <li><span><img src="../assets/image/33.png" alt=""></span><span>Doja Cat</span></li>
          <li><span><img src="../assets/image/31.png" alt=""></span><span>邓丽君</span></li>
          <li><span><img src="../assets/image/32.png" alt=""></span><span>动力火车</span></li>
          <li><span><img src="../assets/image/30.png" alt=""></span><span>刀狼</span></li>
        </ul>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
        <li>G</li>
        <li>H</li>
        <li>J</li>
        <li>K</li>
        <li>L</li>
        <li>M</li>
        <li>N</li>
        <li>P</li>
        <li>Q</li>
        <li>R</li>
        <li>S</li>
        <li>T</li>
        <li>W</li>
        <li>X</li>
        <li>Y</li>
        <li>Z</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Singer',
}
</script>
<style lang="scss">
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
.city_index {
  position: fixed;
  top: 75px;
  top: 20vh;
  right: -9px;
  width: 35px;
  z-index: 10;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
}
.city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_sort ul li {
  line-height: 3rem;
  border-bottom: 1px solid #00000012;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.city_sort ul li span img {
  border-radius: 2rem;
  width: 3rem;
}
.city_sort ul li span:nth-of-type(2) {
  position: absolute;
  margin-left: 2rem;
  margin-top: 0.2rem;
}
</style>
