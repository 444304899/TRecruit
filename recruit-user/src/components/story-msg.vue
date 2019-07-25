<template>
  <div class="story-message-wrapper">
    <div class="message-header message-header-four">
      <div class="max-center">
        <div class="header-text">员工故事</div>
      </div>
    </div>
    <div class="max-center">
      <div class="story-message g-clr">
        <ul class="story-message-list">
          <li class="story-message-item item-left">
            <div class="item-info">
              <div
                class="story-message-bg one"
                style="background-image: url(&quot;https://cdn.multilingualres.hr.tencent.com/careersmlr/story_xiaokun.jpg&quot;);"
              ></div>
              <div class="story-text-wrapper">
                <div class="text-wrapper-relative">
                  <div class="story-user">Xiaokun</div>
                  <div class="story-title">如果提前了解要面对的人生是否有勇气前来？</div>
                  <div class="story-text">
                    <p class="text-paragraph">
                      <strong>起点：潘基文的新演讲 style</strong>
                      <br />
                      <span>进可提笔书豪情，退可埋头改方案。Xiaokun 有足够的自信和勇气，在新的旅途上，播种更多，收获更多。如果提前...</span>
                    </p>
                  </div>
                  <div class="story-more-wrapper">
                    <a href="javascript:;" class="story-link">
                      <p class="link-text">了解更多</p>
                    </a>
                    <div class="story-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="story-message-item item-right">
            <div class="item-info">
              <div
                class="story-message-bg two"
                style="background-image: url(&quot;https://cdn.multilingualres.hr.tencent.com/careersmlr/story_vidaweng.jpg&quot;);"
              ></div>
              <div class="story-text-wrapper">
                <div class="text-wrapper-relative">
                  <div class="story-user">Vida</div>
                  <div class="story-title">雄关漫道真如铁，而今迈步从头越</div>
                  <div class="story-text">
                    <p class="text-paragraph">
                      <span>Vida 的故事其实很简单，一个离开鹅厂创业又回到鹅厂的故事。但 Vida 却感谢这一段历程，因为曾经走过的每一步对人生来说都有着意想不到的意义。 2015 年的中国互联网，全民创业的热潮方兴未艾。已在鹅厂工作了两年的 Vida，也同校2015 年的中国互联网，全民创业的热潮方兴未艾。已在鹅厂工作了两年的 Vida，也同校</span>
                    </p>
                  </div>
                  <div class="story-more-wrapper">
                    <a href="javascript:;" class="story-link">
                      <p class="link-text">了解更多</p>
                      <span class="link-icon icon-arrow-right"></span>
                    </a>
                    <div class="story-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .story-message-wrapper .story-message-item.item-left {
    float: left;
}

.story-message-wrapper .story-message-item {
    position: relative;
    width: 47.858%;
    box-shadow: 0 8px 13px 0 rgba(0, 0, 0, 0.06);
}
.story-message-wrapper .story-message-item .item-info {
    height: 480px;
    background-color: white;
}
.story-message-wrapper .story-message-item .story-message-bg.one {
    /* background: url(./../images/story-bg-1.jpg); */
    background-size: cover;
}
.story-message-wrapper .story-message-item .story-message-bg {
    height: 280px;
}
.story-message-wrapper .story-message-item .story-text-wrapper {
    cursor: pointer;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 91.045%;
    height: 256px;
    background: white;
    padding: 32px 32px 40px;
    box-sizing: border-box;
    margin: 0 auto;
    box-sizing: border-box;
    transition: .3s height;
}

.story-message-wrapper .story-message-item .story-text-wrapper:hover {
    height: 360px;
}

.story-message-wrapper .story-message-item .story-text {
    opacity: 0;
}

.story-message-wrapper .story-message-item .story-text-wrapper:hover .story-text {
    opacity: 1;
    transition: 1s opacity cubic-bezier(0.2, 0.0, 0.2, 1);
}
.text-wrapper-relative {
    position: relative;
    height: 100%;
}
.story-message-wrapper .story-text-wrapper .story-user {
    font-size: 16px;
    color: #808080;
    /* letter-spacing: 0; */
    line-height: 16px;
    margin-bottom: 12px;
}
.story-message-wrapper .story-text-wrapper .story-title {
    /* font-family: PingFangSC-Semibold, 'microsoft yahei', 'PingFang SC', tahoma, arial, 'helvetica neue', 'hiragino sans gb', sans-serif; */
    font-size: 24px;
    color: #343434;
    /* letter-spacing: 0.01px; */
    line-height: 36px;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 600;
}

.story-link {
    display: inline-block;
}

.story-message-wrapper .story-text-wrapper .story-link .link-text {
    position: relative;
    display: inline-block;
    /* font-family: PingFangSC-Semibold, 'microsoft yahei', 'PingFang SC', tahoma, arial, 'helvetica neue', 'hiragino sans gb', sans-serif; */
    font-size: 16px;
    color: #0052D9;
    /* letter-spacing: 0.08px; */
    line-height: 18px;
    transition: .5s color cubic-bezier(0.2, 0, 0.2, 1);
    font-weight: 600;
}

.story-message-wrapper .story-text-wrapper .story-link .link-text:hover {
    color: #4C90FF;
}

.story-message-wrapper .story-text-wrapper .story-link .link-text::after {
    content: "";
    position: absolute;
    right: -18px;
    top: 50%;
    margin-top: -7px;
    width: 14px;
    height: 14px;
    display: inline-block;
    background: url(../images/arrow-right-blue.png) no-repeat;
    background-size: cover;
    transition: .5s all cubic-bezier(0.2, 0.0, 0.2, 1);
}

.story-message-wrapper .story-text-wrapper .story-link .link-text:hover::after {
    background: url(../images/arrow-right-hover.png) no-repeat;
    background-size: cover;
}

.story-message-wrapper .story-text-wrapper .story-line {
    width: 100%;
    height: 2px;
    margin-top: 32px;
    transition: .5s background cubic-bezier(0.2, 0.0, 0.2, 1);
}
.story-message-item .text-paragraph {
    font-size: 14px;
    color: #343434;
    /* letter-spacing: 0.01px; */
    line-height: 24px;
    transition: .3s all cubic-bezier(0.2, 0.0, 0.2, 1);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
.story-more-wrapper {
    position: absolute;
    width: 100%;
    bottom: 0;
}
.story-message-wrapper .story-text-wrapper .story-link {
    position: relative;
}
.story-message-wrapper .story-message-item.item-right {
    float: right;
}
.story-message-wrapper .story-message-item .story-message-bg.two {
    /* background: url(./../images/story-bg-2.jpg); */
    background-size: cover;
}
</style>
