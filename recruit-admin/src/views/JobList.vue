<template>
    <div class="main">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/center' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path:'/jobhome/joblist'}">岗位信息列表</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path:'/jobhome/addjob'}">岗位信息添加</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path:'/jobhome/editjob'}">岗位信息修改</el-breadcrumb-item>
    </el-breadcrumb>

    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="jobname" label="岗位名称" width="120"></el-table-column>
      <el-table-column prop="address" label="工作所在(国家/城市)" width="180"></el-table-column>
    </el-table-column>
      <el-table-column prop="jobtype" label="工作类型"></el-table-column>
      <el-table-column prop="groups" label="事业群"></el-table-column>
      <el-table-column prop="datas" label="发布时间"></el-table-column>
      <el-table-column prop="duty" label="工作职责"></el-table-column>
      <el-table-column prop="demand" label="工作要求"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.axios
      .get("/joblist")
      .then(res => {
        console.log(res);
        this.tableData = res.data;
      })
      .catch(err => {
        console.error(err);
      });
  },
  methods: {
    handleEdit(index, row) {
        this.$router.push('/jobhome/editjob?bid=' + row.bid);
        console.log(index, row);
    },
    handleDelete(index, row) {
      this.$confirm("删除是不可恢复的, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
            // 到服务器删除对应数据
            this.axios.post('/deljob', { bid:row.bid})
            .then(res => {
                // 这里应该对操作结果进行判断
                if(res.data.r == 'ok'){
                    // 删除当前数据  tableData  
                    this.tableData.splice(index, 1);
                    this.$message({
                        type: "success",
                        message: "删除成功!"
                    });
                }
                
                console.log(res)
            })
            .catch(err => {
                console.error(err); 
            })
          
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      console.log(index, row);
    }
  }
};
</script>



