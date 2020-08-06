<template>
  <div>
    <header id="header">
      <router-link tag="div" to="/Login" class="tab">
        <van-icon name="arrow-left" />
      </router-link>
      <div class="tap">快速注册</div>
    </header>
    <van-cell-group class="group">
      <van-field v-model="tel" type="tel" left-icon="phone-o" placeholder="请输入手机号" />
      <van-field v-model="sms" center clearable left-icon="tosend" placeholder="请输入短信验证码">
        <template #button>
          <van-button size="small" type="primary" class="fasong">发送验证码</van-button>
        </template>
      </van-field>
      <van-field v-model="password" type="password" left-icon="bag-o" placeholder="设置登录密码，不能少于6位" />
    </van-cell-group>
    <div class="ace">
      <van-button type="primary" size="large" @click="register()">注册</van-button>
    </div>
    <div class="checj">
      <div class="check">
        <div>
          <van-checkbox v-model="checked" shape="square" checked-color="#95BC54"></van-checkbox>
        </div>
        <div class="read">我已同意潮耳音乐的<span>《用户授权协议》</span></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
      tel: '',
      sms: '',
      password: '',
      checked: ''
    }
  },
  methods: {
    register () {
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
          path: "/Login"
        });
        alert("注册成功")
      }
    }
  }
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
.fasong {
  background: none;
  color: #a0b168;
  border: none;
}
.check {
  margin-top: 2rem;
  display: flex;
}
.read {
  margin-left: 0.625rem;
  color: #898989;
  font-size: 1.3rem;
}

.read span {
  color: #95bc54;
  margin-left: 0.3125rem;
}
.checj {
  width: 68%;
  margin: 2rem auto;
  text-align: center;
}
</style>
