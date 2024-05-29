if (!window.indexedDB) {
    console.log("Your browser doesn't support IndexedDB");
} else {
    console.log("IndexedDB is supported by your browser");

    // List all databases
    var req = indexedDB.databases();
    req.onsuccess = function(event) {
        console.log("List of databases:");
        for (var i = 0; i < event.target.result.length; i++) {
            console.log(event.target.result[i].name);
        }
    };
}
