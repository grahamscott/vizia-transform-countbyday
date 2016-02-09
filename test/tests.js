var test = require('tape').test
var countByDay = require('../index')

test('it reduces over the key, using the provided date format', (assert) => {
  var fixture = [{
    name: 'A',
    created: '2016-01-01'
  }, {
    name: 'B',
    created: '2016-01-01'
  }, {
    name: 'C',
    created: '2016-01-02'
  }, {
    name: 'D',
    created: '2016-01-01'
  }]

  var aggregate = fixture.reduce(countByDay('created', 'YYYY-MM-DD'), {})

  assert.deepEqual(aggregate, {
    '2016-01-01': 3,
    '2016-01-02': 1
  })

  assert.end()
})
