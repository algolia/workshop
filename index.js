const algoliasearch = require('algoliasearch');

const client = algoliasearch('N66N7FOPGI', '');
const index = client.initIndex('demo_ecommerce_v2');

const records = require('./datasets/ecommerce.json');

index.saveObjects(records, { autoGenerateObjectIDIfNotExist: true });