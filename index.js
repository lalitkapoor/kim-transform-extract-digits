module.exports = function (def) {
  return function (value, object, array, callback) {
    value = parseInt(value.replace(/[^0-9]/ig,''), 10)
    if (isNaN(value)) value = def
    callback(null, value)
  }
}
