const mabelRoute = (req, res) => (
    res.send('Mabel Heiner')
);

const jasonRoute = (req, res) => (
    res.send('Jason Heiner')
);

const margoRoute = (req, res) => {
    res.send('Margo Heiner')
}

module.exports = {
    mabelRoute,
    jasonRoute,
    margoRoute
};