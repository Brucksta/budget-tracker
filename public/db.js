
const db = new Dexie("transactions");
db.version(1).stores({
    pending_transactions: 'name,value',
});

function saveRecord(transaction) {
    db.pending_transactions.put(transaction)
}

async function getAllTransactions() {
    const transactions = await db.pending_transactions.toArray();
    if(transactions.length > 0) {
        fetch("/api/transaction/bulk", {
            method: "POST",
            body: JSON.stringify(transactions),
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json"
            }
          }).then(() => db.pending_transactions.clear())
    }}

if (navigator.onLine) {
    getAllTransactions()
}
