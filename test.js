var assert = require('assert');
var ms = require('./milliseconds');

assert.equal(ms.seconds(2), 2000);
assert.equal(ms.seconds(1.11113213), 1111);
assert.equal(ms.seconds(5.555555), 5556);
assert.equal(ms.minutes(2), 120000);
assert.equal(ms.hours(2), 7200000);
assert.equal(ms.days(2), 172800000);

assert.equal(ms.weeks(2), 1209600000);
assert.equal(ms.months(2), 5259600000);
assert.equal(ms.years(2), 63115200000);

console.log('tests passed');

process.exit(0);
