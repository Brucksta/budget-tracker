
const db = new Dexie("transaction_database");
db.version(1).stores({
  pendingTransaction: "name,value",
});

const saveRecord = (data) => {
  db.pendingTransaction
    .put({ name: data.name, value: data.value })
    .then(function () {
      console.log("Successfully saved", db);
    })
    .catch(function (error) {
      alert("Ooops: " + error);
    });
};

if (navigator.onLine) {
  db.pendingTransaction.toArray().then((data) => {
    console.log(data);
    fetch("/api/transaction/bulk", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    }).then(() => db.pendingTransaction.clear());
  });
}