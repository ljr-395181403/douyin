<template>
  <div class="login">
    <div class="content">
      <van-form @submit="submit">
        <p class="van-ellipsis">欢迎登陆...</p>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="submit">
          <van-button :loading="loading || loading2"  round block type="info" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
    <van-overlay :show="loading || loading2">
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {
  },
  data() {
    return {
      loading: false,
      loading2: false,
      username: '',
      password: '',
    };
  },
  methods: {
    // 提交
    submit() {
      this.loading = true
      this.$api.request({
        url: '/member/login',
        method: 'post',
        data:{
          mobile: this.username,
          password: this.password
        }
      })
      .then((res) => {
        // 设置token
        sessionStorage.setItem('token', res.data.token)
        this.getUserInfo()
      })
      .finally(() => { this.loading = false })
    },
    getUserInfo() {
      this.loading2 = true
      this.$api.request({
        url: '/user/detail',
        method: 'post',
      })
      .then((res) => {
        // 设置userInfo
        sessionStorage.setItem('userInfo', res.data)
        this.$router.push({ path: '/' })
      })
      .finally(() => { this.loading2 = false })
    }
  },
}
</script>

<style scoped>
  .login{
    position: relative;
    width: 100%;
    height: 100%;
    background-position: 0% 0%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(../assets/images/register.png);
  }
  .content{
    position: absolute;
    top: 100px;
    width: 100%;
    height: 100%;
  }
  .van-ellipsis{
    padding-left: 20px;
    padding-bottom: 20px;
    font-size: 18px;
    color: white;
  }
  .content >>> .van-cell{
    background-color: initial;
  }
  .content >>> .van-field__label{
    color: white;
  }
  .content >>> .van-field__control{
    color: white;
  }
  .submit{
    margin: 16px;
    margin-top: 50px;
  }
</style>
