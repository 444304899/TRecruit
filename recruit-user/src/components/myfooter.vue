<template>
  <div class="footer mobile">
    <div class="max-center">
      <div class="follow-tencent">
        <span class="follow-tag">关注腾讯招聘</span>
        <div class="follow-list">
          <div class="follow-li wechat">
            <div
              class="code-img"
              style="background-image: url(&quot;https://mp.weixin.qq.com/mp/qrcode?scene=10000004&amp;size=102&amp;__biz=MTkyNTM0MzA4MQ==&amp;mid=2650883837&amp;idx=1&amp;sn=51a2ca8af9628ed3ec4c2f2c76a4232b&amp;send_time=&quot;);"
            ></div>
          </div>
          <div class="follow-li linkedin"></div>
        </div>
      </div>
      <div class="footer-main">
        <ul class="footer-tips">
          <li class="tips-title">公司</li>
          <li class="tips-bor">
            <a href="https://www.tencent.com/zh-cn/index.html">关于腾讯</a>
          </li>
          <li class="tips-bor">
            <a href="https://gongyi.qq.com/">腾讯公益</a>
          </li>
          <li class="tips-bor">
            <a href="http://kf.qq.com/">客服中心</a>
          </li>
        </ul>
        <ul class="footer-tips">
          <li class="tips-title">法律信息</li>
          <li class="tips-bor">
            <a href="termsservice.html">服务协议</a>
          </li>
          <li class="tips-bor">
            <a href="policy.html">隐私政策</a>
          </li>
          <li class="tips-bor">
            <a href="http://www.tencent.com/legal/html/zh-cn/index.html">知识产权</a>
          </li>
        </ul>
        <div class="footer-switch">
          <div class="logo-black"></div>
          <div class="switch-language" @click="choose">
            <div hidefocus="true" tabindex="1" class="language-txt">中文简体</div>
            <ul class="language-choice" :class="{active:isChoice}">
              <li class="list">
                <a href="javascript:;" class="border">中文(简体)</a>
              </li>
              <li class="list">
                <a href="javascript:;">English</a>
              </li>
            </ul>
            <div class="language-arrow-down"></div>
          </div>
        </div>
      </div>
      <div class="footer-copyright">Copyright © 1998 - 2019 Tencent. All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "",
  props: {
    cancel: Number
  },
  data() {
    return {
      isChoice: false,
      timer: "",
      a: 0
    };
  },
  methods: {
    choose() {
    this.a =0;
      this.isChoice = true;
    //   console.log("choose()", this.isChoice);
    },
    handleClick() {
      this.isChoice = false;
    //   console.log("handleClick()", this.isChoice);
    }
  },
  watch: {
    // isChoice() {
    //   if (this.isChoice) {
    //     console.log("添加监听");
    //     this.timer = setTimeout(function() {
    //       window.addEventListener("click", this.handleClick);
    //     }, 1);
    //   } else {
    //     this.timer = "";
    //     window.removeEventListener("click", this.handleClick);
    //   }
    // },
    cancel(isChoice) {
    //   console.log("变化",this.a);
        this.a ++;
      if (this.isChoice && this.a%2==0) {
        this.handleClick();
      }
    }
  },
  mounted() {},
  destroyed() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 284px;
  background: #e9e9e9;
}
.footer .follow-tencent {
  display: table;
  width: 100%;
  margin: 20px 0;
}
.footer .follow-tencent .follow-tag {
  display: inline-block;
  margin-right: 32px;
}
.footer .follow-tencent .follow-list {
  display: inline-block;
}
.footer .follow-tencent .follow-list .follow-li {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 20px;
  background-size: 24px 24px;
  transition: 0.3s background cubic-bezier(0.2, 0, 0.2, 1);
  cursor: pointer;
}
.footer .follow-tencent .follow-list .follow-li.wechat {
  background-image: url(./../images/social-wechat.png);
  background-repeat: no-repeat;
}

.footer .follow-tencent .follow-list .follow-li.wechat:hover {
  background-image: url(./../images/wechat-default2x.png);
}
.footer .follow-tencent .follow-list .follow-li .code-img {
  opacity: 0;
  position: absolute;
  top: -162px;
  left: -68px;
  width: 160px;
  height: 160px;
  background-image: url(./../images/QR-code.png);
  background-size: 160px 160px;
  z-index: -1;
}
.footer .follow-tencent .follow-list .follow-li:hover .code-img {
  opacity: 1;
  z-index: 1;
  transition: 0.5s opacity cubic-bezier(0.2, 0, 0.2, 1);
}
.footer .follow-tencent .follow-list .follow-li.linkedin {
  background-image: url(./../images/social-linkedin.png);
  background-repeat: no-repeat;
}
.footer .follow-tencent .follow-list .follow-li.linkedin:hover {
  background-image: url(./../images/in-default2x.png);
}
.footer .footer-main {
  border-top: 1px #d8d8d8 solid;
  border-bottom: 1px #d8d8d8 solid;
  display: table;
  width: 100%;
  padding-top: 24px;
  padding-bottom: 8px;
}

