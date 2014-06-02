function calc(m) {
    return function(n) { return Math.round(n * m); };
};
module.exports = {
    seconds: calc(1e3),
    minutes: calc(6e4),
    hours: calc(36e5),
    days: calc(864e5),
    weeks: calc(6048e5),
    months: calc(26298e5),
    years: calc(315576e5)
};
