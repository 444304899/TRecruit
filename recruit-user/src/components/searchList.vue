<template>
  <div class="search-content">
    <div class="search-nav g-clr">
      <div class="new">最新发布</div>
      <div class="search-number">
        <div class="search-count">显示1-10,共2075职位</div>
      </div>
    </div>
    <div class="label-wrapper default" :style="'max-height:'+lbhight">
      <div class="btn remove-label" @click="cleanAll">清除全部</div>
      <div class="btn more-label" @click="more">{{msg}}</div>
      <div class="label">
        <div class="label-item" v-for="(item,ind) in this.$store.state.SelectedList" :key="ind">
          <div class="label-text">
            <a href class="label-link">{{item}}</a>
            <span class="close-btn" @click="del(ind)"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="correlation-degree">
      <div class="recruit-wrap recruit-margin">
        <!---->
        <div class="recruit-list">
          <a class="recruit-list-link">
            <h4 class="recruit-title">WXG02-121 微信视频图像处理高级工程师（深圳/北京/广州/成都/上海）</h4>
            <p class="recruit-tips">
              <span>WXG</span> |
              <span>广州,中国</span> |
              <span>技术</span> |
              <!---->
              <span>2019年07月20日</span>
            </p>
            <p class="recruit-text">
              团队介绍：
              微信多媒体团队专注于最实用的音视频、图片技术研究。目前自研技术已经应用于微信的音视频通话、多人通话、多媒体消息、朋友圈、公众平台等各项功能.每天支撑了数亿的视频通话、数十亿的视频播放、数百亿的图片查者。专业&amp;专注，我们一直在多媒体领域砥砺前行，努力为用户提供最佳的语音视频业务体验。
              岗位职责：
              负责视频图像前后处理算法与前沿技术研究，主要面向微信视频通话、图片和视频文件类业务，以及未来视频图片相关应用。
            </p>
          </a>
          <div class="recruit-collection">
            <span class="icon-collection"></span>
            <span class="collection-text">收藏</span>
          </div>
        </div>
      </div>
    </div>
    <!---->
    <!-- <div class="page-number">
      <ul class="page-list">
        <li class="prev disabled">&nbsp;</li>
        <li class="page-li active">
          <span class="page-text">1</span>
        </li>
        <li class="page-li">
          <span class="page-text">2</span>
        </li>
        <li class="page-li">
          <span class="page-text">3</span>
        </li>
        <li class="page-li">
          <span class="page-text">4</span>
        </li>
        <li class="page-li">
          <span class="page-text">5</span>
        </li>
        <li class="page-li">
          <span class="page-text">6</span>
        </li>
        <li class="page-li more btn-quicknext">
          <span class="page-text more btn-quicknext">...</span>
        </li>
        <li class="page-li">
          <span class="page-text">208</span>
        </li>
        <li class="next">&nbsp;</li>
      </ul>
    </div>-->
    <el-pagination background layout="prev, pager, next" :total="1000" class="page-number"></el-pagination>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      lbhight: "58px",
      msg: "更多"
    };
  },
  methods: {
    more() {
      if (this.msg == "更多") {
        this.lbhight = "193.333px";
        this.msg = "更少";
      } else {
        this.lbhight = "58px";
        this.msg = "更多";
      }
    },
    cleanAll(){
      this.$store.commit('CleanSelectedList')
    },
    del(ind){
      this.$store.commit('delSelectedList',ind)
      // console.log(ind);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content .search-content {
  float: right;
  width: 71.429%;
  margin-top: 32px;
  margin-bottom: 96px;
  min-height: 100vh;
  /* padding-left: 28.5%; */
}
.content .search-content .search-nav {
  margin-bottom: 24px;
}
.content .search-content .new {
  display: inline-block;
  font-size: 22px;
  color: #333333;
  /* letter-spacing: 0.04px; */
  line-height: 22px;
}
.content .search-content .search-number {
  float: right;
}
.content .search-content .search-number .search-page,
.content .search-content .search-number .search-count {
  float: left;
  font-size: 16px;
  color: #818181;
  /* letter-spacing: 0.03px; */
  line-height: 22px;
}
.content .search-content .label-wrapper.default {
  max-height: 56px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}
.content .search-content .label-wrapper {
  position: relative;
  min-height: 56px;
}
.content .search-content .label-wrapper .btn {
  cursor: pointer;
  float: right;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #0052d9;
  /* letter-spacing: 0.03px; */
  margin-left: 2%;
  transition: 0.5s all cubic-bezier(0.2, 0, 0.2, 1);
}
.content .search-content .label-wrapper .btn:hover {
  color: #4c90ff;
}
.content .search-content .label-wrapper .label {
  width: 85.328%;
  transition: 1s all cubic-bezier(0.2, 0, 0.2, 1);
}
.content .search-content .label-wrapper .label-item {
  position: relative;
  display: inline-block;
  padding: 0 5.86% 0px 2.3%;
  margin-right: 1.7%;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  margin-bottom: 16px;
  transition: 0.5s border cubic-bezier(0.2, 0, 0.2, 1);
}
.content .search-content .label-wrapper .label-item:hover {
  border: 1px solid #0052d9;
}
.content .search-content .label-wrapper .label-link {
  display: block;
  font-size: 18px;
  color: #333333;
  /* letter-spacing: 0.03px; */
  padding: 11px 0;
}
.content .search-content .label-wrapper .label-item span.close-btn {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: url(./../images/cancel2x.png) no-repeat;
  background-size: cover;
  position: absolute;
  right: 8px;
  top: 50%;
  margin-top: -5.5px;
  z-index: 2;
  cursor: pointer;
}
.content .main .recruit-margin {
  margin-top: 4px;
  padding: 0;
}
.content .main .recruit-wrap .recruit-list:hover {
  transform: translateY(-4px);
  -ms-transform: translateY(-4px);
  -moz-transform: translateY(-4px);
  -webkit-transform: translateY(-4px);
  -o-transform: translateY(-4px);
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 8px 0 #d8d8d8\0;
}
.content .main .recruit-wrap .recruit-list {
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 3px 0 #d8d8d8\0;
  opacity: 1;
  margin-bottom: 16px;
  -webkit-transition: all 0.35s cubic-bezier(0.2, 0, 0.2, 1);
  transition: all 0.35s cubic-bezier(0.2, 0, 0.2, 1);
  position: relative;
  min-height: 184px;
}
.content .main .recruit-wrap .recruit-list-link {
  display: inline-block;
  padding: 2.383%;
  width: 100%;
  box-sizing: border-box;
}
.content .search-content .recruit-wrap .recruit-list-link {
  padding-top: 4%;
  padding-left: 4%;
  padding-bottom: 3.5%;
  padding-right: 5%;
}
.content .main .recruit-wrap .recruit-list .recruit-title {
  font-size: 24px;
  /* letter-spacing: 0.12px; */
  -webkit-transition: all 0.35s cubic-bezier(0.2, 0, 0.2, 1);
  transition: all 0.35s cubic-bezier(0.2, 0, 0.2, 1);
}
.content .main .recruit-wrap .recruit-list:hover .recruit-title {
  color: #0052d9;
}
.content .main .recruit-wrap .recruit-list .recruit-tips {
  font-size: 16px;
  margin: 9px 0px 20px;
  line-height: 22px;
}
.content .main .recruit-wrap .recruit-list .recruit-text {
  color: #808080;
  /* letter-spacing: 0.07px; */
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.content .main .recruit-wrap .recruit-list .recruit-text {
  width: 90.004%;
}
.content .main .recruit-wrap .recruit-list .recruit-text {
  white-space: pre-wrap;
}

.content .main .recruit-wrap .recruit-list .recruit-collection {
  position: absolute;
  right: 2.9%;
  top: 50%;
  margin-top: -28px;
  font-size: 16px;
  line-height: 16px;
  color: #333333;
  /* letter-spacing: 0.08px; */
  cursor: pointer;
  text-align: center;
  width: 60px;
  background-position: center top;
}
.content
  .main
  .recruit-wrap
  .recruit-list
  .recruit-collection
  .icon-collection {
  position: relative;
  width: 24px;
  height: 32px;
  display: block;
  margin: 0 auto 8px;
  background: url(../images/rectangle-narmal2x.png) no-repeat;
  background-size: 24px 32px;
  overflow: hidden;
}
.content
  .main
  .recruit-wrap
  .recruit-list
  .recruit-collection
  .icon-collection::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0%;
  height: 110%;
  background-color: #968c83;
  transform: rotate(8deg);
  transition: 0.5s cubic-bezier(0.2, 0, 0.2, 1);
}
.content
  .main
  .recruit-wrap
  .recruit-list
  .recruit-collection
  .icon-collection::after {
  content: "";
  position: absolute;
  left: 0;
  top: 26px;
  border-right: 12px solid transparent;
  border-left: 12px solid transparent;
  border-bottom: 6px solid white;
}
.content .main .page-number {
    float: right;
    margin-top: 4px;
    background: white;
}
</style>
