<template>
  <div class="banner-swiper">
    <div class="circle-animation">
      <ul class="circle-animation-list">
        <li class="circle-li" @click="btn(0)">
          <div class="circle-wrapper-ground" :class="{icoshow:isShow==0||isShow==3}">
            <div class="circle-left-wrapper circle-wrapper">
              <div class="circle-left"></div>
            </div>
            <div class="circle-right-wrapper circle-wrapper">
              <div class="circle-right"></div>
            </div>
          </div>
        </li>
        <li class="circle-li" @click="btn(1)">
          <div class="circle-wrapper-ground" :class="{icoshow:isShow==1}">
            <div class="circle-left-wrapper circle-wrapper">
              <div class="circle-left"></div>
            </div>
            <div class="circle-right-wrapper circle-wrapper">
              <div class="circle-right"></div>
            </div>
          </div>
        </li>
        <li class="circle-li" @click="btn(2)">
          <div class="circle-wrapper-ground" :class="{icoshow:isShow==2}">
            <div class="circle-left-wrapper circle-wrapper">
              <div class="circle-left"></div>
            </div>
            <div class="circle-right-wrapper circle-wrapper">
              <div class="circle-right"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="swiper-container banner-container">
      <div
        class="swiper-wrapper"
        style="width: 500vw; height: 600px;  transition-duration: 1s;"
        :class="{showvideo:isShow==0,showvideotwo:isShow==3,showimgone:isShow==1,showimgtwo:isShow==2}"
      >
        <!-- transform: translate3d(0px, 0px, 0px); -->
        <div
          data-url="jobcategory.html?module=home_banner&amp;key=2000&amp;language=zh-cn"
          data-eventid="home_banner_zhCN_2000"
          data-isplay="false"
          class="swiper-slide swiper-slide-duplicate"
          style="width: 100vw; height: 600px;"
        >
          <a href="javascript:;" class="banner-link"></a>
          <div class="swiper-img">
            <img
              src="https://cdn.multilingualres.hr.tencent.com/careersmlr/dengta.jpg"
              alt
              class="swiper-bg-2"
            />
          </div>
        </div>
        <div class="swiper-slide" style="width: 100vw; height: 600px;">
          <div id="banner-video1" class="video-wrapper">
            <video
              width="100%"
              autoplay="autoplay"
              loop="loop"
              preload
              muted="muted"
              class="video1 video"
              src="https://cdn.multilingualres.hr.tencent.com/careersmlr/video-bg1.mp4"
            ></video>
            <div class="video-text-wrapper">
              <div class="video-text" style="font-size: 56px;">让世界看到你的影响力</div>
              <div class="video-btn1"></div>
            </div>
          </div>
        </div>
        <div
          data-url="jobcategory.html?module=home_banner&amp;key=1000&amp;language=zh-cn"
          data-eventid="home_banner_zhCN_1000"
          data-isplay="false"
          class="swiper-slide"
          style="width: 100vw; height: 600px;"
        >
          <a href="javascript:;" class="banner-link"></a>
          <div class="swiper-img">
            <img
              src="https://cdn.multilingualres.hr.tencent.com/careersmlr/tvideo.jpg"
              alt
              class="swiper-bg-2"
            />
          </div>
        </div>
        <div
          data-url="jobcategory.html?module=home_banner&amp;key=2000&amp;language=zh-cn"
          data-eventid="home_banner_zhCN_2000"
          data-isplay="false"
          class="swiper-slide swiper-slide-visible swiper-slide-active"
          style="width: 100vw; height: 600px;"
        >
          <a href="javascript:;" class="banner-link"></a>
          <div class="swiper-img">
            <img
              src="https://cdn.multilingualres.hr.tencent.com/careersmlr/dengta.jpg"
              alt
              class="swiper-bg-2"
            />
          </div>
        </div>
        <div class="swiper-slide swiper-slide-duplicate" style="width: 100vw; height: 600px;">
          <div id="banner-video1" class="video-wrapper">
            <video
              width="100%"
              autoplay="autoplay"
              loop="loop"
              preload
              muted="muted"
              class="video1 video"
              src="https://cdn.multilingualres.hr.tencent.com/careersmlr/video-bg1.mp4"
            ></video>
            <div class="video-text-wrapper">
              <div class="video-text" style="font-size: 56px;">让世界看到你的影响力</div>
              <div class="video-btn1"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination">
        <span class="swiper-pagination-switch"></span>
        <span class="swiper-pagination-switch"></span>
        <span class="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span>
      </div>
      <div class="max-center">
        <div class="prev-wrapper">
          <div class="prev-btn" @click="yesterday"></div>
        </div>
        <div class="next-wrapper">
          <div class="next-btn" @click="tomorrow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
  },
  data() {
    return {
      isShow: 0,
      timer: ""
    };
  },
  methods: {
    autoplay() {
      this.isShow == 3 ? (this.isShow = 1) : this.isShow++;
    },
    yesterday() {
      this.timer="";
      this.timer = setInterval(this.tomorrow, 6000);
      this.isShow == 0 ? (this.isShow = 3) : this.isShow--;
    },
    tomorrow() {
      this.timer="";
      this.timer = setInterval(this.tomorrow, 6000);
      this.isShow == 3 ? (this.isShow = 1) : this.isShow++;
    },
    btn(n) {
      this.timer="";
      console.log("定时器关闭");
      this.isShow = n;
      this.timer = setInterval(this.tomorrow, 6000);
      console.log("定时器启动");
    }
  },
  created() {
    this.timer = setInterval(this.autoplay, 6000);
  },
  destroyed() {
    this.timer = "";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: inherit;
}
audio,
canvas,
video {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}
.banner-swiper {
  position: relative;
}
.a-swiper .circle-animation,
.banner-swiper .circle-animation {
  position: absolute;
  bottom: 38px;
  bottom: 37.5px\0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0;
  height: auto;
  z-index: 3;
  text-align: center;
  box-sizing: border-box;
}
.circle-animation .circle-animation-list {
  display: inline-block;
  margin-top: 16px;
  margin-left: 1px\0;
}
.circle-animation .circle-li {
  cursor: pointer;
  position: relative;
  float: left;
  width: 12px;
  height: 12px;
  margin: 0 5px;
}
.circle-wrapper-ground {
  display: none;
  width: 12px;
  height: 12px;
}
.circle-left-wrapper {
  left: 0;
}
.circle-wrapper {
  position: absolute;
  top: 0;
  width: 6px;
  height: 12px;
  overflow: hidden;
}
.circle-left {
  width: 8px;
  height: 8px;
  position: absolute;
  left: 0;
  border-radius: 50%;
  border-top: 2px solid #0052d9;
  border-right: 2px solid #0052d9;
  border-bottom: 2px solid transparent;
  border-left: 2px solid transparent;
  transform: rotate(45deg);
  animation: rotate 2s linear 2s forwards;
  -webkit-animation: rotate 2s linear 2s forwards;
}
.circle-right-wrapper {
  right: 0px;
}

