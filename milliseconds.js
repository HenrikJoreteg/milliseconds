module.exports = {
    seconds: function (val) { return val * 1000 },
    minutes: function (val) { return val * 60000 },
    hours: function (val) { return val * 3600000 },
    days: function (val) { return val * 86400000 },
    weeks: function (val) { return val * 604800000 },
    months: function (val) { return val * 2629800000 },
    years: function (val) { return val * 31557600000 }
};
