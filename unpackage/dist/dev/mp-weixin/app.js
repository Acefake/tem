"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const utils_index = require("./utils/index.js");
const utils_env = require("./utils/env.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages-login/pages/login/index.js";
  "./pages-login/pages/phone-login/index.js";
}
const _sfc_main = {
  __name: "App",
  setup(__props) {
    common_vendor.provide("$utils", utils_index.utils);
    console.log("全局方法：", utils_index.utils);
    return () => {
    };
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/shimengshuai/项目/project/tem/App.vue"]]);
function initAPP() {
  const env = utils_env.envInfo();
  common_vendor.index.getSystemInfo({
    success: (res) => {
      console.log(
        `%c${res.appName} ${res.appVersion} 当前环境：${env.env} `,
        "background: #4faf70; color: #fff; padding: 4px; border-radius: 4px; font-size: 10px;text-align: center;line-height: 10px"
      );
    }
  });
}
function createApp() {
  const app = common_vendor.createSSRApp(App);
  initAPP();
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
