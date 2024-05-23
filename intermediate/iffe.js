(function one() {
    // Named IFFE
    console.log("DB CONNECTED");
})();

((db) => {
    console.log(`${db} DB NOT CONNECTED`);
})("Mongo")