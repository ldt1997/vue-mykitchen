<template>
  <div class="container">
    <div class="cart" @click="visible = !visible">
      <div class="left">
        <div class="logo-wrapper">
          <div class="badge" v-show="counts">{{ counts }}</div>
          <i class="el-icon-shopping-cart-full" />
        </div>
      </div>
      <div class="middle">
        <h3>¥ {{ totalPrice }}</h3>
      </div>
      <div
        :class="counts > 0 ? 'right' : 'disabled-right'"
        @click="toConfirmOrder"
      >
        去结算
      </div>
    </div>
    <section class="drawer-wrapper" v-show="visible">
      <div class="header">
        <h4>购物车</h4>
        <el-button type="text" icon="el-icon-delete" @click="handleClearCart"
          >清空</el-button
        >
      </div>
      <ul>
        <li v-for="(food, index) in cartMap" :key="index">
          <foodItem
            :food="food"
            :cartMap="cartMap"
            :handleAddCart="handleAddCart"
            :handleRemoveCart="handleRemoveCart"
          />
        </li>
      </ul>
    </section>
    <transition name="fade">
      <div
        class="backdrop"
        v-if="visible"
        @click.prevent="visible = false"
      ></div>
    </transition>
  </div>
</template>

<script>
import foodItem from "@/components/foodItem/foodItem";

export default {
  name: "cart",
  props: {
    cartMap: Object,
    counts: Number,
    totalPrice: Number,
    handleAddCart: Function,
    handleRemoveCart: Function,
  },
  components: {
    foodItem,
  },
  methods: {
    handleClearCart() {
      this.$store.commit("setCart", {
        cartMap: {},
      });
    },
    toConfirmOrder() {
      if (!this.counts) return;
      this.$router.push("/confirmorder");
    },
  },
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.cart {
  z-index: 13;
  display: flex;
  background: #222a34;
  color: #fff;
  position: fixed;
  width: 100%;
  .left {
    width: 30%;
    position: relative;
    i {
      font-size: 1.5em;
    }
    .logo-wrapper {
      width: 60px;
      height: 60px;
      background: #66b1ff;
      border-radius: 50%;
      position: absolute;
      left: 13%;
      top: -21px;
      border: 8px solid #222a34;
    }
    .badge {
      position: absolute;
      top: -12px;
      right: 0;
      padding: 1px 3px;
      border-radius: 20%;
      background: red;
      line-height: normal;
      font-size: 0.75em;
    }
  }
  .right {
    background: #66b1ff;
    width: 30%;
  }
  .disabled-right {
    background: #96989a;
    width: 30%;
  }
  .middle {
    flex: 1;
    text-align: left;
    font-size: 1.5em;
    font-weight: bold;
  }
}
.drawer-wrapper {
  position: fixed;
  width: 100%;
  background: #fff;
  padding-bottom: 60px;
  bottom: 0;
  z-index: 12;
  .header {
    display: flex;
    padding: 0 1em;
    justify-content: space-between;
    background: #f3f5f7;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
}
.backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(7, 17, 27, 0.6);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 11;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
