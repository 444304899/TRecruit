<template>
  <div class="content mobile">
    <div class="shadow-bg"></div>
    <div class="header-seat"></div>
    <div class="max-center">
      <div class="c-wrapper g-clr">
        <div class="rec-content">
          <div class="rec-title g-clr">
            <div class="w-title">PCG09-QQ看点安卓开发工程师</div>
            <div class="w-c-wrapper">
              <span class="w-collection"></span>
              <span class="w-text">收藏</span>
            </div>
          </div>
          <div class="w-wrapper">
            <p class="rec-tips">
              <span>PCG</span>
              <span>|</span>
              <span>深圳总部</span>
              <span>|</span>
              <span>技术</span>
              <span style="display:none;">|</span>
              <span style="display:none;"></span>
              <span>|</span>
              <span>2019年7月25日</span>
            </p>
          </div>
          <div class="duty w-module">
            <div class="d-title">工作职责</div>
            <div class="d-text">
              <ul>
                <li class="explain-item">负责QQ看点Android客户端基础框架设计研发；客户端动态化解决方案设计；用户体验和性能优化和实施；</li>
              </ul>
            </div>
          </div>
          <div class="requirement w-module">
            <div class="d-title">工作要求</div>
            <div class="d-text">
              <ul>
                <li class="explain-item">
                  本科以上学历，1年以上Android平台的开发经验；
                  <br />熟悉Android系统体系结构、Framework、底层库等；熟悉Android常见开源组件实现原理；
                  <br />扎实的数据结构及算法功底；熟练掌握Java、Python等编程语言；
                  <br />熟悉网络通信机制，对Socket、TCP/IP、HTTP/HTTPS有一定理解；
                  <br />良好的分析和解决问题的能力，富有好奇心，对挑战性问题充满激情，对新技术积极探索；
                  <br />有计算机视觉、机器学习或深度学习等相关学习工作经验，有AI实践经验者优先；
                  <br />在Github开发维护的优质开源组件；
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="c-right fixed affix-up" style="right:20px;display:block;">
          <a href class="default-btn">申请岗位</a>
        </div>
        <div class="c-right-1" style="margin-top:594px;display:none">
          <a href class="default-btn-1">申请岗位</a>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="m-header m-header-one">
        <div class="max-center">
          <div class="con-right">
            <div class="header-text">相关推荐岗位</div>
          </div>
        </div>
      </div>
      <div class="max-center">
        <div class="nav-content">
          <div class="nav-content-list" style="display:block;">
            <div class="rec-wrap">
              <div class="rec-list">
                <a href class="rec-list-link">
                  <h4 class="rec-title">27092-用户增长后台开发工程师（深圳）</h4>
                  <p class="rec-tips">
                    <span>PCG</span>
                    <span>|</span>
                    <span>深圳总部，中国</span>
                    <span>|</span>
                    <span>技术</span>
                    <span style="display:none">|</span>
                    <span style="display:none"></span>
                    <span>|</span>
                    <span>2019年07月26日</span>
                  </p>
                  <p class="rec-text">
                    负责腾讯域内产品的用户增长方向，包括但不限于以下几个方向：
                    1. 参与建设用户增长后台架构的设计和优化工作。
                    2. 参与建设程序化广告投放系统，基于数据驱动优化广告的投放策略，最大化内软的广告投放效率。
                    3. 建立A/B test系统，并建立相应的数据监控体系，以驱动精细化运营策略的快速迭代。
                  </p>
                </a>
                <div class="rec-collection">
                  <span class="icon-collection"></span>
                  <span class="collection-text">收藏</span>
                </div>
              </div>
            </div>
            <div class="load-wrapper">
              <div class="more-btn">查看更多</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jid: this.$route.query.jid,
      jobmsg: []
    };
  },
  methods: {
    slid(elFix) {
      var o = obj;
      var b = o.offSetBottom;
      obj.data_bottom = b;
      var elFix = document.getElementsByClassName("c-right");
      if (obj.data_bottom > 0) {
        elFix.style.position = "fixed";
      } else {
        elFix.style.position = "static";
      }
    }
  },
  created: function() {
    console.log(this.$route.query.jid);
    this.axios
      .get("/joblist", {
        params: {
          jid: this.jid
        }
      })
      .then(response => {
        this.jobmsg = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style>
/* w:work c:content rec:recruit d:duty m:message h:header*/
a,
a:visited,
a:hover {
  text-decoration: none;
}
ul,
dl,
ol {
  list-style: none;
}
.g-clr {
  zoom: 1;
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
.header-seat {
  padding-bottom: 144px;
}
.max-center {
  max-width: 1120px;
  min-width: 964px;
  padding: 0 20px;
  margin: 0 auto;
}
.c-wrapper .rec-content {
  float: left;
  width: 71.429%;
  padding-top: 40px;
  margin-right: 3.572%;
}
.c-wrapper .w-title {
  float: left;
  max-width: 664px;
  /* font-family: PingFangSC-Semibold, 'microsoft yahei', 'PingFang SC', tahoma, arial, 'helvetica neue', 'hiragino sans gb', sans-serif; */
  font-size: 36px;
  color: #333333;
  /* letter-spacing: 0.08px; */
  line-height: 44px;
  margin-right: 4%;
  font-weight: 600;
}
.rec-title .w-c-wrapper {
  position: relative;
  top: 0;
  min-width: 80px;
  padding-top: 8px;
}
.rec-content .w-collection {
  position: relative;
  cursor: pointer;
  width: 24px;
  height: 32px;
  display: inline-block;
  background: url(../images/rectangle-narmal2x.png) no-repeat;
  background-size: 24px 32px;
  /* margin-left: 28px; */
  overflow: hidden;
  margin-right: 3px;
}
.rec-title .w-text {
  display: inline-block;
  font-size: 16px;
  color: #333333;
  /* letter-spacing: 0.08px; */
  line-height: 16px;
}
.rec-content .w-wrapper {
  margin-top: 16px;
  padding-bottom: 40px;
  border-bottom: 1px solid #d8d8d8;
}
.rec-content .rec-tips {
  font-size: 24px;
  color: #333333;
  line-height: 24px;
}
.rec-content .rec-tips span {
  margin-right: 5px;
}
.rec-content .w-module {
  margin-top: 40px;
}
.w-module .d-title {
  font-size: 28px;
  color: #333333;
  /* letter-spacing: 0.05px; */
  line-height: 28px;
}
.w-module .d-text {
  margin-top: 16px;
}
.d-text .explain-item {
  font-size: 16px;
  color: #333333;
  /* letter-spacing: 0.03px; */
  line-height: 28px;
}
.requirement .w-module {
  margin-top: 40px;
}
.affix-up {
  transform: translateY(0px);
}
.fixed {
  position: fixed;
  margin-top: 40px;
}
.default-btn {
  display: block;
  height: 48px;
  margin-right: 95px;
  width: 270px;
  line-height: 48px;
  text-align: center;
  border: 1px solid #d9d9d9;
  font-size: 20px;
  /* letter-spacing: 0.04px; */
  box-sizing: border-box;
  margin-bottom: 0px;
  background: #0052d9;
  color: white;
  transition: 0.3s all cubic-bezier(0.2, 0, 0.2, 1);
}
.default-btn:hover {
  background-color: #0041ad;
}
.c-right-1 {
  position: static;
  width: 234px;
  cursor: pointer;
  float: right;
}
.default-btn-1 {
  display: block;
  height: 48px;
  margin-right: 95px;
  width: 270px;
  line-height: 48px;
  text-align: center;
  border: 1px solid #d9d9d9;
  font-size: 20px;
  /* letter-spacing: 0.04px; */
  box-sizing: border-box;
  margin-bottom: 0;
  background: #0052d9;
  color: white;
  transition: 0.3s all cubic-bezier(0.2, 0, 0.2, 1);
}
.main {
  position: relative;
}
.m-header {
  position: relative;
  width: 100%;
  display: inline-block;
  margin: 96px 0px 56px;
}
.max-center {
  max-width: 1120px;
  min-width: 964px;
  padding: 0 20px;
  margin: 0 auto;
}
.header-text {
  display: inline-block;
  position: relative;
  font-size: 32px;
  color: #323232;
  /* letter-spacing: 0; */
  line-height: 32px;
  /* font-family: PingFangSC-Semibold, 'microsoft yahei', 'PingFang SC', tahoma, arial, 'helvetica neue', 'hiragino sans gb', sans-serif; */
  font-weight: 600;
}
.main .rec-wrap {
  padding-bottom: 32px;
}
.main .rec-wrap .rec-list {
  transition-duration: 0.5s;
}
.main .rec-wrap .rec-list:hover {
  transition-duration: 0.5s;
  transform: translateY(-5px);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}
.main .rec-wrap .rec-list {
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05);
  opacity: 1;
  margin-bottom: 16px;
  transition: all 0.35s cubic-bezier(0.2, 0, 0.2, 1);
  position: relative;
  min-height: 184px;
}
.main .rec-wrap .rec-list-link {
  display: inline-block;
  padding: 2.383%;
  width: 100%;
  box-sizing: border-box;
}
.main .rec-list .rec-title {
  font-size: 24px;
  /* letter-spacing: 0.12px; */
  transition: all 0.35s cubic-bezier(0.2, 0, 0.2, 1);
}
.main .rec-list .rec-tips {
  font-size: 16px;
  margin: 9px 0px 20px;
  line-height: 22px;
}
.main .rec-list .rec-text {
  width: 90.004%;
}
.main .rec-list .rec-text {
  color: #808080;
  /* letter-spacing: 0.07px; */
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.main .rec-list .rec-collection {
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
.main .rec-list .icon-collection {
  position: relative;
  width: 24px;
  height: 32px;
  display: block;
  margin: 0 auto 8px;
  background: url(../images/rectangle-narmal2x.png) no-repeat;
  background-size: 24px 32px;
  overflow: hidden;
}
.load-wrapper .more-btn {
  position: relative;
  margin: 0 auto 120px;
  width: 240px;
  height: 48px;
  line-height: 48px;
  background: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
  font-size: 18px;
  color: #0052d9;
  /* letter-spacing: 0.09px; */
  text-align: center;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.2, 0, 0.2, 1);
  cursor: pointer;
}
</style>


