<template>
  <div class="container">
    <my-head></my-head>
    <my-aside></my-aside>

    <div class="main">管理首页</div>
  </div>
</template>
<script>
import myhead from "../components/Header";
import myaside from "../components/Aside";
export default {
  name: "center",
  components: {
    myhead,
    myHead: myhead,
    myaside,
    myAside: myaside
  },
  data() {
    return {};
  },
  methods: {}
};
</script>


<style scoped>
.container {
  margin: 0;
  width: 100%;
  height: 0;
}
.main {
  /* width: 100%; */
  min-height: 200px;
  /* background-color: #f08; */
  margin-left: 195px;
  margin-top: 15px;
}
</style>