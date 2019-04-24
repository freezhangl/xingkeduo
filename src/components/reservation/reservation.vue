<template>
  <div class="con">
    <div class="mui-card listCon3">
      <!--页眉，放置标题-->
      <div class="mui-card-header">
        <p>选择发型师</p>
        <p>选择您最喜欢的发型师为您服务</p>
      </div>
      <!--内容区-->
      <div class="mui-card-header mui-card-media">
        <div class="imgCon">
          <img src="../../lib/images/sjsbn_02.jpg">
          <div class="font">
            <p>今日休息</p>
          </div>
        </div>
        <div class="mui-media-body">
          <div class="top">
            <p class="title">汪静</p>
            <p>$233.2</p>
            <p class="juli">$31</p>
          </div>
          <div class="bottom">
            <div class="left">
              <p class="bottom">低峰时段会有优惠奥!</p>
              <p class="bottom">最早可约13:23</p>
            </div>
            <div class="right">
              <mt-button type="primary" size="small">立即预约</mt-button>
            </div>
          </div>
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
  created() {},
  methods: {},
  components: {}
};
</script>

<style lang="scss">
.con {
  padding: 8px;
  .listCon3 {
    border-radius: 8px;
    margin: 0;
    .mui-card-header {
      display: block;
      padding: 8px;
      p {
        margin: 0;
        &:nth-child(1) {
          color: black;
          font-size: 14px;
        }
        &:nth-child(2) {
        }
      }
      // flex-direction: column;
    }
    .mui-card-media {
      display: flex;
      border-bottom: none;
      padding: 8px;
      // flex-direction: column;
      .imgCon {
        width: 100px;
        // height: 100px;
        padding: 10px;
        box-sizing: border-box;
        text-align: center;
        img {
          display: block;
          width: 80px;
          height: 80px;
        }
        .font {
          text-align: center;
          position: relative;
          p {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 3px;

            // color: lightblue;
            white-space: nowrap;
            margin: 0;
            padding: 0;
            // padding-right: 5px;
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
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
