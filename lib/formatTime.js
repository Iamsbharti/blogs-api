const moment = require("moment");
const momentTz = require("moment-timezone");
const timeZone = "Asia/Calcutta";

exports.now = function () {
  return moment.utc().format();
};
exports.getLocalTime = function () {
  return moment().tz(timeZone).format();
};
exports.convertToLocalTime = function (time) {
  return momentTz.tz(time, timeZone).format("LLLL");
};
