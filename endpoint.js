const Datastore = require('@google-cloud/datastore');
const fs = require('fs');
const config = require('./config');

module.exports = (req, res) => {

  console.log('#1');
  console.log(config.credentials.client_email);

  console.log(__dirname);
  console.log(fs.readdirSync('./'));

  const datastore = new Datastore(config);

  console.log('#2');

  const key = datastore.key(['Hit']);

  console.log('#3');

  const data = {
    time: Math.floor(Date.now() / 1000),
  };

  console.log('#4');

  datastore
    .save({ key: key, data: data })
    .then(() => {
      console.log('save success');
      res.end('Saved new hit');
    })
    .catch((err) => {
      console.log('save fail');
      console.log(err);
      res.end('Failed to save hit');
    });

  console.log('#5');
}
