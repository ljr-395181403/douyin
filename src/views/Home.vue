<template>
  <div class="home">
    <!-- 轮播图 -->
    <div class="boxheader">
      <div class="boxheaderBackground"></div>
      <div class="swipeBox">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img class="swipeImg" src="@/assets/images/home/banner1.png" />
          </van-swipe-item>
          <van-swipe-item>
            <img class="swipeImg" src="@/assets/images/home/banner2.png" />
          </van-swipe-item>
          <van-swipe-item>
            <img class="swipeImg" src="@/assets/images/home/banner3.png" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <!-- 广告1 -->
    <div class="tbs-content">
      <p class="tbs-title">
        <span class="common-box">淘客联盟</span>
      </p>
      <div class="tbs-box">
        <div class="tbs-small-box">
          <ul class="iconList fn-clear">
            <li>
              <p class="oneP">
                <img class="iconListImg" src="@/assets/images/home/t1.png" />
              </p>
              <p class="twoP">
                淘宝网
              </p>
            </li>
            <li>
              <p class="oneP">
                <img class="iconListImg" src="@/assets/images/home/t2.png" />
              </p>
              <p class="twoP">
                天猫商城
              </p>
            </li>
            <li>
              <p class="oneP">
                <img class="iconListImg" src="@/assets/images/home/t3.png" />
              </p>
              <p class="twoP">
                京东购物
              </p>
            </li>
            <li>
              <p class="oneP">
                <img class="iconListImg" src="@/assets/images/home/t4.png" />
              </p>
              <p class="twoP">
                拼多多
              </p>
            </li>
            <li>
              <p class="oneP">
                <img class="iconListImg" src="@/assets/images/home/t5.png" />
              </p>
              <p class="twoP">
                饿了么
              </p>
            </li>
            <li>
              <p class="oneP">
                <img class="iconListImg" src="@/assets/images/home/t6.png" />
              </p>
              <p class="twoP">
                飞猪网
              </p>
            </li>
            <li>
              <p class="oneP">
                <img class="iconListImg" src="@/assets/images/home/t7.png" />
              </p>
              <p class="twoP">
                9.9包邮
              </p>
            </li>
            <li>
              <p class="oneP">
                <img class="iconListImg" src="@/assets/images/home/t8.png" />
              </p>
              <p class="twoP">
                品牌折扣
              </p>
            </li>
            <li>
              <p class="oneP">
                <img class="iconListImg" src="@/assets/images/home/t9.png" />
              </p>
              <p class="twoP">
                每日半价
              </p>
            </li>
            <li>
              <p class="oneP">
                <img class="iconListImg" src="@/assets/images/home/t10.png" />
              </p>
              <p class="twoP">
                今日特卖
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
  /* 广告盒子 */
  .tbs-content{
    width: 100%;
    box-sizing: border-box;
    margin-top: 8px;
  }
  .tbs-title{
    padding: 8px;
  }
  .common-box{
    display: inline-block;
    width: 68px;
    height: 21px;
    line-height: 21px;
    text-align: center;
    background-color: #d42af2;
    border-radius: 100px 4px 100px 4px;
    font-size: 12px;
    color: white;
  }
  .tbs-box{
    background: #F4F4F4;
    padding: 8px;
  }
  .tbs-small-box{
    background-color: #fff;
    border-radius: 4px;
  }

  .iconList li{
    float: left;
    width: 20%;
    padding: 5px 0;
  }
  .oneP{
    height: 35px;
    line-height: 35px;
    text-align: center;
  }
  .oneP img{
    width: 35px;
    height: 35px;
  }
  .twoP{
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
  }



  /* 头部盒子 */
  .boxheader{
    position: relative;
    width: 100%;
    height:110px;
  }
  .boxheaderBackground{
    width: 100%;
    height: 85px;
    position: relative;
    background: linear-gradient(74deg,#830bff,#ff41fb);
    border-radius: 0 0 42px 42px
  }

  /* 轮播容器 */
  .swipeBox{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110px;
    padding: 0 8px;
    box-sizing: border-box;
  }
  .my-swipe{
    width: 100%;
    height: 100%;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    line-height: 110px;
    text-align: center;
  }
  .swipeImg{
    width: 100%;
    height: 110px;
  }
</style>
