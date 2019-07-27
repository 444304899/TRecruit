<template>
  <div class="content mobile g-clr">
    <div class="shadow-bg" :class="{active:this.$store.state.SdShow}"></div>
    <div class="header-seat"></div>
    <div class="main max-center g-clr">
      <div class="search-sidebar">
        <div class="sidebar-title">过滤条件</div>
        <div class="option-wrapper">
          <div class="option-item">
            <div
              class="item-text"
              :class="{nomarl:CountryisOpen,active:!CountryisOpen}"
              @click="openList('Country')"
            >
              <a href="javascript:;" class="item-link">国家/地区</a>
              <div class="open-btn">
                <div class="vertical-btn"></div>
                <div class="transverse-btn"></div>
              </div>
            </div>
            <ul class="item-ul" style="padding-top: 20px;display:block" :style="Countrydispl">
              <el-checkbox-group v-model="checkList">
                <li class="item-li-box">
                  <div class="checkbox-content" @change="add('中国')">
                    <el-checkbox label="中国" class="item-li" ></el-checkbox>
                  </div>
                </li>
                <li class="item-li-box">
                  <div class="checkbox-content" @change="add('美国')">
                    <el-checkbox label="美国" class="item-li"></el-checkbox>
                  </div>
                </li>
              </el-checkbox-group>
            </ul>
          </div>
          <div class="option-item">
            <div
              class="item-text"
              :class="{nomarl:CityisOpen,active:!CityisOpen}"
              @click="openList('City')"
            >
              <a href="javascript:;" class="item-link">城市</a>
              <div class="open-btn">
                <div class="vertical-btn"></div>
                <div class="transverse-btn"></div>
              </div>
            </div>
            <div class="current-selection" :style="Citydispl">
              <div class="search-input">
                <input maxlength="20" type="text" class="item-link search" />
                <!---->
                <i class="search-icon"></i>
              </div>
              <p class="tips" style="display: none;">75条关于""的结果</p>
              <p class="tips active">&nbsp;</p>
              <ul class="city-selection">
                <el-checkbox-group v-model="checkList">
                  <li class="item-li-box">
                    <div class="checkbox-content">
                      <el-checkbox label="深圳" class="item-li"></el-checkbox>
                    </div>
                  </li>
                  <li class="item-li-box">
                    <div class="checkbox-content">
                      <el-checkbox label="北京" class="item-li"></el-checkbox>
                    </div>
                  </li>
                </el-checkbox-group>
              </ul>
            </div>
          </div>
          <div class="option-item">
            <div
              class="item-text"
              :class="{nomarl:ProfessionalisOpen,active:!ProfessionalisOpen}"
              @click="openList('Professional')"
            >
              <a href="javascript:;" class="item-link">职业类别</a>
              <div class="open-btn">
                <div class="vertical-btn"></div>
                <div class="transverse-btn"></div>
              </div>
            </div>
            <ul class="item-ul" style="padding-top: 20px;" :style="Professionaldispl">
              <el-checkbox-group v-model="checkList">
                <li class="classification technology">
                  <el-checkbox
                    :indeterminate="isIndeterminate1"
                    v-model="checkAllJishu"
                    @change="handleCheckAllChangeJishu"
                    class="item-li"
                  >技术</el-checkbox>
                  <div style="margin: 15px 0;"></div>
                  <el-checkbox-group
                    v-model="checkedCities"
                    @change="handleCheckedCitiesChange"
                    class="classification-item"
                  >
                    <ul class="second-menu">
                      <el-checkbox
                        v-for="city in cities"
                        :label="city"
                        :key="city"
                        class="item-li-box"
                        style="display:block"
                      >
                        <!-- <li class="item-li-box"> -->
                        <div class="checkbox-content">
                          <div class="item-li">{{city}}</div>
                        </div>
                        <!-- </li> -->
                      </el-checkbox>
                    </ul>
                  </el-checkbox-group>
                </li>
                <li class="classification technology">
                  <el-checkbox
                    :indeterminate="isIndeterminate2"
                    v-model="checkAllDesigns"
                    @change="handleCheckAllChangeDesign"
                    class="item-li"
                  >设计</el-checkbox>
                  <div style="margin: 15px 0;"></div>
                  <el-checkbox-group
                    v-model="checkedDesigns"
                    @change="handleCheckedDesignsChange"
                    class="classification-item"
                  >
                    <ul class="second-menu">
                      <el-checkbox
                        v-for="design in designs"
                        :label="design"
                        :key="design"
                        class="item-li-box"
                        style="display:block"
                      >
                        <!-- <li class="item-li-box"> -->
                        <div class="checkbox-content">
                          <div class="item-li">{{design}}</div>
                        </div>
                        <!-- </li> -->
                      </el-checkbox>
                    </ul>
                  </el-checkbox-group>
                </li>
                <li class="classification technology">
                  <el-checkbox
                    :indeterminate="isIndeterminate3"
                    v-model="checkAllProducts"
                    @change="handleCheckAllChangeProduct"
                    class="item-li"
                  >产品</el-checkbox>
                  <div style="margin: 15px 0;"></div>
                  <el-checkbox-group
                    v-model="checkedProducts"
                    @change="handleCheckedProductsChange"
                    class="classification-item"
                  >
                    <ul class="second-menu">
                      <el-checkbox
                        v-for="product in products"
                        :label="product"
                        :key="product"
                        class="item-li-box"
                        style="display:block"
                      >
                        <!-- <li class="item-li-box"> -->
                        <div class="checkbox-content">
                          <div class="item-li">{{product}}</div>
                        </div>
                        <!-- </li> -->
                      </el-checkbox>
                    </ul>
                  </el-checkbox-group>
                </li>
                <li class="classification technology">
                  <div class="item-li technology-category">
                    <el-checkbox label="营销与公关" class="classification-text"></el-checkbox>
                  </div>
                </li>
                <li class="classification technology">
                  <el-checkbox
                    :indeterminate="isIndeterminate4"
                    v-model="checkAllSales"
                    @change="handleCheckAllChangeSale"
                    class="item-li"
                  >销售、服务与支持</el-checkbox>
                  <div style="margin: 15px 0;"></div>
                  <el-checkbox-group
                    v-model="checkedSales"
                    @change="handleCheckedSalesChange"
                    class="classification-item"
                  >
                    <ul class="second-menu">
                      <el-checkbox
                        v-for="sale in sales"
                        :label="sale"
                        :key="sale"
                        class="item-li-box"
                        style="display:block"
                      >
                        <!-- <li class="item-li-box"> -->
                        <div class="checkbox-content">
                          <div class="item-li">{{sale}}</div>
                        </div>
                        <!-- </li> -->
                      </el-checkbox>
                    </ul>
                  </el-checkbox-group>
                </li>
                <li class="classification technology">
                  <div class="item-li technology-category">
                    <el-checkbox label="内容" class="classification-text"></el-checkbox>
                  </div>
                </li>
                <li class="classification technology">
                  <div class="item-li technology-category">
                    <el-checkbox label="财务" class="classification-text"></el-checkbox>
                  </div>
                </li>
                <li class="classification technology">
                  <div class="item-li technology-category">
                    <el-checkbox label="人力资源" class="classification-text"></el-checkbox>
                  </div>
                </li>
                <li class="classification technology">
                  <div class="item-li technology-category">
                    <el-checkbox label="法务" class="classification-text"></el-checkbox>
                  </div>
                </li>
                <li class="classification technology">
                  <div class="item-li technology-category">
                    <el-checkbox label="行政支持" class="classification-text"></el-checkbox>
                  </div>
                </li>
                <li class="classification technology">
                  <div class="item-li technology-category">
                    <el-checkbox label="战略与投资" class="classification-text"></el-checkbox>
                  </div>
                </li>
              </el-checkbox-group>
            </ul>
          </div>
          <div class="option-item">
            <div
              class="item-text"
              :class="{nomarl:EnterpriseisOpen,active:!EnterpriseisOpen}"
              @click="openList('Enterprise')"
            >
              <a href="javascript:;" class="item-link">事业群</a>
              <div class="open-btn">
                <div class="vertical-btn"></div>
                <div class="transverse-btn"></div>
              </div>
            </div>
            <ul class="item-ul" style="padding-top: 20px;" :style="Enterprisedispl">
              <el-checkbox-group v-model="checkList">
                <li class="item-li-box">
                  <div class="checkbox-content">
                    <el-checkbox label="CDG企业发展事业群" class="item-li"></el-checkbox>
                  </div>
                </li>
                <li class="item-li-box">
                  <div class="checkbox-content">
                    <el-checkbox label="CSIG云与智慧产业事业群" class="item-li"></el-checkbox>
                  </div>
                </li>
                <li class="item-li-box">
                  <div class="checkbox-content">
                    <el-checkbox label="IEG互动娱乐事业群" class="item-li"></el-checkbox>
                  </div>
                </li>
                <li class="item-li-box">
                  <div class="checkbox-content">
                    <el-checkbox label="PCG平台与内容事业群" class="item-li"></el-checkbox>
                  </div>
                </li>
                <li class="item-li-box">
                  <div class="checkbox-content">
                    <el-checkbox label="WXG微信事业群" class="item-li"></el-checkbox>
                  </div>
                </li>
                <li class="item-li-box">
                  <div class="checkbox-content">
                    <el-checkbox label="TEG技术工程事业群" class="item-li"></el-checkbox>
                  </div>
                </li>
                <li class="item-li-box">
                  <div class="checkbox-content">
                    <el-checkbox label="S1职能系统－职能线" class="item-li"></el-checkbox>
                  </div>
                </li>
                <li class="item-li-box">
                  <div class="checkbox-content">
                    <el-checkbox label="S2职能系统－财经线" class="item-li"></el-checkbox>
                  </div>
                </li>
                <li class="item-li-box">
                  <div class="checkbox-content">
                    <el-checkbox label="S3职能系统－HR与管理线" class="item-li"></el-checkbox>
                  </div>
                </li>
                <li class="item-li-box">
                  <div class="checkbox-content">
                    <el-checkbox label="腾讯音乐" class="item-li"></el-checkbox>
                  </div>
                </li>
              </el-checkbox-group>
            </ul>
          </div>
          <div class="option-item last">
            <div
              class="item-text"
              :class="{nomarl:RecruitmentisOpen,active:!RecruitmentisOpen}"
              @click="openList('Recruitment')"
            >
              <a href="javascript:;" class="item-link">招聘类型</a>
              <div class="open-btn">
                <div class="vertical-btn"></div>
                <div class="transverse-btn"></div>
              </div>
            </div>
            <ul class="item-ul" style="padding-top: 20px;" :style="Recruitmentdispl">
              <el-checkbox-group v-model="checkList">
                <li class="item-li-box">
                  <div class="checkbox-content">
                    <el-checkbox label="社招" class="item-li"></el-checkbox>
                  </div>
                </li>
                <li class="item-li-box">
                  <div class="checkbox-content">
                    <el-checkbox label="校招应届生" class="item-li"></el-checkbox>
                  </div>
                </li>
                <li class="item-li-box">
                  <div class="checkbox-content">
                    <el-checkbox label="校招实习生" class="item-li"></el-checkbox>
                  </div>
                </li>
                <li class="item-li-box">
                  <div class="checkbox-content">
                    <el-checkbox label="校招MBA" class="item-li"></el-checkbox>
                  </div>
                </li>
              </el-checkbox-group>
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
const cityOptions = [
    "技术研发类",
    "质量管理类",
    "技术运营类",
    "安全技术类",
    "AI、算法与大数据",
    "企管类"
  ],
  designs = ["设计类", "游戏美术类"],
  products = ["产品类", "游戏产品类", "项目类"],
  sales = ["销售类", "客服类"];
