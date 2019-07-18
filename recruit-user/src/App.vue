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
</style>
