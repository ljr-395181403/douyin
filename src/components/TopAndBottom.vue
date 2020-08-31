<template>
  <div class="no-TopAndBottom">
    <!-- 上部分 -->
    <header class="no-Header">
      {{title}}
    </header>
    <!-- 下部分 -->
    <footer class="no-footer van-hairline--top">
      <div :class="{ color: activeRoute=='Home' }" @click="changeRouter('Home')">
        <p class="no-oneP">
          <van-icon class="no-i" name="wap-home-o" size="22" />
        </p>
        <p class="no-twoP">首页</p>
      </div>
      <div :class="{ color: activeRoute=='Task' }" @click="changeRouter('Task')">
        <p class="no-oneP">
          <van-icon class="no-i" name="coupon-o" size="22" />
        </p>
        <p class="no-twoP">任务中心</p>
      </div>
      <div :class="{ color: activeRoute=='Issue' }" @click="changeRouter('Issue')">
        <p class="no-oneP">
          <van-icon class="no-i" name="edit" size="22" />
        </p>
        <p class="no-twoP">发布任务</p>
      </div>
      <div :class="{ color: activeRoute=='Received' }" @click="changeRouter('Received')">
        <p class="no-oneP">
          <van-icon class="no-i" name="balance-list-o" size="22" />
        </p>
        <p class="no-twoP">已接任务</p>
      </div>
      <div :class="{ color: activeRoute=='Student' }" @click="changeRouter('Student')">
        <p class="no-oneP">
          <van-icon class="no-i" name="user-o" size="22" />
        </p>
        <p class="no-twoP">学员中心</p>
      </div>
    </footer>
    <div>
      <transition :name="transitionName">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopAndBottom',
  data() {
    return {
      transitionName: 'left',
      title:'',
      activeRoute:'',
    }
  },
  methods: {
    // 改变路由
    changeRouter(name) {
      if(this.$route.name != name){
        this.$router.push({ name: name })
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.title = to.meta.title || ''
      vm.activeRoute = to.name || ''
      
    })
  }
}
</script>


<style scoped>
  .no-TopAndBottom{
    padding-top: 46px;
    padding-bottom: 51px;
  }
  .no-Header{
    position: fixed;
    width: 100%;
    height: 46px;
    line-height: 46px;
    top: 0;
    left: 0;
    text-align: center;
    background: linear-gradient(133deg,#830bff,#ff41fb);
  }
  .no-footer{
    position: fixed;
    width: 100%;
    height: 50px;
    line-height: 50px;
    bottom: 0;
    left: 0;
    text-align: center;
    background: white;
  }
  .no-footer > div {
    float: left;
    width: 20%;
  }
  .no-oneP {
    height: 30px;
    line-height: 30px;
  }
  .no-i{
    margin-top: 6px;
  }
  .no-twoP{
    height: 20px;
    line-height: 20px;
    font-size: 12px;
  }
  .color{
    color: rgb(253, 64, 251);
  }
</style>