.banner-swiper .circle-li .circle-right {
  animation: rotate1 3s linear forwards;
}
.circle-right {
  width: 8px;
  height: 8px;
  position: absolute;
  right: 0px;
  border-top: 2px solid transparent;
  border-right: 2px solid transparent;
  border-bottom: 2px solid #0052d9;
  border-left: 2px solid #0052d9;
  border-radius: 50%;
  transform: rotate(45deg);
  animation: rotate 2s linear forwards;
  -webkit-animation: rotate 2s linear forwards;
}
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1;
}
.banner-container {
  height: 600px;
}
.swiper-container {
  height: 600px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1;
}
.swiper-container.swiper-parent .swiper-container,
.swiper-container .swiper-slide,
.swiper-container .swiper-wrapper,
.swiper-container.swiper-parent {
  width: 100%;
  height: 100%;
  transition: 1s transform cubic-bezier(0.2, 0, 0.2, 1),
    1s top cubic-bezier(0.2, 0, 0.2, 1);
}

.banner-link {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.swiper-slide {
  float: left;
}
.swiper-container .swiper-slide .swiper-img {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
}
.swiper-container .swiper-slide .swiper-bg-2 {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2560px;
  height: 600px;
  margin-left: -1280px;
  background: url(../images/bannerSw-2.jpg) no-repeat;
  background-size: cover;
}

.video-wrapper {
  width: 100%;
  /* float: left; */
  margin-right: -100%;
  position: relative;
  left: 0;
  opacity: 1;
  display: block;
  z-index: 2;
  height: 600px;
  overflow: hidden;
  transition: left 1s cubic-bezier(0.2, 0, 0.2, 1);
  background: black;
}
.video1 {
  width: 2560px;
  height: 600px;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -1280px;
}
.video-text-wrapper {
  text-align: center;
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  margin-top: 36px;
}
.video-text-wrapper .video-text {
  font-family: tencentFont, "microsoft yahei", "PingFang SC", tahoma, arial,
    "helvetica neue", "hiragino sans gb", sans-serif;
  font-size: 72px;
  color: #ffffff;
  text-align: center;
  line-height: 72px;
}
.video-text-wrapper .video-btn1 {
  cursor: pointer;
  margin-top: 32px;
  display: inline-block;
  width: 40px;
  height: 40px;
  background-image: url(../images/video-icon1.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.banner-swiper .swiper-pagination {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}
.banner-swiper .swiper-pagination-switch {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 5px;
  opacity: 0.8;
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background-size: 12px 12px;
  border-radius: 50%;
}
.max-center {
  max-width: 1120px;
  min-width: 964px;
  padding: 0 20px;
  margin: 0 auto;
}
.banner-container .prev-wrapper {
  position: absolute;
  top: 50%;
  padding: 10px;
  left: 8.333%;
  margin-top: -22px;
  cursor: pointer;
  width: 48px;
  height: 48px;
  outline: none;
  z-index: 2;
}
.banner-container .prev-btn {
  width: 48px;
  height: 48px;
  background-image: url(./../images/arrow-w-left.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 24px 24px;
  transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1);
}
.banner-container .next-wrapper {
  position: absolute;
  top: 50%;
  padding: 10px;
  margin-top: -22px;
  right: 8.333%;
  cursor: pointer;
  width: 48px;
  height: 48px;
  outline: none;
  z-index: 2;
}
.banner-container .next-btn {
  width: 48px;
  height: 48px;
  background-image: url(./../images/arrow-w-right.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 24px 24px;
  transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1),
    border 0.3s cubic-bezier(0.2, 0, 0.2, 1);
}
.banner-swiper::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 144px;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 1%,
    rgba(0, 0, 0, 0.15) 59%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 10;
}
.banner-swiper .circle-li .circle-left {
  animation: rotate 3s linear 3s forwards;
}
.showimgone {
  transform: translate3d(-200vw, 0px, 0px);
}
/* -2698px */
.showimgtwo {
  transform: translate3d(-300vw, 0px, 0px);
}
/* -4047px */
.showvideo {
  transform: translate3d(-100vw, 0px, 0px);
}
.showvideotwo {
  transform: translate3d(-400vw, 0px, 0px);
}
/* -5396px /-1349px */
.icoshow {
  display: block;
}
@keyframes rotate {
  0% {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  100% {
    transform: rotate(225deg);
    -webkit-transform: rotate(225deg);
  }
}

@-webkit-keyframes rotate {
  0% {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  100% {
    transform: rotate(224deg);
    -webkit-transform: rotate(224deg);
  }
}

@keyframes rotate1 {
  0% {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  100% {
    transform: rotate(225deg);
    -webkit-transform: rotate(225deg);
  }
}

@-webkit-keyframes rotate1 {
  0% {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  100% {
    transform: rotate(225deg);
    -webkit-transform: rotate(225deg);
  }
}
</style>
