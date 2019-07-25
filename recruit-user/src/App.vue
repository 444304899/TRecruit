<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
div {
  outline: none;
}

p,
a,
div,
span {
  vertical-align: middle;
  font-family: inherit;
}
body {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
  font-size: 14px;
  line-height: 1;
  font-family: "SF Pro SC", "SF Pro Display", "Segoe UI", SegoeUI,
    "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica",
    "segoe-ui_normal", sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  position: relative;
  color: #323232;
  background-color: #f7f7f7;
  height: 100%;
  letter-spacing: -0.035em;
}
ul,
dl,
ol {
  list-style: none;
}
a,
a:visited,
a:hover {
  text-decoration: none;
  -webkit-touch-callout: none;
}
a,
button,
input,
select,
textarea {
  border: none;
  outline: none;
  text-decoration: none;
  -webkit-touch-callout: none;
  font-family: inherit;
  background: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
input,
textarea,
select,
button,
label {
  font-size: 100%;
  font-weight: normal;
  vertical-align: middle;
  font-family: inherit;
}
.app {
  min-height: 100%;
  height: auto;
  /* height: 100%; */
  position: relative;
  overflow: hidden;
}
.g-clr {
  zoom: 1;
}
.g-clr:after {
  display: block;
  visibility: hidden;
  clear: both;
  height: 0;
  content: ".";
}
</style>
