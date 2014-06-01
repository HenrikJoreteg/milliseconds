# milliseconds

Insanely lightweight module for converting times to milliseconds.

Literally 9 lines of code, it's just to make writing time in a way that's more readable without having to remember how many milliseconds are in a day, week, month, year;

## install

```
npm install milliseconds
```

## example

```javascript
var ms = require('milliseconds');

ms.seconds(2); // 2000
ms.minutes(2); // 120000
ms.days(2);    // 172800000
ms.weeks(2);   // 1210000000
ms.months(2);  // 5259000000
ms.years(2);   // 63110000000
```

## credits

If you like this follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter.

## license

MIT

