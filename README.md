# milliseconds

Insanely lightweight module for converting times to milliseconds.

Literally 9 lines of code, it's just to make writing time in a way that's more readable without having to remember how many milliseconds are in a day, week, month, year.

For those curious, the exact definition of "years" and "months" can vary slighly but these are based on the Julian Year which is 365.25 days of 86400 seconds (http://en.wikipedia.org/wiki/Year) and a month is simply 1/12th of that. 

## install

```
npm install milliseconds
```

## example

```javascript
var ms = require('milliseconds');

ms.seconds(2); // 2000
ms.minutes(2); // 120000
ms.hours(2);   // 7200000
ms.days(2);    // 172800000
ms.weeks(2);   // 1209600000
ms.months(2);  // 5259600000
ms.years(2);   // 63115200000
```

## credits

If you like this follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter.

## license

MIT

