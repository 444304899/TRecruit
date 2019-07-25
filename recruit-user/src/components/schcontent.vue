<template>
  <div class="content mobile g-clr">
    <div class="shadow-bg" :class="{active:this.$store.state.SdShow}"></div>
    <div class="header-seat"></div>
    <div class="main max-center g-clr">
      <div class="search-sidebar">
        <div class="sidebar-title">过滤条件</div>
        <div class="option-wrapper">
          <div class="option-item">
            <div class="item-text">
              <a href="javascript:;" class="item-link">国家/地区</a>
              <div class="open-btn">
                <div class="vertical-btn"></div>
                <div class="transverse-btn"></div>
              </div>
            </div>
            <ul class="item-ul" style="padding-top: 20px;display:none">
              <li class="item-li-box">
                <div class="checkbox-content">
                  <div class="item-li">中国</div>
                </div>
              </li>
              <li class="item-li-box">
                <div class="checkbox-content">
                  <div class="item-li">美国</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="option-item">
            <div class="item-text" :class="{nomarl:isOpen,active:!isOpen}" @click="openList">
              <a href="javascript:;" class="item-link">城市</a>
              <div class="open-btn">
                <div class="vertical-btn"></div>
                <div class="transverse-btn"></div>
              </div>
            </div>
            <div
              class="current-selection"
              style="padding-top: 20px;transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;overflow: hidden;"
              :style="displ"
            >
              <div class="search-input">
                <input maxlength="20" type="text" class="item-link search" />
                <!---->
                <i class="search-icon"></i>
              </div>
              <p class="tips" style="display: none;">75条关于""的结果</p>
              <p class="tips active">&nbsp;</p>
              <ul class="city-selection">
                <li class="item-li-box">
                  <div class="checkbox-content">
                    <div class="item-li">深圳</div>
                  </div>
                </li>
                <li class="item-li-box">
                  <div class="checkbox-content">
                    <div class="item-li">北京</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="option-item">
            <div class="item-text active">
              <a href="javascript:;" class="item-link">职业类别</a>
              <div class="open-btn">
                <div class="vertical-btn"></div>
                <div class="transverse-btn"></div>
              </div>
            </div>
            <ul class="item-ul" style="padding-top: 20px;">
              <li class="classification technology">
                <div class="item-li technology-category active">
                  <div class="classification-text">技术</div>
                </div>
                <div class="classification-item technology-item">
                  <ul class="second-menu">
                    <li class="item-li-box">
                      <div class="checkbox-content">
                        <div class="item-li active">技术研发类</div>
                      </div>
                    </li>
                    <li class="item-li-box">
                      <div class="checkbox-content">
                        <div class="item-li active">质量管理类</div>
                      </div>
                    </li>
                    <li class="item-li-box">
                      <div class="checkbox-content">
                        <div class="item-li active">技术运营类</div>
                      </div>
                    </li>
                    <li class="item-li-box">
                      <div class="checkbox-content">
                        <div class="item-li active">安全技术类</div>
                      </div>
                    </li>
                    <li class="item-li-box">
                      <div class="checkbox-content">
                        <div class="item-li active">AI、算法与大数据</div>
                      </div>
                    </li>
                    <li class="item-li-box">
                      <div class="checkbox-content">
                        <div class="item-li active">企管类</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="classification technology">
                <div class="item-li technology-category">
                  <div class="classification-text">设计</div>
                </div>
                <div class="classification-item technology-item">
                  <ul class="second-menu">
                    <li class="item-li-box">
                      <div class="checkbox-content">
                        <div class="item-li">设计类</div>
                      </div>
                    </li>
                    <li class="item-li-box">
                      <div class="checkbox-content">
                        <div class="item-li">游戏美术类</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="classification technology">
                <div class="item-li technology-category">
                  <div class="classification-text">产品</div>
                </div>
                <div class="classification-item technology-item">
                  <ul class="second-menu">
                    <li class="item-li-box">
                      <div class="checkbox-content">
                        <div class="item-li">产品类</div>
                      </div>
                    </li>
                    <li class="item-li-box">
                      <div class="checkbox-content">
                        <div class="item-li">游戏产品类</div>
                      </div>
                    </li>
                    <li class="item-li-box">
                      <div class="checkbox-content">
                        <div class="item-li">项目类</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="classification technology">
                <div class="item-li technology-category">
                  <div class="classification-text">营销与公关</div>
                </div>
                <!---->
              </li>
              <li class="classification technology">
                <div class="item-li technology-category">
                  <div class="classification-text">销售、服务与支持</div>
                </div>
                <div class="classification-item technology-item">
                  <ul class="second-menu">
                    <li class="item-li-box">
                      <div class="checkbox-content">
                        <div class="item-li">销售类</div>
                      </div>
                    </li>
                    <li class="item-li-box">
                      <div class="checkbox-content">
                        <div class="item-li">客服类</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="classification technology">
                <div class="item-li technology-category">
                  <div class="classification-text">内容</div>
                </div>
                <!---->
              </li>
              <li class="classification technology">
                <div class="item-li technology-category">
                  <div class="classification-text">财务</div>
                </div>
                <!---->
              </li>
              <li class="classification technology">
                <div class="item-li technology-category">
                  <div class="classification-text">人力资源</div>
                </div>
                <!---->
              </li>
              <li class="classification technology">
                <div class="item-li technology-category">
                  <div class="classification-text">法务</div>
                </div>
                <!---->
              </li>
              <li class="classification technology">
                <div class="item-li technology-category">
                  <div class="classification-text">行政支持</div>
                </div>
                <!---->
              </li>
              <li class="classification technology">
                <div class="item-li technology-category">
                  <div class="classification-text">战略与投资</div>
                </div>
                <!---->
              </li>
            </ul>
          </div>
          <div class="option-item">
            <div class="item-text">
              <a href="javascript:;" class="item-link">事业群</a>
              <div class="open-btn">
                <div class="vertical-btn"></div>
                <div class="transverse-btn"></div>
              </div>
            </div>
            <ul class="item-ul" style="padding-top: 20px; display: none;">
              <li class="item-li-box">
                <div class="checkbox-content">
                  <div class="item-li">CDG企业发展事业群</div>
                </div>
              </li>
              <li class="item-li-box">
                <div class="checkbox-content">
                  <div class="item-li">CSIG云与智慧产业事业群</div>
                </div>
              </li>
              <li class="item-li-box">
                <div class="checkbox-content">
                  <div class="item-li">IEG互动娱乐事业群</div>
                </div>
              </li>
              <li class="item-li-box">
                <div class="checkbox-content">
                  <div class="item-li">PCG平台与内容事业群</div>
                </div>
              </li>
              <li class="item-li-box">
                <div class="checkbox-content">
                  <div class="item-li">WXG微信事业群</div>
                </div>
              </li>
              <li class="item-li-box">
                <div class="checkbox-content">
                  <div class="item-li">TEG技术工程事业群</div>
                </div>
              </li>
              <li class="item-li-box">
                <div class="checkbox-content">
                  <div class="item-li">S1职能系统－职能线</div>
                </div>
              </li>
              <li class="item-li-box">
                <div class="checkbox-content">
                  <div class="item-li">S2职能系统－财经线</div>
                </div>
              </li>
              <li class="item-li-box">
                <div class="checkbox-content">
                  <div class="item-li">S3职能系统－HR与管理线</div>
                </div>
              </li>
              <li class="item-li-box">
                <div class="checkbox-content">
                  <div class="item-li">腾讯音乐</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="option-item last">
            <div class="item-text">
              <a href="javascript:;" class="item-link">招聘类型</a>
              <div class="open-btn">
                <div class="vertical-btn"></div>
                <div class="transverse-btn"></div>
              </div>
            </div>
            <ul class="item-ul" style="padding-top: 20px; display: none;">
              <li class="item-li-box">
                <div class="checkbox-content">
                  <div class="item-li">社招</div>
                </div>
              </li>
              <li class="item-li-box">
                <div class="checkbox-content">
                  <div class="item-li">校招应届生</div>
                </div>
              </li>
              <li class="item-li-box">
                <div class="checkbox-content">
                  <div class="item-li">校招实习生</div>
                </div>
              </li>
              <li class="item-li-box">
                <div class="checkbox-content">
                  <div class="item-li">校招MBA</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <searchlist></searchlist>
    </div>
  </div>
