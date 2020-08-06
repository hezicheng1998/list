<template>
  <div>
    <router-view></router-view>
    <div id="footer">
      <ul>
        <router-link tag="li" to="/about">
          <van-icon name="wap-home" />
          <p>首页</p>
        </router-link>
        <router-link tag="li" to="/home">
          <van-icon name="audio" />
          <p>播放</p>
        </router-link>
        <router-link tag="li" to="/alter">
          <van-icon name="manager" />
          <p>我的</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
#footer {
  width: 100%;
  height: 50px;
  background: white;
  border-top: 2px solid #ebe8e3;
  position: fixed;
  left: 0;
  bottom: 0;
}
#footer ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
#footer ul li {
  flex: 1;
  height: 40px;
}
#footer li.active {
  color: #97bb55;
}
#footer li.router-link-active {
  color: #97bb55;
}
#footer ul i {
  font-size: 20px;
}
#footer ul p {
  font-size: 12px;
  line-height: 4px;
}
</style>
