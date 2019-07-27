<template>
  <div
    class="header mobile index-header"
    :class="{'adaption-color':notRow,blue:notRow,fixed:isDown&&!notRow}"
  >
    <div class="max-center">
      <!-- style="background-color: #0052D9" -->
      <div class="header-main">
        <a href="home.html" class="logo"></a>
        <div class="login">
          <div class="login-btn">登录</div>
        </div>
        <div class="mobile-menu"></div>
        <ul class="menu">
          <li class="menu-list">
            <a class="first-list" href="jobopportunity.html">工作机会</a>
          </li>
          <li class="menu-list">
            <a class="first-list" href="citymain.html">工作地点</a>
          </li>
          <li class="menu-list">
            <a href="javascript:;" class="first-list first-list-nav">
              校园招聘
              <div class="first-list-arrow first-list-down"></div>
            </a>
            <ul class="children-menu mobile normal" style="display: none;">
              <img
                alt
                src="https://cdn.multilingualres.hr.tencent.com/tencentcareer/static/images/pop-arrow.png?a317c3eb35832e2e9d62bb59d3a70d61"
                class="pop-arrow"
              />
              <img
                alt
                src="https://cdn.multilingualres.hr.tencent.com/tencentcareer/static/images/pop-arrow-ie.png?5d6b35b01ce030edbd3dd6afa808acc5"
                class="pop-arrow-ie"
              />
              <li class="children-menu-list">
                <a href="campusrecruit.html?nation=china">中国区职位</a>
              </li>
              <li class="children-menu-list">
                <a class="no-bor" href="campusrecruit.html?nation=america">美国区职位</a>
              </li>
            </ul>
          </li>
          <li class="menu-list">
            <a class="first-list" href="productservice.html">产品和服务</a>
          </li>
          <li class="menu-list">
            <a class="first-list" href="welfare.html">生活在腾讯</a>
          </li>
        </ul>
      </div>
      <div class="header-search" :class="{'adaption-color':notRow}">
        <div class="icon-search"></div>
        <div class="search-input-wrapper">
          <input
            maxlength="80"
            type="text"
            class="search-input input-value"
            placeholder="搜索工作岗位"
            :class="{active:isShow}"
            @focus="focus"
            @blur="unfocus"
            @keyup.enter="search"
          />
          <ul class="search-select-ul normal" style="display: none;">
            <li class="search-select-group">
              <ul class="menu-item-group-ul"></ul>
            </li>
          </ul>
        </div>
        <span class="search-btn">查看工作岗位</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myheader",
  props: {
    aws: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false,
      notRow: true,
      isDown: false
    };
  },
  watch: {},
  methods: {
    focus() {
      this.isShow = true;
      this.$store.commit("SdChange");
      // console.log("focus",this.$store.state.SdShow);
    },
    unfocus() {
      this.isShow = false;
      this.$store.commit("SdChange");
      // console.log("unfocus",this.$store.state.SdShow);
    },
    handleScroll() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (!this.aws) {
        scrollTop > 0 ? (this.notRow = false) : (this.notRow = true);
      }
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var scroll = scrollTop - this.i;
      this.i = scrollTop;
      if (scroll < 0) {
        this.isDown = false;
        // console.log("up");
      } else {
        this.isDown = true;
        // console.log("down");
      }
    },
    search() {
      console.log("search");
    },
    awsIsRow() {
      if (this.aws == true) {
        this.notRow = false;
      }
    }
  },
  created() {
    this.awsIsRow();
  },
  mounted: function() {
    window.addEventListener("scroll", this.handleScroll, true); // 监听（绑定）滚轮滚动事件
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll); //  离开页面清除（移除）滚轮滚动事件
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header.fixed {
  position: fixed;
  transform: translateY(-65px);
}
.header {
  position: fixed;
  width: 100%;
  display: table;
  background-color: #ffffff;
  padding-bottom: 16px;
  transform: translateY(0);
  transition: transform 0.25s cubic-bezier(0.2, 0, 0.2, 1),
    background 0.25s cubic-bezier(0.2, 0, 0.2, 1),
    border-bottom 0.25s cubic-bezier(0.2, 0, 0.2, 1);
  z-index: 999;
  box-sizing: border-box;
  border-bottom: 1px solid #e6e6e6;
}
.header.fixed {
  position: fixed;
  transform: translateY(-65px);
}
.index-header.adaption-color {
  background: transparent !important;
  border-color: transparent;
}
.max-center {
  max-width: 1120px;
  min-width: 964px;
  padding: 0 20px;
  margin: 0 auto;
}
.header .header-main {
  display: table;
  width: 100%;
  position: relative;
  z-index: 10;
}
.adaption-color .logo {
  background: url(../images/Tencent-w-logo.png) no-repeat;
  background-size: 100% 100%;
}
.header .logo {
  width: 229px;
  height: 24px;
  background: url(../images/Tencent-logo.png) no-repeat;
  background-size: 100% 100%;
  float: left;
  cursor: pointer;
  margin: 28px 0;
}
.adaption-color .logo {
  background: url(../images/Tencent-w-logo.png) no-repeat;
  background-size: 100% 100%;
}
.blue .logo {
  background: url(../images/Tencent-w-logo.png) no-repeat;
  background-size: 100% 100%;
}
.header .login {
  float: right;
  margin-top: 24px;
  margin-left: 16px;
}
.header.adaption-color .login .login-btn {
  border: 1px solid #ffffff;
  color: white;
}
.header.adaption-color .login .login-btn:hover {
  color: #000;
}
.header .login .login-btn {
  position: relative;
  /* font-family: PingFangSC-Semibold, "microsoft yahei", "PingFang SC", tahoma,
  arial, "helvetica neue", "hiragino sans gb", sans-serif; */
  width: 70px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #323232;
  letter-spacing: 0.07px;
  border: 1px solid #333333;
  cursor: pointer;
  -webkit-transition: all 0.5s cubic-bezier(0.2, 0, 0.2, 1);
  transition: all 0.5s cubic-bezier(0.2, 0, 0.2, 1);
  overflow: hidden;
  font-weight: 600;
}

