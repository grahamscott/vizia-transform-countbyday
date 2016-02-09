var moment = require('moment')

module.exports = function (key, dateFormat) {
  return function (memo, item) {
    var day = moment(item[key]).format(dateFormat)

    if (!memo[day]) {
      memo[day] = 0
    }
    memo[day]++

    return memo
  }
}
