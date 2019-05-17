<template>
  <div class="myCon">
    <div class="top">
      <div class="infoTop">
        <div class="imgCon">
          <img src="../../lib/images/sjsbn_02.jpg" alt>
        </div>
        <div class="font">
          <p>freeZhangL</p>
          <p>您还未享受过小星星的服务奥~</p>
        </div>
      </div>
      <div class="infoBottom">
        <div class="mui-card">
          <div class="mui-card-content">
            <div>
              <span class="mui-icon mui-icon-compose"></span>
              <p>历史评价</p>
            </div>
            <div>
              <span class="mui-icon mui-icon-compose"></span>
              <p>优惠券</p>
            </div>
            <div>
              <span class="mui-icon mui-icon-compose"></span>
              <p>专享卡</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="mui-card">
        <div class="mui-card-content">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                <span class="glyphicon glyphicon-euro"></span>
                预约服务
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right right">
                <span class="glyphicon glyphicon-earphone"></span>
                <span>绑定手机号</span>
                <span>未绑定</span>
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                <span class="glyphicon glyphicon-cog"></span>
                个人设置
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right right">
                <span class="glyphicon glyphicon-compressed"></span>
                <span>投诉建议</span>
                <span>400-234-2332</span>
              </a>
            </li>
            <li class="mui-table-view-cell" @click="go">
              <a class="mui-navigate-right">
                <!-- <span class="icon-crying2"></span> -->
                <span class="glyphicon glyphicon-user"></span>
                关于预约服务
              </a>
            </li>
          </ul>
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
    go: function() {
      this.$router.push({ name: "reservation" });
    }
  }
};
</script>

<style lang="scss" scoped>
.myCon {
  .top {
    .infoTop {
      height: 120px;
      background: lightblue;
      border-radius: 5px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      .imgCon {
        width: 62px;
        height: 62px;
        img {
          border-radius: 50%;
          width: 62px;
          height: 62px;
          display: block;
        }
      }
      .font {
        box-sizing: border-box;
        flex: 1;
        padding-left: 20px;
        p {
          &:nth-child(1) {
            color: black;
            font-size: 16px;
          }
          &:nth-child(2) {
            font-size: 14px;
          }
        }
      }
    }
    .infoBottom {
      margin-top: -25px;
      .mui-card {
        .mui-card-content {
          display: flex;
          justify-content: space-around;
          text-align: center;
          align-content: center;
          padding: 10px 0;
          div {
            p {
              margin: 0;
            }
          }
        }
      }
    }
  }
  .bottom {
    .mui-table-view-cell {
      .right {
        // display: flex;
        // justify-content: space-between;
        span {
          &:last-child {
            float: right;
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>
