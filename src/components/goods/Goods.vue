<template>
  <div class="container">
    <el-container>
      <el-container>
        <el-aside width="100px">
          <div
            v-for="(item, index) in goods"
            :key="index"
            :class="activeIndex === index ? 'menuItemActive' : 'menuItem'"
            @click="onMenuClick(index)"
          >
            {{ item.name }}
          </div>
        </el-aside>
        <el-main class="foodWrapper">
          <ul>
            <li v-for="good in goods" :key="good.name" class="foodList">
              <h1>{{ good.name }}</h1>
              <ul>
                <li v-for="(food, index) in good.foods" :key="index">
                  <foodItem
                    :food="food"
                    :cartMap="cartMap"
                    :handleAddCart="handleAddCart"
                    :handleRemoveCart="handleRemoveCart"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </el-main>
      </el-container>
      <el-footer
        ><cart
          :cartMap="cartMap"
          :counts="counts"
          :totalPrice="totalPrice"
          :handleAddCart="handleAddCart"
          :handleRemoveCart="handleRemoveCart"
      /></el-footer>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import foodItem from "@/components/foodItem/foodItem";
import cart from "@/components/cart/cart";

export default {
  name: "goods",
  components: {
    cart,
    foodItem,
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
  methods: {
    onMenuClick: function(index) {
      this.activeIndex = index;
    },
    handleAddCart(item) {
      const _map = { ...this.$store.state.cartMap };
      if (!_map[item.name]) _map[item.name] = { ...item, count: 0 };
      _map[item.name].count++;
      this.$store.commit("setCart", {
        cartMap: _map,
      });
    },
    handleRemoveCart(item) {
      const _map = { ...this.$store.state.cartMap };
      _map[item.name].count--;
      if (_map[item.name].count <= 0) delete _map[item.name];
      this.$store.commit("setCart", {
        cartMap: _map,
      });
    },
  },
  created() {
    axios.get("/api/getGoods").then((res) => {
      this.goods = res.data;
    });
  },
  data() {
    return {
      activeIndex: 0,
      goods: [],
    };
  },
};
</script>

<style>
.container .el-container {
  height: 100%;
}
.container .el-container .el-container {
  height: 0;
}
.el-footer {
  padding: 0;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #f4f5f7;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  padding: 0;
}
</style>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  .menuItem {
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    border-left: 0.15rem solid transparent;
  }
  .menuItemActive {
    background: #fff;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    border-left: 0.15rem solid #3190e8;
  }
  .foodWrapper {
    .foodList {
      h1 {
        height: 26px;
        line-height: 26px;
        padding-left: 12px;
        font-size: 12px;
        color: #93999f;
        border-left: 2px solid #d9dde1;
      }
    }
  }
}
</style>