</template>

<script>
import searchList from "@/components/searchList.vue";
export default {
  name: "schcontent",
  components: {
    searchlist: searchList
  },
  data() {
    return {
      msg: 1,
      isOpen: true,
      displ:
        "display:none;padding-top:0px;height:0px;padding-bottom:0px"
    };
  },
  methods: {
    openList() {
      this.isOpen = !this.isOpen;
      if (
        this.displ ==
        "display:none;padding-top:0px;height:0px;padding-bottom:0px"
      ) {
        this.displ = "display:block;";
      } else {
        this.displ =
          "display:none;padding-top:0px;height:0px;padding-bottom:0px";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.content .header-seat {
  padding-bottom: 144px;
  /* transition: .25s ease; */
}
.max-center {
  max-width: 1120px;
  min-width: 964px;
  padding: 0 20px;
  margin: 0 auto;
}
.content .search-sidebar {
  margin-bottom: 32px;
}
.content .search-sidebar {
  display: inline-block;
  width: 25.715%;
  margin-right: 2.75%;
  margin-top: 32px;
  transition: 0.3s margin cubic-bezier(0.2, 0, 0.2, 1);
}
.content .search-sidebar .sidebar-title {
  font-size: 22px;
  color: #333333;
  /* letter-spacing: 0.04px; */
  line-height: 22px;
}
.content .search-sidebar .option-wrapper {
  margin-top: 24px;
  padding: 0 24px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 3px 0 #d8d8d8\0;
}
.content .search-sidebar .option-wrapper .option-item {
  font-size: 20px;
  color: #333333;
  /* letter-spacing: 0.04px; */
  line-height: 20px;
  padding: 24px 0;
  border-bottom: 1px solid #d8d8d8;
}
.content .search-sidebar .option-wrapper .item-text {
  position: relative;
  cursor: pointer;
}
.content .search-sidebar .option-wrapper .item-link {
  display: block;
}
.content .search-sidebar .option-wrapper .item-text .open-btn {
  cursor: pointer;
  position: absolute;
  width: 12px;
  height: 12px;
  right: 0;
  top: 4px;
}
.content .search-sidebar .option-wrapper .item-text .vertical-btn {
  position: absolute;
  right: 5px;
  top: 0px;
  width: 2px;
  height: 12px;
  background-color: #323232;
}
.content .search-sidebar .option-wrapper .item-text .transverse-btn {
  position: absolute;
  right: 0px;
  top: 5px;
  width: 12px;
  height: 2px;
  background-color: #323232;
}
.content .search-sidebar .option-wrapper .item-ul {
  display: block;
  padding-top: 20px;
  margin-top: 0;
}
.content .search-sidebar .option-wrapper .item-text .open-btn {
  cursor: pointer;
  position: absolute;
  width: 12px;
  height: 12px;
  right: 0;
  top: 4px;
}
.content .search-sidebar .option-wrapper .item-text.active .vertical-btn {
  animation: rotateVerticalGo 0.5s cubic-bezier(0.2, 0, 0.2, 1) forwards;
}
.content .search-sidebar .option-wrapper .item-text.active .transverse-btn {
  animation: rotateTransverseGo 0.5s cubic-bezier(0.2, 0, 0.2, 1) forwards;
}
.content .search-sidebar .option-wrapper .item-text .transverse-btn {
  position: absolute;
  right: 0px;
  top: 5px;
  width: 12px;
  height: 2px;
  background-color: #323232;
}
.content .search-sidebar .option-wrapper .classification {
  margin-bottom: 14px;
}
.content .search-sidebar .option-wrapper .item-li {
  position: relative;
  display: inline-block;
  font-size: 16px;
  color: #333333;
  /* letter-spacing: 0.03px; */
  line-height: 20px;
  padding-left: 28px;
  box-sizing: border-box;
  cursor: pointer;
}
.content .search-sidebar .option-wrapper .item-li.active::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 0;
  width: 16px;
  height: 16px;
  display: inline-block;
  background: url(./../images/Checkbox_selected2x.png) no-repeat;
  background-size: 100% 100%;
}
.content .search-sidebar .option-wrapper .classification-item {
  padding-left: 28px;
  margin-top: 10px;
}
.content .search-sidebar .option-wrapper .item-li-box:first-child {
  margin-top: 0;
}
.content .search-sidebar .option-wrapper .second-menu .item-li-box {
  margin-top: 8px;
}
.content .search-sidebar .option-wrapper .item-li-box .checkbox-content {
  display: inline-block;
}
.content .search-sidebar .option-wrapper .item-li {
  position: relative;
  display: inline-block;
  font-size: 16px;
  color: #333333;
  /* letter-spacing: 0.03px; */
  line-height: 20px;
  padding-left: 28px;
  box-sizing: border-box;
  cursor: pointer;
}
.content .search-sidebar .option-wrapper .item-li::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 0;
  width: 16px;
  height: 16px;
  display: block;
  background: url(./../images/Rectangle-22x.png) no-repeat;
  background-size: 100% 100%;
  transition: background 0.4s cubic-bezier(0.2, 0, 0.2, 1);
}
.content .search-sidebar .option-wrapper .item-li-box {
  margin-top: 14px;
}
.container .content .search-sidebar .option-wrapper .current-selection {
  margin-top: 0;
  display: block;
}
.content .search-sidebar .option-wrapper .current-selection .search-input {
  position: relative;
}
.content .search-sidebar .option-wrapper .current-selection .item-link.search {
  width: 100%;
  font-size: 16px;
  color: #333333;
  border: 1px solid #333333;
  padding: 9px 0 9px 16px;
  line-height: 20px;
  box-sizing: border-box;
  padding-right: 33%;
  transition: 0.5s border cubic-bezier(0.2, 0, 0.2, 1);
}
.content .search-sidebar .option-wrapper .current-selection .search-icon {
  display: block;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 7%;
  cursor: pointer;
  background: url(../images/search.png) no-repeat;
  background-size: 20px 20px;
  transition: 0.5s all cubic-bezier(0.2, 0, 0.2, 1);
}
.content .search-sidebar .option-wrapper .current-selection .search-icon:hover {
  background: url(../images/search-blue.png) no-repeat;
  background-size: 20px 20px;
}
.content .search-sidebar .option-wrapper .tips {
  display: none;
  font-size: 12px;
  color: #808080;
  line-height: 20px;
}
.content .search-sidebar .option-wrapper .tips {
  display: none;
  font-size: 12px;
  color: #808080;
  line-height: 20px;
}
.content .search-sidebar .option-wrapper .tips.active {
  display: block;
}
.content .search-sidebar .option-wrapper .current-selection .city-selection {
  max-height: 280px;
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
}
@keyframes rotateVerticalGo {
  0% {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }

  100% {
    transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
  }
}
@keyframes rotateTransverseGo {
  0% {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }

  100% {
    transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
  }
}

@-webkit-keyframes rotateTransverseGo {
  0% {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }

  100% {
    transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
  }
}
@-webkit-keyframes rotateTransverseBack {
  0% {
    transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
  }

  100% {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
}

@keyframes rotateTransverseBack {
  0% {
    transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
  }

  100% {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
}
</style>
