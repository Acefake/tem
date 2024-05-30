"use strict";
const utils_is_empty = require("./is_empty.js");
const utils_dict = require("./dict.js");
const utils_env = require("./env.js");
const utils_toast = require("./toast.js");
const utils = {
  isEmpty: utils_is_empty.isEmpty,
  envInfo: utils_env.envInfo,
  getDict: utils_dict.getDict,
  toast: utils_toast.toast
};
exports.utils = utils;
