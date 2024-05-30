"use strict";
const isEmpty = (value) => {
  if (value === null || value === void 0)
    return true;
  if (typeof value === "string" && value.trim().length === 0)
    return true;
  if (Array.isArray(value) && value.length === 0)
    return true;
  if (typeof value === "object" && Object.keys(value).length === 0)
    return true;
  return false;
};
exports.isEmpty = isEmpty;
