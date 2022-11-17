import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {

  // creates connection to database with the version 
  const jateDb = await openDB(`jate`, 1);

  // create a new transaction and specify database and privileges 
  const tx = jateDb.transaction(`jate`, `readwrite`);

  // opens up object store
  const store = tx.objectStore(`jate`);

  // Use the .add() method on store and pass in content
  const request = store.add({ jate: content });

  // get confirmation of request
  const result = await request;
  console.log(`data saved to the BD`, result);
};



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log(`GET all from database`);

  // create connection to database with version
  const jateDb = await openDB(`jate`, 1);

  // create a new transaction and specify database and privileges 
  const tx = jateDb.transaction(`jate`, `readwrite`);

  // opens up object store
  const store = tx.objectStore(`jate`);

  // use getAll() to get all data in the database
  const request = store.getAll();
  
  // get confirmation of request
  const result = await request;
  console.log(`result.value`, result);
  return result;

}


initdb();
