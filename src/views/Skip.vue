<template>
  <div>
    <div class="vsus">
      <div class="min">
        <div class="ruler">
          <router-link tag="div" to="/About" class="tab">
            <van-icon name="arrow-left" />
          </router-link>
          <div class="tap">推荐歌单</div>
        </div>
        <div class="star"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Skip',
}
</script>
<style lang="scss">
.vsus {
  width: 100%;
  background: url(../assets/image/01.png);
  background-size: 100%;
  height: 21rem;
  background-repeat: no-repeat;
}
.min {
  background: rgba(0, 0, 0, 0.51);
  width: 100%;
  height: 21rem;
}
.ruler {
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  color: #ffffff;
  font-size: 12px;
  display: flex;
}
.van-icon-arrow-left::before {
  font-size: 2rem;
  color: #ffffff;
  margin-left: 2rem;
  margin-top: 1.4rem;
}
.tap {
  font-size: 2rem;
  margin-left: 10rem;
}
.star {
  color: #000000;
}
</style>