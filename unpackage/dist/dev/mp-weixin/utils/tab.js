"use strict";
const common_vendor = require("../common/vendor.js");
const tab = {
  // 关闭所有页面，打开到应用内的某个页面
  reLaunch(url) {
    return common_vendor.index.reLaunch({
      url
    });
  },
  /**
   * 跳转tabbar页面，并关闭其他所有非tabbar页面
   * @param {*} url
   * @returns
   */
  switchTab(url) {
    return common_vendor.index.switchTab({
      url
    });
  },
  // 关闭当前页面，跳转到应用内的某个页面
  redirectTo(url) {
    return common_vendor.index.redirectTo({
      url
    });
  },
  // 保留当前页面，跳转到应用内的某个页面
  navigateTo(url) {
    return common_vendor.index.navigateTo({
      url
    });
  },
  // 关闭当前页面，返回上一页面或多级页面
  navigateBack() {
    return common_vendor.index.navigateBack();
  }
};
exports.tab = tab;