.footer .footer-main .footer-tips {
  width: 225px;
  float: left;
}

.footer .footer-main .footer-tips li {
  color: #7f7f7f;
  line-height: 14px;
  margin-bottom: 16px;
  transition: 0.5s color cubic-bezier(0.2, 0, 0.2, 1);
}

.footer .footer-main .footer-tips li:hover a {
  color: #0052d9;
}

.footer .footer-main .footer-tips .tips-title {
  color: #323232;
  font-size: 16px;
  /* letter-spacing: 0.18px; */
  line-height: 16px;
  margin-bottom: 24px;
}

.footer .footer-main .footer-switch {
  float: right;
  position: relative;
}

.footer .footer-main .footer-switch .logo-black {
  margin-bottom: 17px;
}

.footer .footer-main .footer-switch .language-choice {
  opacity: 0\0;
  position: absolute;
  width: 160px;
  right: 0;
  margin-top: -123px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.3);
  -webkit-transform: rotateX(-90deg);
  -ms-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
  -webkit-transform-origin: bottom;
  transform-origin: bottom;
  -webkit-transition: 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.footer .footer-main .footer-switch .language-choice.active {
  opacity: 1\0;
  -webkit-transform: rotateX(0deg);
  transform: rotateX(0deg);
}

.footer .footer-main .footer-switch .language-choice .list {
  width: 160px;
  font-size: 14px;
  color: #333333;
  /* letter-spacing: 0.03px; */
  line-height: 14px;
  background-color: white;
  padding: 0 16px;
  transition: 0.3s all cubic-bezier(0.2, 0, 0.2, 1);
  box-sizing: border-box;
}

.footer .footer-main .footer-switch .language-choice .list:hover {
  background-color: #e6e6e6;
}

.footer .footer-main .footer-switch .language-choice .list a {
  text-align: left;
  width: 100%;
  display: block;
  padding: 16px 0;
  box-sizing: border-box;
}

.footer .footer-main .footer-switch .switch-language {
  position: relative;
  float: right;
}

.footer .footer-main .footer-switch .switch-language .language-arrow-down {
  position: absolute;
  right: 0;
  top: 8px;
  width: 14px;
  height: 14px;
  background: url(../images/arrow-b-bottom.png) no-repeat;
  background-size: 14px;
  transition: 0.5s background cubic-bezier(0.2, 0, 0.2, 1);
}

.footer .footer-main .footer-switch .switch-language .language-txt {
  line-height: 30px;
  cursor: pointer;
  padding-right: 16px;
  transition: 0.5s all cubic-bezier(0.2, 0, 0.2, 1);
  background: url(../images/arrow-b-bottom.png) no-repeat;
  background-position: right center;
  background-size: 14px;
}

.footer .footer-main .footer-switch .switch-language .language-txt.active,
.footer .footer-main .footer-switch .switch-language .language-txt:hover {
  color: #0052d9;
  background-size: 14px;
  background: url(../images/arrow-l-bottom.png) no-repeat;
  background-position: right center;
  background-size: 14px;
}
.footer .footer-copyright {
  padding: 17px 0px 25px;
  /* letter-spacing: 0.16px; */
}

.logo-black {
  width: 229px;
  height: 24px;
  background: url(../images/Tencent-logo-b.png) no-repeat;
  background-size: 100% 100%;
}
.footer .footer-main .footer-switch .logo-black {
  margin-bottom: 17px;
}

.footer .footer-main .footer-switch .language-choice {
  opacity: 0\0;
  position: absolute;
  width: 160px;
  right: 0;
  margin-top: -123px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.3);
  -webkit-transform: rotateX(-90deg);
  -ms-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
  -webkit-transform-origin: bottom;
  transform-origin: bottom;
  -webkit-transition: 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.footer .footer-main .footer-switch .language-choice.active {
  opacity: 1\0;
  -webkit-transform: rotateX(0deg);
  transform: rotateX(0deg);
}

.footer .footer-main .footer-switch .language-choice .list {
  width: 160px;
  font-size: 14px;
  color: #333333;
  /* letter-spacing: 0.03px; */
  line-height: 14px;
  background-color: white;
  padding: 0 16px;
  transition: 0.3s all cubic-bezier(0.2, 0, 0.2, 1);
  box-sizing: border-box;
}

.footer .footer-main .footer-switch .language-choice .list:hover {
  background-color: #e6e6e6;
}

.footer .footer-main .footer-switch .language-choice .list a {
  text-align: left;
  width: 100%;
  display: block;
  padding: 16px 0;
  box-sizing: border-box;
}
</style>
