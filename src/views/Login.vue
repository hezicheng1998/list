<template>
  <div class="heder">
    <router-link tag="div" to="/Alter">
      <van-icon name="arrow-left" />
    </router-link>
    <div class="yuan">
      <div><img src="../assets/image/18.png" alt=""></div>
      <div>听草原用潮耳</div>
    </div>
    <van-cell-group class="group">
      <van-field v-model="tel" type="tel" left-icon="phone-o" placeholder="请输入手机号" />
      <van-field v-model="password" type="password" left-icon="bag-o" placeholder="请输入密码" />
    </van-cell-group>
    <div class="ace">
      <van-button type="primary" size="large" @click="login">登录</van-button>
    </div>
    <div class="reg">
      <router-link tag="div" to="/Register">快速注册</router-link>
      <router-link tag="div" to="">找回密码</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      tel: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.tel == "") {
        alert("账号不能为空")
      } else if (!(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.tel))) {
        alert("手机号格式不正确")
      } else if (this.password == "") {
        alert("密码不能为空")
      } else if (this.password.length < 6 || this.password.length > 16) {
        alert("密码不正确")
      } else {
        this.$router.push({
          path: "/About"
        });
        alert("登录成功")
      }
    }
  }
}
</script>
<style lang="scss">
.heder {
  width: 90%;
  margin: 2rem auto;
}
.van-icon-arrow-left::before {
  color: #9e9e9e;
  font-size: 2rem;
  font-weight: bold;
}
.yuan {
  text-align: center;
  margin-top: 2rem;
}
.yuan div:nth-child(2) {
  color: #474747;
  font-size: 1.5rem;
  font-weight: bold;
}
.group {
  margin-top: 3rem;
}
.van-field__left-icon .van-icon,
.van-field__right-icon .van-icon {
  color: #a0b168;
  font-size: 1rem;
  font-weight: bold;
}
.van-field__control {
  color: #a3a3a3;
  margin-left: 2rem;
}
.van-button--primary {
  background: #bebebe;
  border: 1px solid #bebebe;
  border-radius: 0.5rem;
}
.ace {
  margin-top: 2rem;
}
.reg {
  color: #aec97b;
  font-size: 1.5rem;
  margin-top: 1rem;
  display: flex;
}
.reg div:nth-child(2) {
  margin-left: 21rem;
}
</style>
