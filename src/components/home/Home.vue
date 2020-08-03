<template>
  <div class="container">
    <section class="header">
      <div class="card">
        <div class="left">
          <p class="title">我家厨房</p>
          <p>源于中国千年古法，融和现代制作工艺</p>
          <p>坚守0添加的良心品质深得消费者青睐</p>
        </div>
        <div class="right">
          <img
            src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg"
          />
        </div>
      </div>
    </section>
    <p class="greet">你好，帅哥</p>
    <section class="menu">
      <el-row>
        <el-col :span="8" v-for="(item, index) in menu" :key="index">
          <router-link :to="item.path">
            <div class="item">
              <i :class="item.icon"></i>
              <p class="title">{{ item.title }}</p>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      menu: [
        { icon: "el-icon-food", title: "我要吃饭", path: "/goods" },
        { icon: "el-icon-fork-spoon", title: "我的订单", path: "/order" },
        {
          icon: "el-icon-refrigerator",
          title: "我的冰箱",
          path: "/refrigerator",
        },
        { icon: "el-icon-circle-plus", title: "添加新菜", path: "/additem" },
        {
          icon: "el-icon-circle-plus-outline",
          title: "添加类别",
          path: "/addclass",
        },
        { icon: "el-icon-moon", title: "一个日历", path: "/calendar" },
      ],
    };
  },
};
</script>

<style scoped lang="less">
@primary-color: #409eff;
.container {
  width: 100%;
}
.header {
  position: relative;
  height: 35vh;
  background-image: url("../../images/background.jpeg");
  background-size: 100%;
  background-repeat: no-repeat;
  .card {
    position: absolute;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 90%;
    height: max-content;
    top: 55%;
    left: 5%;
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .left {
      .title {
        font-size: 1.5em;
        margin-bottom: 8px;
      }
      p {
        font-size: 0.75em;
        margin-bottom: 8px;
      }
    }
    .right {
      height: 64px;
      width: 64px;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
.greet {
  text-align: center;
  width: 100%;
  margin-bottom: 16px;
}
.item {
  height: calc(100vw / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: #f8f8f8 1px solid;
  i {
    color: @primary-color;
    font-size: 24px;
    margin-bottom: 0.5em;
  }
  .title {
    a {
      text-decoration: none;
      color: unset;
    }
  }
}
</style>
