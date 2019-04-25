<template>
  <div class="order-con">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">等待服务</mt-tab-item>
      <mt-tab-item id="3">待评价</mt-tab-item>
      <mt-tab-item id="4">已完成</mt-tab-item>
      <mt-tab-item id="5">已退款</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="mui-card">
          <!--内容区-->
          <div class="mui-card-content">暂无订单1</div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <!-- <mt-cell v-for="n in 4" :title="'测试 ' + n"/> -->
        <div class="mui-card">
          <!--内容区-->
          <div class="mui-card-content">暂无订单2</div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <!-- <mt-cell v-for="n in 6" :title="'选项 ' + n"/> -->
        我是内容3
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <!-- <mt-cell v-for="n in 6" :title="'选项 ' + n"/> -->
        我是内容4
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        <!-- <mt-cell v-for="n in 6" :title="'选项 ' + n"/> -->
        我是内容5
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { Toast, Navbar, TabItem } from "mint-ui";
export default {
  data: function() {
    return {
      selected: "1"
    };
  },
  methods: {},
  created() {
    // Toast({
    //   message: "提示",
    //   position: "bottom",
    //   duration: 1000
    // });
  }
};
</script>

<style lang="scss" scoped>
.mint-navbar .mint-tab-item.is-selected {
  color: #26a2ff;
  margin-bottom: -3px;
  border-bottom: 0px solid #26a2ff;
}
a {
  color: black;
}
.mui-card {
  font-size: 14px;
  position: relative;
  overflow: hidden;
  margin: 10px;
  border-radius: 2px;
  height: 200px;
  background-color: #fff;
  background-clip: padding-box;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
