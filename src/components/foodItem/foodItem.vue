<template>
  <div class="foodItem">
    <div class="left">
      <img :src="food.image" />
    </div>
    <div class="middle">
      <h2>{{ food.name }}</h2>
      <p>{{ food.description }}</p>
      <p class="price">¥{{ food.price }}</p>
    </div>
    <div class="right">
      <i
        class="el-icon-remove-outline"
        v-show="cartMap[food.name] && cartMap[food.name].count > 0"
        @click="handleRemoveCart(food)"
      ></i>
      <div
        class="number"
        v-show="cartMap[food.name] && cartMap[food.name].count > 0"
      >
        {{ cartMap[food.name] && cartMap[food.name].count }}
      </div>
      <i class="el-icon-circle-plus" @click="handleAddCart(food)"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "foodItem",
  props: {
    food: Object,
    cartMap: Object,
    handleAddCart: Function,
    handleRemoveCart: Function,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.foodItem {
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 18px;
  line-height: 1em;
  text-align: left;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  .left {
    width: 57px;
    height: 57px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .middle {
    flex: 1;
    padding-left: 10px;
    h2 {
      font-size: 14px;
      margin: 2px 0 8px 0;
      line-height: 14px;
      color: #07111b;
    }
    p {
      font-size: 10px;
      margin: 0 0 8px 0;
      color: #93999f;
    }
    .price {
      color: red;
    }
  }
  .right {
    display: flex;
    align-items: center;
    i {
      font-size: 24px;
      color: #409eff;
    }
    .number {
      display: inline-block;
      padding: 0 6px;
    }
  }
}
</style>