const dspln = "display:none;padding-top:0px;height:0px;padding-bottom:0px",
  dsplb = "display:block;padding-top:20px";
export default {
  name: "schcontent",
  components: {
    searchlist: searchList
  },
  data() {
    return {
      msg: 1,
      CityisOpen: true,
      Citydispl: dspln,
      CountryisOpen: true,
      Countrydispl: dspln,
      ProfessionalisOpen: true,
      Professionaldispl: dspln,
      EnterpriseisOpen: true,
      Enterprisedispl: dspln,
      RecruitmentisOpen: true,
      Recruitmentdispl: dspln,
      checkAllJishu: false,
      checkedCities: [],
      checkList: [],
      cities: cityOptions,
      checkAllDesigns: false,
      checkedDesigns: [],
      designs,
      checkAllProducts: false,
      checkedProducts: [],
      products,
      checkAllSales: false,
      checkedSales: [],
      sales,
      isIndeterminate1: false,
      isIndeterminate2: false,
      isIndeterminate3: false,
      isIndeterminate4: false
    };
  },
  methods: {
    openList(w) {
      if (w == "City") {
        this.CityisOpen = !this.CityisOpen;
        if (this.Citydispl == dspln) {
          this.Citydispl = dsplb;
        } else {
          this.Citydispl = dspln;
        }
      } else if (w == "Country") {
        this.CountryisOpen = !this.CountryisOpen;
        if (this.Countrydispl == dspln) {
          this.Countrydispl = dsplb;
        } else {
          this.Countrydispl = dspln;
        }
      } else if (w == "Professional") {
        this.ProfessionalisOpen = !this.ProfessionalisOpen;
        if (this.Professionaldispl == dspln) {
          this.Professionaldispl = dsplb;
        } else {
          this.Professionaldispl = dspln;
        }
      } else if (w == "Enterprise") {
        this.EnterpriseisOpen = !this.EnterpriseisOpen;
        if (this.Enterprisedispl == dspln) {
          this.Enterprisedispl = dsplb;
        } else {
          this.Enterprisedispl = dspln;
        }
      } else if (w == "Recruitment") {
        this.RecruitmentisOpen = !this.RecruitmentisOpen;
        if (this.Recruitmentdispl == dspln) {
          this.Recruitmentdispl = dsplb;
        } else {
          this.Recruitmentdispl = dspln;
        }
      }
    },
    handleCheckAllChangeJishu(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate1 = false;
    },
    handleCheckAllChangeDesign(val) {
      this.checkedDesigns = val ? designs : [];
      this.isIndeterminate2 = false;
    },
    handleCheckAllChangeProduct(val) {
      this.checkedProducts = val ? products : [];
      this.isIndeterminate3 = false;
    },
    handleCheckAllChangeSale(val) {
      this.checkedSales = val ? sales : [];
      this.isIndeterminate4 = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAllJishu = checkedCount === this.cities.length;
      this.isIndeterminate1 =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    handleCheckedDesignsChange(value) {
      let checkedCount = value.length;
      this.checkAllDesigns = checkedCount === this.designs.length;
      this.isIndeterminate2 =
        checkedCount > 0 && checkedCount < this.designs.length;
    },
    handleCheckedProductsChange(value) {
      let checkedCount = value.length;
      this.checkAllProducts = checkedCount === this.products.length;
      this.isIndeterminate3 =
        checkedCount > 0 && checkedCount < this.products.length;
    },
    handleCheckedSalesChange(value) {
      let checkedCount = value.length;
      this.checkAllSales = checkedCount === this.sales.length;
      this.isIndeterminate4 =
        checkedCount > 0 && checkedCount < this.sales.length;
    },
    add(val){
      console.log(val);
      let arr = this.$store.state.SelectedList;
      for (let i in arr) {
        if(arr[i]==val){
          this.$store.commit('delSelectedList',i)
          return;
        }
      };
      this.$store.commit('addSelectedList',val);
    },
    clog(val, ev){
      var a = arguments;
      console.log(a);
      ev.stopPropagation();
      
      return false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-checkbox__label {
  font-size: 16px;
}
.el-checkbox__input .el-checkbox__inner {
  content: "";
  position: absolute;
  top: 4px;
  left: 0;
  width: 16px;
  height: 16px;
  display: block;
  background: url(./../images/Rectangle-22x.png) no-repeat;
  background-size: 100% 100%;
  transition: background 0.4s cubic-bezier(0.2, 0, 0.2, 1);
  border: none;
}
.el-checkbox .el-checkbox__label {
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
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #fff;
  border-color: #fff;
  content: "";
  position: absolute;
  top: 4px;
  left: 0;
  width: 16px;
  height: 16px;
  display: inline-block;
  background: url(./../images/Checkbox_selected2x.png) no-repeat;
  background-size: 100% 100%;
}
.el-checkbox .el-checkbox__input {
  display: inline-block;
  position: absolute;
}
.el-checkbox__inner .el-checkbox__original {
  opacity: 0;
  outline: 0;
  /* position: absolute; */
  margin: 0;
  width: 0;
  height: 0;
  z-index: -1;
}
.el-checkbox__inner::after {
  display: none;
}
.is-checked .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #333333;
}
</style>

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
  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out,
    0.3s padding-bottom ease-in-out;
  overflow: hidden;
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
.content .search-sidebar .option-wrapper .item-text.nomarl .vertical-btn {
  animation: rotateVerticalBack 0.5s cubic-bezier(0.2, 0, 0.2, 1) forwards;
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
  /* padding-left: 28px; */
  box-sizing: border-box;
  cursor: pointer;
}
.content .search-sidebar .option-wrapper .item-li-box {
  margin-top: 14px;
}
.content .search-sidebar .option-wrapper .current-selection {
  margin-top: 0;
  display: block;
  padding-top: 20px;
  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out,
    0.3s padding-bottom ease-in-out;
  overflow: hidden;
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
@-webkit-keyframes rotateVerticalGo {
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
@-webkit-keyframes rotateVerticalBack {
  0% {
    transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
  }

  100% {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
}

@keyframes rotateVerticalBack {
  0% {
    transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
  }

  100% {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
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
