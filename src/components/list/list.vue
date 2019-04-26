<template>
  <div class="con">
    <div class="listCon">
      <div class="mui-card-header mui-card-media">
        <div class="imgCon">
          <img src="../../lib/images/anli1.jpg">
          <!-- <div class="font">
            <p>商品零售1</p>
            <p>商品零售2</p>
          </div> -->
        </div>
        <div class="mui-media-body">
          <div class="top">
            <p class="title">三门店</p>
            <p class="juli">前往门店</p>
          </div>
          <div class="center">
            <p class="time">营业时间 09:30-21:30</p>
            <p class="juli">72.4km</p>
          </div>
          <p class="bottom">松江区</p>
        </div>
      </div>
    </div>
    <div class="imgCon">
      <img src="../../lib/images/tooopen_sy_179583447187.jpg" alt>
    </div>
    <div class="mui-card listCon2">
      <!--页眉，放置标题-->
      <div class="mui-card-header">请选择服务</div>
      <!--内容区-->
      <div class="mui-card-content" @click="goreservation">
        <div class="left">
          <p>单人剪头发</p>
          <p>不推销, 不办卡, 纯剪发</p>
        </div>
        <div class="right" >
          <span>$39.8</span>
          <span class="mui-icon mui-icon-arrowright"></span>
        </div>
      </div>
      <div class="mui-card-content" @click="goreservation">
        <div class="left">
          <p>单人剪头发</p>
          <p>不推销, 不办卡, 纯剪发</p>
        </div>
        <div class="right" >
          <span>$39.8</span>
          <span class="mui-icon mui-icon-arrowright"></span>
        </div>
      </div>
      <div class="mui-card-content" @click="goreservation">
        <div class="left">
          <p>单人剪头发</p>
          <p>不推销, 不办卡, 纯剪发</p>
        </div>
        <div class="right" >
          <span>$39.8</span>
          <span class="mui-icon mui-icon-arrowright"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goreservation() {
      this.$router.push({ name: "reservation" });
    }
  }
};
</script>

<style lang="scss" scoped>
.con {
  p {
    margin: 0;
  }
  padding: 0 10px;
  .listCon {
    padding: 0;
    margin: 0;
    margin-top: 0;
    padding-top: 0 !important;
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
        box-sizing: border-box;
        padding-right: 10px;
        .top {
          display: flex;
          justify-content: space-between;
          padding-bottom: 5px;
          .title {
            color: black;
          }
          .juli {
            color: blue;
          }
        }
        .center {
          display: flex;
          // align-content: space-between;
          justify-content: space-between;
          margin-bottom: 5px;
          .time {
          }
          .juli {
          }
        }
        .bottom {
        }
      }
    }
    margin-top: 10px;
    padding: 0px 10px;
    padding-top: 10px;
    background: white;
    border-radius: 8px;
  }
  .listCon2 {
    margin: 0;
    border-radius: 8px;
    .mui-card-header {
      padding: 0 10px;
    }
    .mui-card-content {
      padding: 10px 10px;
      display: flex;
      justify-content: space-between;
      align-content: center;
      .left {
        p:nth-child(1) {
          color: black;
        }
        p:nth-child(2) {
          font-size: 12px;
        }
        flex: 1;
        display: flex;
        flex-direction: column;
        align-content: center;
        color: black;
      }
      .right {
        width: 65px;
        height: 100%;
        line-height: 42px;
        span:nth-child(1) {
          color: blue;
        }
      }
    }
  }
  > .imgCon {
    img {
      display: block;
      width: 100%;
      height: 100px;
      margin: 10px 0;
    }
  }
}
</style>
