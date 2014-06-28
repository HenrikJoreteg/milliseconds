function is(milliseconds) {
    return function(n) { return Math.round(n * milliseconds); };
}
var ms = module.exports;
ms.seconds = is(1000);
ms.minutes = is(ms.seconds(60));
ms.hours   = is(ms.minutes(60));
ms.days    = is(ms.hours(24));
ms.weeks   = is(ms.days(7));
ms.years   = is(ms.days(365.25));
ms.months  = is(ms.years(1 / 12));
