var round = Math.round;

module.exports = {
    seconds: function (n) { return round(n * 1000) },
    minutes: function (n) { return round(n * 60000) },
    hours: function (n) { return round(n * 3600000) },
    days: function (n) { return round(n * 86400000) },
    weeks: function (n) { return round(n * 604800000) },
    months: function (n) { return round(n * 2629800000) },
    years: function (n) { return round(n * 31557600000) }
};
