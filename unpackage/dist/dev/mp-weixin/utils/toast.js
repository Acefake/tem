"use strict";
const common_vendor = require("../common/vendor.js");
const toast = {
  // 消息提示
  msg(content) {
    common_vendor.index.showToast({
      title: content,
      icon: "none"
    });
  },
  // 错误消息
  msgError(content) {
    common_vendor.index.showToast({
      title: content,
      icon: "error"
    });
  },
  // 成功消息
  msgSuccess(content) {
    common_vendor.index.showToast({
      title: content,
      icon: "success"
    });
  },
  // 隐藏消息
  hideMsg(content) {
    common_vendor.index.hideToast();
  },
  // 弹出提示
  alert(content, title) {
    common_vendor.index.showModal({
      title: title || "系统提示",
      content,
      showCancel: false
    });
  },
  // 确认窗体
  confirm(content, title) {
    return new Promise((resolve, reject) => {
      common_vendor.index.showModal({
        title: title || "系统提示",
        content,
        cancelText: "取消",
        confirmText: "确定",
        success: function(res) {
          if (res.confirm) {
            resolve(res.confirm);
          }
        }
      });
    });
  },
  // 提示信息
  showToast(option) {
    if (typeof option === "object") {
      common_vendor.index.showToast(option);
    } else {
      common_vendor.index.showToast({
        title: option,
        icon: "none",
        duration: 2500
      });
    }
  },
  // 打开遮罩层
  loading(content) {
    common_vendor.index.showLoading({
      title: content,
      icon: "none"
    });
  },
  // 关闭遮罩层
  closeLoading() {
    common_vendor.index.hideLoading();
  }
};
exports.toast = toast;
