"use strict";
const common_vendor = require("../common/vendor.js");
const baseUrl = {
  develop: "https://testsc.udmax.cn/stage-api/api",
  trial: "https://testsc.udmax.cn/stage-api/api",
  release: "https://sc.udmax.cn/prod-api/api"
};
function getEnvVersion() {
  var _a;
  const accountInfo = common_vendor.index.getAccountInfoSync();
  return (_a = accountInfo == null ? void 0 : accountInfo.miniProgram) == null ? void 0 : _a.envVersion;
}
const envInfo = () => {
  const env = getEnvVersion();
  const url = baseUrl[env];
  return { env, url };
};
exports.envInfo = envInfo;
