const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/todoapp');
mongoose.connect('mongodb://ahsan2:123abc@ds117101.mlab.com:17101/hbu-app');

let db = mongoose.connection;

/**
 * @author Ahsan Ayaz, Siraj Ul Haq
 * @desc When there's an error connecting to database, this handler will trigger
 */
db.on('error', (err) => {
  console.error('connection error:', err);
});

/**
 * @author Ahsan Ayaz, Siraj Ul Haq
 * @desc When connection is properly established with the MongoDB, this handler
 * will trigger.
 */
db.once('open', () => {
  console.log('db connection established successfully');
});

module.exports = db;
