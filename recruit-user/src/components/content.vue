<template>
  <div class="content mobile bg-color">
    <div class="shadow-bg" :class="{active:this.$store.state.SdShow}"></div>
    <cttbanner></cttbanner>
    <cttmain></cttmain>
  </div>
</template>

<script>
import cttbanner from '@/components/banner.vue';
import cttmain from '@/components/main.vue';
export default {
  name: "",
  props: {
  },
  components:{
      cttbanner,
      cttmain
  },
  data() {
    return {
      msg:this.$store.state.SdShow
    }
  },
  methods: {
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.content.bg-color {
  background-color: #f7f7f7;
  padding-bottom: 120px;
}
.shadow-bg {
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: -1;
  transform-origin: top;
}
.shadow-bg.active {
    opacity: 1;
    z-index: 10;
    transition: .5s opacity cubic-bezier(0.2, 0.0, 0.2, 1);
}
</style>
