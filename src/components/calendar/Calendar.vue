<template>
  <div class="container">
    <section class="calendar">
      <el-calendar v-model="value"> </el-calendar>
    </section>
    <section class="actions">
      <el-button type="primary" @click="setDate(new Date(1997, 10, 28))"
        >我的生日</el-button
      >
      <el-button type="danger" @click="setDate(new Date(1995, 11, 21))"
        >我爱豆的生日</el-button
      >
      <el-button @click="setDate(new Date())">回到今天</el-button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  methods: {
    setDate: function(date) {
      this.value = date;
    },
  },
  data: function() {
    return {
      value: new Date(),
    };
  },
};
</script>

<style>
.calendar .el-calendar-table .el-calendar-day {
  height: 60px;
}
</style>
<style scoped lang="less">
.container {
  width: 100%;
  .actions {
    text-align: center;
    button {
      width: 100%;
      margin: 0 0 10px 0;
    }
  }
}
</style>
