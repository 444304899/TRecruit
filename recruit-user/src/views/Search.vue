<template>
    <div class="search" @click="change">
    <myheader></myheader>
    <schcontent></schcontent>
    <div class="footer-seat mobile"></div>
    <myfooter :cancel="msg"></myfooter>
    </div>
</template>

<script>
import schcontent from '@/components/schcontent.vue';
export default {
  name: 'search',
  components: {
    schcontent
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.footer-seat {
    height: 284px;
}
</style>
