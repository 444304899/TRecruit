<template>
  <div class="home" @click="change">
    <myheader></myheader>
    <mycontent></mycontent>
    <div class="footer-seat mobile"></div>
    <myfooter :cancel="msg"></myfooter>
  </div>
</template>

<script>
// @ is an alias to /src
import mycontent from '@/components/content.vue';
export default {
  name: 'home',
  components: {
    mycontent
  },
  data() {
    return {
      msg:1
    }
  },
  methods: {
    change(){
      // console.log(this.msg);
      this.msg++;
    }
  },
}
</script>
<style>
a {
    color: inherit;
}
.footer-seat {
    height: 284px;
}
.max-center {
    max-width: 1120px;
    min-width: 964px;
    padding: 0 20px;
    margin: 0 auto;
}
</style>
