<template>
  <div class="main clear-top">
    <div class="message-header message-header-one title">
      <div class="max-center">
        <div class="header-text">为什么选择腾讯</div>
      </div>
    </div>
    <max-center></max-center>
    <job-message></job-message>
    <welfare></welfare>
    <staff-msg></staff-msg>
    <story-msg></story-msg>
  </div>
</template>

<script>
import maxCenter from "@/components/max-center.vue";
import jobMessage from "@/components/job-message.vue";
import welfare from "@/components/welfare.vue";
import staffMsg from "@/components/staff-msg.vue";
import storyMsg from "@/components/story-msg.vue";
export default {
  name: "",
  props: {
    msg: String
  },
  components: {
    "max-center": maxCenter,
    "job-message": jobMessage,
    welfare,
    "staff-msg": staffMsg,
    "story-msg": storyMsg
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main {
  position: relative;
}
.message-header.title {
  margin-top: 64px;
}
.message-header {
  position: relative;
  width: 100%;
  display: inline-block;
  margin: 96px 0px 56px;
}
.header-text {
  display: inline-block;
  position: relative;
  font-size: 32px;
  color: #323230;
  /* letter-spacing: 0; */
  line-height: 32px;
  /* font-family: PingFangSC-Semibold, 'microsoft yahei', 'PingFang SC', tahoma, arial, 'helvetica neue', 'hiragino sans gb', sans-serif; */
  font-weight: 600;
}
.main .header-text:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 8px;
  bottom: -10px;
  left: 0;
  margin-top: 8px;
  background: #0052d9;
}
.main .index-btn:hover,
.main .welfare-btn:hover,
.main .recruit-btn:hover {
  transform: translate(-50%, -4px);
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.4);
}
.main .index-btn::after,
.content .load-more-wrapper .more-btn::after,
.main .welfare-btn::after,
.main .recruit-btn::after {
  content: "";
  position: absolute;
  left: -7px;
  top: -28px;
  height: 215%;
  width: 0%;
  transform: rotate(8deg);
  background-color: rgba(0, 0, 0, 0.05);
  transition: all 1s cubic-bezier(0.2, 0, 0.2, 1);
}
.main .index-btn:hover::after,
.load-more-wrapper .more-btn:hover::after,
.main .welfare-btn:hover::after,
.main .recruit-btn:hover::after {
  width: 105%;
  background-color: rgba(0, 0, 0, 0.2);
}
.max-center {
  max-width: 1120px;
  min-width: 964px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>
