<template>
  <div class="homeCon">
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <div class="listCon">
      <div class="font">附近门店</div>
      <div class="mui-card-header mui-card-media">
        <div class="imgCon">
          <img src="../../lib/images/sjsbn_02.jpg">
          <!-- <div class="font">
            <p>商品零售1</p>
            <p>商品零售2</p>
          </div> -->
        </div>
        <div class="mui-media-body" @click="goList">
          <div class="top">
            <p class="title">三门店</p>
            <p class="juli">87.8km</p>
          </div>
          <p class="bottom">
            松江区
          </p>
        </div>
      </div>
      <div class="mui-card-header mui-card-media">
        <div class="imgCon">
          <img src="../../lib/images/sjsbn_02.jpg">
          <!-- <div class="font">
            <p>商品零售1</p>
            <p>商品零售2</p>
          </div>-->
        </div>
        <div class="mui-media-body" @click="goList">
          <div class="top">
            <p class="title">三门店</p>
            <p class="juli">87.8km</p>
          </div>
          <p class="bottom">
            松江区
          </p>
        </div>
      </div>
      <div class="mui-card-header mui-card-media">
        <div class="imgCon">
          <img src="../../lib/images/sjsbn_02.jpg">
          <!-- <div class="font">
            <p>商品零售1</p>
            <p>商品零售2</p>
          </div>-->
        </div>
        <div class="mui-media-body" @click="goList">
          <div class="top">
            <p class="title">三门店</p>
            <p class="juli">87.8km</p>
          </div>
          <p class="bottom">
            松江区
          </p>
        </div>
      </div>
      <div class="mui-card-header mui-card-media">
        <div class="imgCon">
          <img src="../../lib/images/sjsbn_02.jpg">
          <!-- <div class="font">
            <p>商品零售1</p>
            <p>商品零售2</p>
          </div>-->
        </div>
        <div class="mui-media-body" @click="goList">
          <div class="top">
            <p class="title">三门店</p>
            <p class="juli">87.8km</p>
          </div>
          <p class="bottom">
            松江区
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotuList: [] // 保存轮播图的数组
    };
  },
  created() {
    // this.getLunbotu();
  },
  methods: {
    goList() {
      this.$router.push({ name: "list" });
    }
  }
  // components: {
  //   swiper
  // }
};
</script>

<style lang="scss" scoped>
.homeCon {
  width: 100%;
  // height: 100%;
  box-sizing: border-box;
  padding: 0 8px;
  // box-sizing: border-box;
}
.mint-swipe {
  height: 200px;
  // margin-bottom: 20px;
  .mint-swipe-item {
    &:nth-child(1) {
      background: red;
    }
    &:nth-child(2) {
      background: yellow;
    }
    &:nth-child(3) {
      background: cadetblue;
    }
  }
}
.mui-card-media {
  background: white;
  border-bottom: none;
}
.listCon {
  padding: 0;
  margin: 0;
  .font {
    font-weight: 600;
  }
  .mui-card-header {
    display: flex;
    border-bottom: none;
    padding: 0;
    .imgCon {
      width: 100px;
      // height: 100px;
      padding: 10px;
      box-sizing: border-box;
      img {
        display: block;
        width: 80px;
        height: 80px;
      }
      .font {
        display: flex;

        p {
          color: lightblue;
          white-space: nowrap;
          margin: 0;
          padding: 0;
          padding-right: 5px;
        }
      }
    }
    .mui-media-body {
      flex: 3;
      margin-left: 0px;
      height: 80px;
      padding-right: 10px;
      box-sizing: border-box;
      .top {
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
        .title {
          color: black;
        }
        .juli {
          color: blue;
        }
      }
      .bottom {
      }
    }
  }
  // margin-top: 10px;
  padding: 0px 10px;
  // padding-top: 10px;
  background: white;
  border-radius: 8px;
  box-sizing: border-box;
}
</style>
