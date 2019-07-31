<template>
  <div class="jobs" @click="change">
    <myheader :aws="true"></myheader>
    <jobcontent></jobcontent>
    <div class="footer-seat mobile"></div>
    <myfooter></myfooter>
  </div>
</template>
<script>
import jobcontent from '@/components/jobcontent.vue'
export default {
  name: "jobs",
  components: {
    jobcontent
  },
  data() {
    return {
      msg: 1
    };
  },
  methods: {
    change() {
      this.msg++;
    }
  }
};
</script>

<style>
    .footer-seat{
        height: 284px;
    }
</style>

