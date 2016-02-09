A simple module that exports a function that can be used to reduce over an array etc, counting items within the array that are grouped by day.

Uses [moment.js](http://momentjs.com/) under the hood for date parsing

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
      }];

    var aggregate = fixture.reduce(countByDay('created', 'YYYY-MM-DD'), {});

    //output == { '2016-01-01': 3, '2016-01-02': 1 }
