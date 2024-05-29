// replace "YourDatabaseName" with the name of your database. This code will log the key and value of each entry in each object store 
// in the database. Note that this code must be run in a context where IndexedDB is available. Also, due to the asynchronous nature of 
// IndexedDB, the results may not be logged in order.

// Open the database
var openRequest = indexedDB.open("YourDatabaseName");

openRequest.onsuccess = function(e) {
    var db = e.target.result;

    // Get the names of all object stores
    var storeNames = db.objectStoreNames;

    for(var i = 0; i < storeNames.length; i++) {
        dumpObjectStore(db, storeNames[i]);
    }
};

function dumpObjectStore(db, storeName) {
    var transaction = db.transaction(storeName, 'readonly');
    var objectStore = transaction.objectStore(storeName);

    // Create a cursor request to iterate through the contents of the store
    var cursorRequest = objectStore.openCursor();

    console.log("Contents of " + storeName + ":");

    cursorRequest.onsuccess = function(e) {
        var cursor = e.target.result;
        if(cursor) {
            console.log(cursor.key, cursor.value);
            cursor.continue();
        }
    };
}
