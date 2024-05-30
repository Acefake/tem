"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  _easycom_u_button2();
}
const _easycom_u_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  _easycom_u_button();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const { toast } = common_vendor.inject("$utils");
    function demo() {
      toast.msg("Hello World!");
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(demo),
        b: common_vendor.p({
          type: "primary"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/shimengshuai/项目/project/tem/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
