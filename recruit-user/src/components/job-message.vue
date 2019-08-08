<template>
  <div class="jop-message-wrapper">
    <div class="message-header message-header-two">
      <div class="max-center">
        <div class="header-text">探索你的未来</div>
      </div>
    </div>
    <div class="job-wrapper">
      <div class="job-content">
        <div class="g-clr job-padding mar-bottom">
          <div class="job-list">
            <a href="search?pcid=40001" target="_blank" class="job-list-link"></a>
            <div class="job-box">
              <p class="job-classification">技术类</p>
              <a href="search?pcid=40001" target="_blank" class="job-href">查看岗位</a>
            </div>
            <div class="job-icon icon-1"></div>
          </div>
          <div class="job-list">
            <a href="search?pcid=40003" target="_blank" class="job-list-link"></a>
            <div class="job-box">
              <p class="job-classification">产品类</p>
              <a href="search?pcid=40003" target="_blank" class="job-href">查看岗位</a>
            </div>
            <div class="job-icon icon-2"></div>
          </div>
          <div class="job-list">
            <a href="search?pcid=40006" target="_blank" class="job-list-link"></a>
            <div class="job-box">
              <p class="job-classification">内容类</p>
              <a href="search?pcid=40006" target="_blank" class="job-href">查看岗位</a>
            </div>
            <div class="job-icon icon-3"></div>
          </div>
          <div class="job-list">
            <a href="search?pcid=40002" target="_blank" class="job-list-link"></a>
            <div class="job-box">
              <p class="job-classification">设计类</p>
              <a href="search?pcid=40002" target="_blank" class="job-href">查看岗位</a>
            </div>
            <div class="job-icon icon-4"></div>
          </div>
          <div class="job-list">
            <a href="search?pcid=40005" target="_blank" class="job-list-link"></a>
            <div class="job-box">
              <p class="job-classification">销售、服务与支持类</p>
              <a href="search?pcid=40005" target="_blank" class="job-href">查看岗位</a>
            </div>
            <div class="job-icon icon-5"></div>
          </div>
          <div class="job-list">
            <a href="search?pcid=40008" target="_blank" class="job-list-link"></a>
            <div class="job-box">
              <p class="job-classification">人力资源类</p>
              <a href="search?pcid=40008" target="_blank" class="job-href">查看岗位</a>
            </div>
            <div class="job-icon icon-6"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-btn-wrapper">
      <a href="jobopportunity.html" class="index-btn">查看更多职类</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.job-wrapper .job-content .job-padding.mar-bottom {
  margin-bottom: 16px;
}
.job-list {
  position: relative;
  float: left;
  width: 30.663%;
  height: 200px;
  margin: 0 1.33%;
  margin-bottom: 32px;
  background-color: white;
  padding: 2.44% 2.091%;
  box-sizing: border-box;
  background-size: contain;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.5s cubic-bezier(0.2, 0, 0.2, 1),
    color 0.5s cubic-bezier(0.2, 0, 0.2, 1),
    box-shadow 0.5s cubic-bezier(0.2, 0, 0.2, 1);
}
.job-list:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.1);
}
.job-list .job-list-link {
  position: absolute;
  display: block;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
.job-list .job-box {
  display: inline-block;
  width: 80.265%;
}
.job-list:hover .job-classification {
  color: #0052d9;
}
.job-classification {
  font-size: 28px;
  color: #323232;
  /* letter-spacing: 0.14px; */
  line-height: 36px;
  /* word-break: break-all; */
}
.job-href {
  position: absolute;
  width: 80px;
  /* font-family: PingFangSC-Semibold, 'microsoft yahei', 'PingFang SC', tahoma, arial, 'helvetica neue', 'hiragino sans gb', sans-serif; */
  bottom: 23px;
  font-size: 16px;
  color: #0052d9;
  /* letter-spacing: 0.08px; */
  line-height: 18px;
  font-weight: 600;
}
.job-href:hover {
  color: #4c90ff;
}
.job-href::after {
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -6px;
  width: 12px;
  height: 12px;
  background-image: url(./../images/side-b-right.png);
  background-size: 12px 12px;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s all cubic-bezier(0.2, 0, 0.2, 1);
}
.job-href:hover::after {
  transform: translateX(6px);
  background-image: url(./../images/side-right-hover.png);
  background-size: 12px 12px;
}
.job-list .job-icon {
  position: absolute;
  width: 40px;
  height: 40px;
  right: 24px;
  top: 24px;
  background-size: contain;
}
.icon-1 {
  background: url(./../images/category-1.png) no-repeat center;
}
.icon-2 {
  background: url(./../images/category-2.png) no-repeat center;
}
.icon-3 {
  background: url(./../images/category-3.png) no-repeat center;
}
.icon-4 {
  background: url(./../images/category-4.png) no-repeat center;
}
.icon-5 {
  background: url(./../images/category-5.png) no-repeat center;
}
.icon-6 {
  background: url(./../images/category-6.png) no-repeat center;
}
.index-btn {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  display: inline-block;
  font-size: 18px;
  color: #0052d9;
  background: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 2px 0 #d8d8d8\0;
  -webkit-transition: all 0.35s cubic-bezier(0.2, 0, 0.2, 1);
  transition: all 0.35s cubic-bezier(0.2, 0, 0.2, 1);
  text-align: center;
  line-height: 48px;
  height: 48px;
  margin: 0 auto 96px;
  padding: 0 24px;
  min-width: 208px;
  overflow: hidden;
  box-sizing: border-box;
}

</style>