.header .login .login-btn::after {
  content: "";
  position: absolute;
  left: -3px;
  top: -6px;
  width: 0%;
  height: 140%;
  transform: rotate(8deg);
  background-color: #0052d9;
  z-index: -1;
  transition: 1s background cubic-bezier(0.2, 0, 0.2, 1),
    1s width cubic-bezier(0.2, 0, 0.2, 1);
}
.header.adaption-color .login .login-btn::after {
  content: "";
  position: absolute;
  left: -3px;
  top: -6px;
  width: 0%;
  height: 140%;
  transform: rotate(8deg);
  background-color: #ffffff;
  z-index: -1;
  transition: 1s background cubic-bezier(0.2, 0, 0.2, 1) 1s width
    cubic-bezier(0.2, 0, 0.2, 1);
}
.header .login .login-btn:hover::after {
  width: 110%;
}
.header .menu {
  float: right;
  margin: 20px 0px 10px;
  color: #333333;
}
.header .menu .menu-list {
  float: left;
  position: relative;
  z-index: 1;
  margin: 0 16px;
  /* letter-spacing: 0.07px; */
  padding: 10px 0px;
}

.header .menu .menu-list .first-list {
  line-height: 20px;
  padding-bottom: 8px;
  display: block;
  border-bottom: 1px transparent solid;
  -webkit-transition: all 0.35s cubic-bezier(0.2, 0, 0.2, 1);
  transition: all 0.35s cubic-bezier(0.2, 0, 0.2, 1);
  position: relative;
}
.header .menu .menu-list:hover .first-list {
  color: #0052d9;
}
.header.adaption-color .menu .menu-list .first-list {
  color: white;
  border-bottom: 1px solid transparent;
}
.header .menu .menu-list .first-list::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  height: 1px;
  width: 0%;
  color: #0052d9;
  border-bottom: 1px #0052d9 solid;
  transform-origin: left;
  /* transform: rotateY(90deg); */
  transition: 1s width cubic-bezier(0.2, 0, 0.2, 1);
}
.header.adaption-color .menu .menu-list .first-list::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  height: 1px;
  width: 0%;
  color: #0052d9;
  border-bottom: 1px solid white;
  /* transform: rotateY(90deg); */
  transition: 1s width cubic-bezier(0.2, 0, 0.2, 1);
}
.header.adaption-color .menu .menu-list:hover .first-list::after {
  width: 100%;
}
.header .menu .menu-list:hover .first-list::after {
  width: 100%;
}
.header .menu .menu-list:hover {
  -webkit-transition: all 0.5s cubic-bezier(0.2, 0, 0.2, 1);
  transition: all 0.5s cubic-bezier(0.2, 0, 0.2, 1);
}

