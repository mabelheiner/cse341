const MongoClient = require('mongodb').MongoClient;

async function getCluster(client) {
    const db = client.db('cse341');
    const collection = db.collection('contacts');
    const documents = await collection.find({}).toArray();
    console.log('All documents: ', documents[0].firstName);
}

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    //await getCluster();
};

let _db;

const initDb = (callback) => {
    const URI = "mongodb+srv://mabelheiner:Shootingstars5@cluster0.r4qt5qs.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"
    //const clusterURI = process.env.CLUSTER_URI;
    //const client = new MongoClient(clusterURI);

    if (_db) {
        console.log('Db is already initialized');
        return callback(null, _db);
    }

    MongoClient.connect('mongodb+srv://mabelheiner:Shootingstars5@cluster0.r4qt5qs.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp')
    .then((client) => {
        _db = client;
        callback(null, _db);
    })
    .catch((err) => {
        callback(err)
    })
};

const getDb = () => {
    if (!_db) {
        throw Error('Db not initialized');
    }
    return _db;
}

module.exports = {
    initDb,
    getDb,
};
