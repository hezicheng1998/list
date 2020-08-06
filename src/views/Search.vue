<template>
  <div>
    <form action="/">
      <van-search v-model="value" show-action placeholder="接单曲/音乐人/专辑名" @search="onSearch" @cancel="onCancel" />
    </form>
    <div>
      <router-link tag="div" to="/Singer " class="yin">
        <van-icon name="manager-o" /><span class="ren">歌手</span>
        <van-icon name="arrow" />
      </router-link>
    </div>
    <div class="re">
      <div class="men">热门搜索</div>
      <div class="ager">
        <div>国王与乞丐</div>
        <div>起风了</div>
        <div>感谢你曾来过</div>
        <div>飘向北方(live)</div>
        <div>浪子回头</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';

export default {
  name: 'Search',
  data () {
    return {
      value: '',
    };
  },
  methods: {
    onSearch (val) {
      Toast(val);
    },
    onCancel () {
      this.$router.push({
        path: "/About"
      });
    },
  },
};
</script>
<style lang="scss">
.van-search {
  background-color: #96bd53;
}
.van-search__action {
  color: #ffffff;
}
.van-search__action:active {
  background: #96bd53;
}
.van-search__content {
  border-radius: 26px;
}
.yin {
  margin-top: 1rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #fafafa;
}
.van-icon-manager-o::before {
  color: #96bd53;
}
.ren {
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  font-size: 1.5rem;
  margin-top: 1.4rem;
}
.van-icon-arrow::before {
  color: #919191;
}
.re {
  width: 90%;
  margin: 2rem auto;
  padding-bottom: 1rem;
  border-bottom: 1px solid #fafafa;
}
.men {
  font-size: 1.6rem;
  color: #aeaeae;
}
.ager {
  margin: 372px;
  margin: 1rem auto;
  display: flex;
}
.ager div {
  color: #9fb575;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  border: 2px solid #9fb575;
  border-radius: 1.5rem;
  margin-right: 0.4rem;
}
</style>