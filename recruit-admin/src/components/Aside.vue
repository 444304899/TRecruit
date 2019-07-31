<template>
  <aside>
      <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>招聘信息管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">招聘信息管理</template>
          <el-menu-item index="1-1" @click="say('/jobhome/addjob')">添加招聘信息</el-menu-item>
          <el-menu-item index="1-2" @click="say('/jobhome/editjob')">编辑招聘信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
  </aside>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    say:function(message){
        this.$router.push(message);
    }
  }
};
</script>
<style scoped>
aside {
  width: 180px;
  background-color: #545c64;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
}
.el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 0px;
}
.el-menu {
  border-right: 0;
}
.el-col-12 {
    width: 100%;
}
</style>