.container .search-input-wrapper .search-select-ul,
.menu .children-menu {
  display: block;
}
.children-menu.normal {
  animation: dropDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  -webkit-animation: dropDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}
.header .menu .menu-list .first-list .first-list-arrow {
  position: absolute;
  right: -20px;
  top: 1px;
  width: 18px;
  height: 18px;
}
.header .menu .menu-list .first-list .first-list-down {
  background-image: url(./../images/arrow-b-bottom.png);
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: center;
}
.header.adaption-color .menu .menu-list .first-list .first-list-down {
  background-image: url(./../images/arrow-w-down.png);
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: center;
}
.header .menu .menu-list .first-list {
  line-height: 20px;
  padding-bottom: 8px;
  display: block;
  border-bottom: 1px transparent solid;
  -webkit-transition: all 0.35s cubic-bezier(0.2, 0, 0.2, 1);
  transition: all 0.35s cubic-bezier(0.2, 0, 0.2, 1);
  position: relative;
}
.header .menu .menu-list .first-list-nav {
  margin-right: 26px;
}
.header.adaption-color .menu .menu-list .first-list {
  color: white;
  border-bottom: 1px solid transparent;
}
.header .menu .menu-list a {
  color: #323232;
}
.header .header-search {
  width: 100%;
  height: 48px;
  background-color: #efefef;
  position: relative;
}

.adaption-color .header-search {
  background-color: rgba(0, 0, 0, 0.06);
}

.adaption-color.header .header-search .icon-search {
  background-image: url(./../images/search-w-icon.png);
  background-repeat: no-repeat;
  background-size: 21px 21px;
}
.header .header-search .icon-search {
  position: absolute;
  left: 15px;
  top: 50%;
  margin-top: -10px;
  width: 21px;
  height: 21px;
  background-image: url(./../images/search.png);
  background-repeat: no-repeat;
  background-size: 21px 21px;
  cursor: pointer;
  transition: 0.5s background cubic-bezier(0.2, 0, 0.2, 1);
}

.header .header-search .search-input {
  line-height: 48px;
  height: 48px;
  padding-left: 48px;
  padding-right: 150px;
  display: block;
  width: 100%;
  box-sizing: border-box;
}
.header .header-search .input-value {
  font-size: 16px;
  color: #333333;
  /* letter-spacing: 0.03px; */
  border: 1px solid transparent;
  transition: 0.5s all cubic-bezier(0.2, 0, 0.2, 1);
}

.blue .search-input.input-value {
  border: 1px solid transparent;
  /* background-color: #004bc7; */
}
.adaption-color .header-search .search-input {
  color: white;
}

.adaption-color .header-search .search-input.input-value.active {
  border-color: white;
}
.header .header-search .search-btn {
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 0;
  line-height: 18px;
  margin: 14px 0;
  color: #0052d9;
  /* letter-spacing: 0.07px; */
  transition: 0.5s color cubic-bezier(0.2, 0, 0.2, 1);
  padding-right: 14px;
  /* font-family: PingFangSC-Semibold, 'microsoft yahei', 'PingFang SC', tahoma, arial, 'helvetica neue', 'hiragino sans gb', sans-serif; */
  font-size: 16px;
  font-weight: 600;
}
.header.adaption-color .search-btn {
  color: white;
}
.header .header-search .search-btn:hover {
  color: #4c90ff;
}
.header.adaption-color .header-search .search-btn:hover {
  color: white;
}
.header.adaption-color .header-search .search-btn:after {
  background-image: url(./../images/side-w-right.png);
  background-size: 12px 12px;
}
.header .header-search .search-btn:hover:after {
  /* right: -6px; */
  transform: translateX(6px);
  background-image: url(./../images/side-w-right.png);
  background-size: 12px 12px;
}
.header .header-search .search-btn:after {
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
.header .header-search .search-btn:hover:after {
  /* right: -6px; */
  transform: translateX(6px);
  background-image: url(./../images/side-right-hover.png);
  background-size: 12px 12px;
}
.header.adaption-color .header-search .search-btn:after {
  background-image: url(./../images/side-w-right.png);
  background-size: 12px 12px;
}
</style>
