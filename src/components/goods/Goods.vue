<template>
  <div class="container">
    <el-container>
      <el-container>
        <el-aside width="100px"
          ><div
            v-for="(item, index) in goods"
            :key="index"
            :class="activeIndex === index ? 'menuItemActive' : 'menuItem'"
            @click="onMenuClick(index)"
          >
            {{ item.name }}
          </div></el-aside
        >
        <el-main class="foodWrapper">
          <ul>
            <li v-for="good in goods" :key="good.name" class="foodList">
              <h1>{{ good.name }}</h1>
              <ul>
                <li v-for="(food, index) in good.foods" :key="index">
                  <div class="foodItem">
                    <div class="left"><img :src="food.image" /></div>
                    <div class="middle">
                      <h2>{{ food.name }}</h2>
                      <p>{{ food.description }}</p>
                      <p class="price">¥{{ food.price }}</p>
                    </div>
                    <div class="right" @click="add">
                      <i class="el-icon-circle-plus"></i>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
// FIXME: 后续改为获取mock接口数据
import mock from "../../../data.json";
export default {
  name: "Calendar",
  methods: {
    onMenuClick: function(index) {
      this.activeIndex = index;
    },
  },
  data: function() {
    return {
      activeIndex: 0,
      goods: mock.goods,
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
  background-color: #b3c0d1;
  color: #333;
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
  .foodItem {
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 18px;
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
      color: #409eff;
      i {
        font-size: 24px;
      }
    }
  }
}
</style>
