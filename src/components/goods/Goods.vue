<template>
  <div class="container">
    <el-container>
      <el-container>
        <el-aside width="100px"
          ><div
            v-for="(item, index) in sideMenu"
            :key="index"
            :class="activeIndex === index ? 'menuItemActive' : 'menuItem'"
            @click="onMenuClick(index)"
          >
            {{ item.title }}
          </div></el-aside
        >
        <el-main><div>Main</div></el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
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
      sideMenu: [
        {
          key: 0,
          title: "地方特色菜",
        },
        {
          key: 1,
          title: "精选热菜",
        },
        {
          key: 2,
          title: "爽口凉菜",
        },
        {
          key: 3,
          title: "小吃甜品",
        },
      ],
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
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  .menuItem {
    height: 80px;
    line-height: 80px;
    border-left: 0.15rem solid transparent;
  }
  .menuItemActive {
    background: #fff;
    height: 80px;
    line-height: 80px;
    border-left: 0.15rem solid #3190e8;
  }
}
</style>
