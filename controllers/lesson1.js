const mabelRoute = (req, res) => (
    res.send('Mabel Heiner')
);

const johnRoute = (req, res) => (
    res.send('John Doe')
);

module.exports = {
    mabelRoute,
    johnRoute
};