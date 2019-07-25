<template>
  <div class="max-center">
    <div class="info-list-wrapper g-clr">
      <ul class="info-list">
        <li class="info-item">
          <div class="info-icon info-icon-1" :class="{active:icoHover}" @mouseenter="enterico(1)">
            <!-- @mouseleave="lvico" -->
            <div class="info-animation-icon4"></div>
            <div class="info-animation-icon5"></div>
          </div>
          <div class="info-message">
            <div class="info-title">智慧连接，美好生活</div>
            <div class="info-underline-blue"></div>
            <div class="info-text">腾讯长期致力于社交平台与数字内容两大核心业务，积极拥抱产业互联网，努力成为各行各业数字化助手，通过连接，提升每一个人的生活品质。</div>
          </div>
        </li>
        <li class="info-item">
          <div class="info-icon info-icon-2" :class="{active:ico2Hover}" @mouseenter="enterico(2)"></div>
          <div class="info-message">
            <div class="info-title">用行动关心你的成长</div>
            <div class="info-underline-green"></div>
            <div class="info-text">这里有着富有挑战和影响力的工作内容，完备的职业培训和晋升体系，以及灵活的内部转岗机制，引领你发现更多可能。</div>
          </div>
        </li>
        <li class="info-item">
          <div class="info-icon info-icon-3" :class="{active:ico3Hover}" @mouseenter="enterico(3)">
            <div class="info-icon-item">
              <div class="info-icon-item-1"></div>
            </div>
          </div>
          <div class="info-message">
            <div class="info-title">迎接每个特别的你</div>
            <div class="info-underline-violet"></div>
            <div class="info-text">自由包容的文化氛围让你自由发展，你的声音会被认真聆听，在这里，你遇到的不只是同事，更是并肩成长的伙伴。</div>
          </div>
        </li>
        <li class="info-item last">
          <div class="info-icon info-icon-4" :class="{active:ico4Hover}" @mouseenter="enterico(4)">
            <div class="info-animation-icon1"></div>
            <div class="info-animation-icon2"></div>
          </div>
          <div class="info-message">
            <div class="info-title">福利关怀浸透你的生活</div>
            <div class="info-underline-orange"></div>
            <div
              class="info-text"
            >你的努力会被铭记，你的付出会被真诚对待，舒适与科技融合的办公环境，极具竞争力的薪酬和激励体系，完善和个性化员工福利，只为回报你的尽心拼搏。</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "",
  props: {
    msg: String
  },
  data() {
    return {
      icoHover: false,
      ico2Hover: false,
      ico3Hover: false,
      ico4Hover: false,
      timer: "",
      timer2: "",
      timer3: "",
      timer4: ""
    };
  },
  methods: {
    enterico(n) {
      var that = this;
      this.timer = "";
      this.timer2 = "";
      this.timer3 = "";
      this.timer4 = "";
      switch (n) {
        case 1:
          this.icoHover = true;
          this.timer = setTimeout(function() {
            that.icoHover = false;
            console.log(this.icoHover);
          }, 5000);
          break;
        case 2:
          this.ico2Hover = true;
          this.timer2 = setTimeout(function() {
            that.ico2Hover = false;
          }, 5000);
          break;
        case 3:
          this.ico3Hover = true;
          this.timer3 = setTimeout(function() {
            that.ico3Hover = false;
          }, 5000);
          break;
        case 4:
          this.ico4Hover = true;
          this.timer4 = setTimeout(function() {
            that.ico4Hover = false;
          }, 5000);
          break;
        default:
          console.log(n);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.max-center {
  max-width: 1120px;
  min-width: 964px;
  padding: 0 20px;
  margin: 0 auto;
}
.g-clr {
  zoom: 1;
}
.info-list-wrapper .info-item {
  float: left;
  width: 22.9%;
  max-width: 256px;
  margin-right: 2.412%;
}
.info-list-wrapper .info-item .info-icon {
  position: relative;
  width: 64px;
  height: 64px;
  background-repeat: no-repeat;
  background-size: 56px 56px;
  background-position: center;
  margin-bottom: 16px;
}
.info-list-wrapper .info-item .info-icon-1 {
  background-image: url(./../images/index-icon-1.png);
}
.info-list-wrapper .info-item .info-icon-1 .info-animation-icon4 {
  opacity: 0;
  width: 24px;
  height: 24px;
  position: absolute;
  background: url(./../images/index-circle-2.png);
  border-radius: 50%;
  background-color: white;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transform-origin: center;
  transform: translate(55px, -15px);
}
.info-list-wrapper .info-item .info-icon-1::after {
  content: "";
  display: block;
  width: 64px;
  height: 37px;
  position: absolute;
  top: 13px;
  left: 0;
  background-image: url(./../images/arc-1.png);
  background-repeat: no-repeat;
  background-size: 52px 37px;
  background-position: 6px;
}
.info-list-wrapper .info-item .info-icon-1 .info-animation-icon4 {
  opacity: 0;
  width: 24px;
  height: 24px;
  position: absolute;
  background: url(./../images/index-circle-2.png);
  border-radius: 50%;
  background-color: white;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transform-origin: center;
  transform: translate(55px, -15px);
}
.info-list-wrapper .info-item .info-icon-1 .info-animation-icon5 {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 5px;
  left: 35px;
  background: url(./../images/index-circle-2.png);
  border-radius: 50%;
  background-color: white;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.info-list-wrapper .info-item .info-icon-1.active .info-animation-icon4 {
  animation: indexIcon1-1 5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.info-list-wrapper .info-item .info-icon-1.active .info-animation-icon5 {
  animation: indexIcon1 5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.info-list-wrapper .info-item .info-icon-1.active::after {
  animation: indexIcon1-2 5s cubic-bezier(0.2, 0, 0.2, 1) forwards;
}
.info-list-wrapper .info-item .info-icon-1 .info-animation-icon5 {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 5px;
  left: 35px;
  background: url(./../images/index-circle-2.png);
  border-radius: 50%;
  background-color: white;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.info-list-wrapper .info-message .info-title {
  /* font-family: PingFangSC-Semibold, 'microsoft yahei', 'PingFang SC', tahoma, arial, 'helvetica neue', 'hiragino sans gb', sans-serif; */
  font-size: 24px;
  color: #323232;
  /* letter-spacing: 0.12px; */
  line-height: 32px;
  margin-bottom: 16px;
  font-weight: 600;
}
.info-list-wrapper .info-message .info-underline-blue {
  height: 2px;
  background: #00a9ce;
  margin-bottom: 16px;
}
.info-list-wrapper .info-message .info-text {
  font-size: 14px;
  color: #666666;
  /* letter-spacing: 0; */
  line-height: 24px;
}
.info-list-wrapper .info-item.last {
  margin-right: 0;
}
.info-list-wrapper .info-item .info-icon-2.active {
  /* transform: rotate(360deg); */
  animation: rotateIcon2 5s cubic-bezier(0, 0, 0, 1) forwards;
}
.info-list-wrapper .info-item .info-icon-2 {
  background-image: url(./../images/index-icon-2.png);
  transition: 5s transform cubic-bezier(0, 0, 0, 1);
}
.info-list-wrapper .info-message .info-underline-green {
  height: 2px;
  background: #79c000;
  margin-bottom: 18px;
}
.info-list-wrapper .info-item .info-icon-3 {
  position: relative;
}
.info-list-wrapper .info-item .info-icon-3 .info-icon-item {
  position: absolute;
  width: 44px;
  height: 44px;
  border: 4px solid #0052d9;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}
.info-list-wrapper .info-item .info-icon-3.active .info-icon-item-1 {
  animation: iconMove3 5s cubic-bezier(0.2, 0, 0.2, 1);
}
.info-list-wrapper .info-item .info-icon-3 .info-icon-item-1 {
  position: absolute;
  top: 4px;
  left: -5px;
  width: 163px;
  height: 215px;
  background-image: url(./../images/border-radius.png);
  background-size: 163px 215px;
}
.info-list-wrapper .info-message .info-underline-violet {
  height: 2px;
  background: #9b26b6;
  margin-bottom: 18px;
}
.info-list-wrapper .info-item .info-icon-4 {
  position: relative;
  background-image: url(./../images/index-icon-1.png);
}
.info-list-wrapper .info-item .info-icon {
  position: relative;
  width: 64px;
  height: 64px;
  background-repeat: no-repeat;
  background-size: 56px 56px;
  background-position: center;
  margin-bottom: 16px;
}
.info-list-wrapper .info-item .info-icon-4::before {
  content: "";
  opacity: 0;
  display: block;
  position: absolute;
  top: 23px;
  left: 10px;
  width: 12px;
  height: 12px;
  border: 4px solid #ff671f;
  border-radius: 50%;
  transform-origin: left;
}
.info-list-wrapper .info-item .info-icon-4 .info-animation-icon1 {
  opacity: 0;
  position: absolute;
  top: 10px;
  left: 21px;
  width: 12px;
  height: 12px;
  border: 4px solid #ff671f;
  border-radius: 50%;
  transform-origin: top;
}
.info-list-wrapper .info-item .info-icon-4.active .info-animation-icon1 {
  animation: indexIcon2 4.6s cubic-bezier(0, 0, 0, 1) forwards;
}
.info-list-wrapper .info-item .info-icon-4 .info-animation-icon2 {
  opacity: 0;
  position: absolute;
  top: 14px;
  left: 14px;
  width: 30px;
  height: 30px;
  border: 4px solid #ff671f;
  border-radius: 50%;
  transform-origin: 80% 100%;
}
.info-list-wrapper .info-item .info-icon-4.active .info-animation-icon2 {
  animation: indexIcon3 4.6s cubic-bezier(0, 0, 0, 1) forwards;
}
.info-list-wrapper .info-item .info-icon-4::after {
  content: "";
  display: block;
  position: absolute;
  top: 23px;
  left: 10px;
  width: 12px;
  height: 12px;
  border: 4px solid #ff671f;
  border-radius: 50%;
  transform-origin: left;
}
.info-list-wrapper .info-item .info-icon-4.active:after {
  animation: indexIcon2-1 4.6s cubic-bezier(0, 0, 0, 1) forwards;
}
.info-list-wrapper .info-message .info-underline-orange {
  height: 2px;
  background: #ff671f;
  margin-bottom: 18px;
}
@keyframes indexIcon1-1 {
  0% {
    opacity: 0;
    transform: translate(55px, -15px);
  }

  33% {
    opacity: 0;
    transform: translate(55px, -15px);
  }

  50% {
    opacity: 0;
    transform: translate(55x, -15px);
  }

  54% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform: scale(1) translate(35px, 5px);
  }
}
@keyframes indexIcon1-2 {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(7deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

@keyframes indexIcon1 {
  0% {
    opacity: 1;
    transform: scale(1) translate(0, 0);
  }

  26% {
    opacity: 1;
  }

  30% {
    opacity: 0;
  }

  33% {
    opacity: 0;
    transform: scale(0.5) translate(-80px, 78px);
  }

  66% {
    transform: scale(0);
  }

  100% {
    opacity: 0;
    transform: scale(0) translate(-80px, 78px);
  }
}
@keyframes rotateIcon2 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
@keyframes iconMove3 {
  0% {
    transform: translate(0px, 0px);
  }

  50% {
    transform: translate(-39px, -68px);
  }

  100% {
    transform: translate(-78px, -135px);
  }
}
@keyframes indexIcon3 {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  33% {
    transform: scale(0);
    opacity: 0;
  }

  66% {
    transform: scale(0.9);
    opacity: 1;
  }

  100% {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes indexIcon2-1 {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  33% {
    opacity: 0;
    transform: scale(0);
  }
  66% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes indexIcon2 {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  33% {
    opacity: 1;
    transform: scale(1);
  }
  66% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}
</style>
