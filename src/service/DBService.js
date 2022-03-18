import * as idb from 'idb';

//https://codesandbox.io/

//https://blog.jimdhughes.com/indexeddb-react/
//https://github.com/jimdhughes/react-indexeddb-demo

//https://developers.google.com/web/ilt/pwa/lab-indexeddb

//https://codesandbox.io/s/v6mb2

const DATABASE_NAME = 'INSPIRE';
const DATABASE_VERSION = 1;
//const db = idb.default;


//const BUCKETS = ['Bucket01', 'Bucket02']
//const BUSINESS_UNITS = ['BU1', 'BU2', 'BU3', 'BU4', 'BU5']
//const STATUS = ['In Progress', 'Completed', 'Pending']
/**
 * Initialize the IndexedDB.
 * see https://developers.google.com/web/ilt/pwa/lab-indexeddb
 * for information as to why we use switch w/o breaks for migrations.
 * add do the database version and add a switch case each time you need to
 * change migrations
 */
const dbPromise = idb.open(DATABASE_NAME, DATABASE_VERSION, function (upgradeDb) {
  /* tslint:disable */
  switch (upgradeDb.oldVersion) {
    case 0:
    // a placeholder case so that the switch block will
    // execute when the database is first created
    // (oldVersion is 0)
    case 1:
      console.log('Creating events object store');
      upgradeDb.createObjectStore('Events', { keyPath: 'id' });
  }
});

dbPromise.then(function (db) {
  var tx = db.transaction('Events', 'readwrite');
  var store = tx.objectStore('Events');
  var events = [
    {
      name: 'Fire',
      zone: 1,
      ref: 12,
      typ: 'NFXI-OPT',
      devtext: "sensor room 1",
      zonetext: 'floor 1'
    }
  ];

  return Promise.all(events.map(function (event) {
    console.log('Adding item: ', event);
    return store.add(event);
  })
  ).catch(function (e) {
    tx.abort();
    console.log(e);
  }).then(function () {
    console.log('All items added successfully!');
  });
});

export class DBService {

  get(tablespace, key) {
    return dbPromise.then(db => {
      return db.transaction(tablespace).objectStore(tablespace).get(key);
    }).catch(error => {
      // Do something?
    });
  }

  getAll(tablespace, indexName, index = []) {
    return dbPromise.then(db => {
      return db.transaction(tablespace).objectStore(tablespace).index(indexName).getAll(index);
    }).catch(error => {
      // Do something?
    });
  }

  put(tablespace, object, key = null) {
    return dbPromise.then(db => {
      if (key) {
        return db.transaction(tablespace, 'readwrite').objectStore(tablespace).put(object, key);
      }
      return db.transaction(tablespace, 'readwrite').objectStore(tablespace).put(object);
    }).catch(error => {
      // Do something?
    });
  }

  delete(tablespace, key) {
    return dbPromise.then(db => {
      return db.transaction(tablespace, 'readwrite').objectStore(tablespace).delete(key);
    }).catch(error => {
      // Do something?
    });
  }

  deleteAll(tablespace) {
    return dbPromise.then(db => {
      return db.transaction(tablespace, 'readwrite').objectStore(tablespace).clear();
    }).catch(error => {
      // Do something?
    });
  }
}