module.exports = function () {
  return function (value, object, index, array, callback) {
    value = parseInt(value.replace(/[^0-9]/ig,''), 10) || 0
    callback(null, value)
  }
}