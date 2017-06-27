const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').find({name: 'Vitya'}).count().then((count) => console.log('Count of users with name Viktor: '+ count), err => console.log('Not found', err));

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => console.log('Unable to fetch docs', err))

// db.collection('Todos').find({
//   _id: new ObjectID('595292c5b9135a0554fe56ec')
// }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => console.log('Unable to fetch docs', err))

  //db.close();
});
