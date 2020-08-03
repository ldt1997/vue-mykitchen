<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        订单详情
      </div>
      <div class="orderList">
        <ul>
          <li v-for="(food, index) in data.order" :key="index">
            <foodItem :readonly="true" :food="food" :cartMap="data.order" />
          </li>
        </ul>
        <div class="orderTotal">
          <span>小计 </span>
          <span class="number">¥ {{ data.totalPrice }}</span>
        </div>
      </div>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>配送详情 </span>
      </div>
      <div class="content">
        <div class="selectCard">
          <span>下单时间</span>
          <span>{{ data.date }}</span>
        </div>
        <div class="selectCard">
          <span>期望送达时间</span>
          <span>{{ data.mode }}</span>
        </div>
        <div class="selectCard">
          <span>配送地址</span>
          <span>xx区xx路xx号</span>
        </div>
        <div class="selectCard">
          <span>配送服务</span>
          <span><el-tag>蜂鸟转送</el-tag></span>
        </div>
      </div>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>备注 </span>
      </div>
      <div class="selectCard">
        <span>{{ data.remark }}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import foodItem from "@/components/foodItem/foodItem";

export default {
  name: "orderDetail",
  components: {
    foodItem,
  },
  created() {
    const {
      query: { id },
    } = this.$route;
    axios.get(`/api/getOrderDetail/${id}`).then((res) => {
      this.data = res.data;
    });
  },
  data() {
    return {
      data: {},
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;
}
.box-card {
  margin-bottom: 1em;
  .selectCard {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5em;
  }
}
.orderTotal {
  text-align: right;
  margin-top: 20px;
  .number {
    font-size: 1.5em;
  }
}
</style>
