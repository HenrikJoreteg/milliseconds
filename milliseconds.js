var rounder = function(m) {
    return function(n) {
        return Math.round(n * m);
    }
};
module.exports = {
    seconds: rounder(1000),
    minutes: rounder(60000),
    hours: rounder(3600000),
    days: rounder(86400000),
    weeks: rounder(604800000),
    months: rounder(2629800000),
    years: rounder(31557600000)
};
