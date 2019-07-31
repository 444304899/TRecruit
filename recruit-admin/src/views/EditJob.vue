<template>
  <div class="main">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/center' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path:'/jobhome/joblist'}">岗位信息列表</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path:'/jobhome/addjob'}">岗位信息添加</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path:'/jobhome/editjob'}">岗位信息修改</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="岗位名称">
        <el-col :span="8">
          <el-input v-model="form.jobname"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="所在国家/城市">
        <el-col :span="8">
          <el-input v-model="form.address"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="工作类型">
        <el-col :span="8">
          <el-input v-model="form.jobtype"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="事业群">
        <el-col :span="8">
          <el-input v-model="form.groups"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="发布时间">
        <el-col :span="8">
          <el-input v-model="form.datas"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="工作职责">
        <el-col :span="8">
          <el-input v-model="form.duty"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="工作要求">
        <el-col :span="8">
          <el-input v-model="form.demand"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "addjob",
  data() {
    return {
      form: {
       jobname: "",
        address: "",
        type: '',
        groups: "",
        datas: "",
        duty: "",
        demand: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      //   把数据提交给服务器
      this.axios
        .post("/editjob", this.form)
        .then(res => {
          console.log(res);
          if (res.data.r == "ok") {
            this.$router.push("/jobhome/joblist");
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    handleAvatarSuccess(res, file) {
      console.log(res);
    },
    beforeAvatarUpload(file) {
      return true;
    }
  },
};
</script>



