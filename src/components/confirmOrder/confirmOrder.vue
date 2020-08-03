<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>我家厨房【官方直营】</span>
      </div>
      <div @click="selectTimeVisible = true" class="selectCard">
        <span>{{ mode }}</span>
        <i class="el-icon-arrow-right" />
      </div>
    </el-card>

    <el-card class="box-card">
      <div class="orderList">
        <ul>
          <li v-for="(food, index) in cartMap" :key="index">
            <foodItem :readonly="true" :food="food" :cartMap="cartMap" />
          </li>
        </ul>
        <div class="orderTotal">
          <span>小计 </span>
          <span class="number">¥ {{ totalPrice }}</span>
        </div>
      </div>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>发票抬头</span>
      </div>
      <div @click="remarkVisible = true" class="selectCard">
        <span>填写备注</span>
        <i class="el-icon-arrow-right" />
      </div>
    </el-card>

    <footer class="footer">
      <div class="left">待支付 ¥ {{ totalPrice }}</div>
      <div class="right" @click="handleConfirm">
        {{ loading ? "提交中..." : "确认下单" }}
      </div>
    </footer>

    <el-drawer
      :visible.sync="selectTimeVisible"
      direction="btt"
      :with-header="false"
      :show-close="false"
      size="15%"
    >
      <div class="drawer-content">
        <el-radio v-model="mode" label="立即送出">立即送出</el-radio>
        <el-radio v-model="mode" label="晚点送出">晚点送出</el-radio>
      </div>
    </el-drawer>

    <el-drawer
      title="填写备注"
      :visible.sync="remarkVisible"
      direction="btt"
      :show-close="false"
      size="25%"
    >
      <div class="drawer-content">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="remark"
        >
        </el-input>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import axios from "axios";
import foodItem from "@/components/foodItem/foodItem";

export default {
  name: "confirmOrder",
  props: {},
  components: {
    foodItem,
  },
  methods: {
    handleConfirm() {
      if (this.loading) return;
      this.loading = true;
      const params = {
        order: this.cartMap,
        mode: this.mode,
        remark: this.remark,
        totalPrice: this.totalPrice,
        date: new Date(),
      };
      axios.post("/api/submitOrder", params).then((res) => {
        this.loading = false;
        if (res.data.code === "200") {
          this.$store.commit("setCart", {
            cartMap: {},
          });
          this.$router.push({
            path: "order/detail",
            query: { id: res.data.data.id },
          });
        }
      });
    },
  },
  computed: {
    cartMap() {
      return this.$store.state.cartMap;
    },
    counts() {
      return this.$store.getters.counts;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
  },
  data() {
    return {
      loading: false,
      selectTimeVisible: false,
      remarkVisible: false,
      mode: "立即送出",
      remark: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  background-color: #f5f5f5;
  margin-bottom: 60px;
  width: 100%;
}
.box-card {
  margin-bottom: 1em;
  .selectCard {
    display: flex;
    justify-content: space-between;
  }
}
.orderTotal {
  text-align: right;
  margin-top: 20px;
  .number {
    font-size: 1.5em;
  }
}
.drawer-content {
  padding: 1em;
}
.footer {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
  align-items: center;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  background: #222a34;
  .right {
    background: #66b1ff;
    text-align: center;
    width: 30%;
  }
  .left {
    padding-left: 1em;
  }
}
</style>
