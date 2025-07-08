function simpleHash(name, tableSize) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash += name.charCodeAt(i); 
  }
  return hash % tableSize; 
}

let tableSize = 10;
let hashTable = new Array(tableSize).fill(null);

let initialCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

initialCustomers.forEach((customer) => {
  let index = simpleHash(customer, tableSize);
  while (hashTable[index] !== null) {
    index = (index + 1) % tableSize;
  }
  hashTable[index] = customer;
});

console.log("Initial Hashed Table:");
hashTable.forEach((name, i) => {
  if (name !== null) {
    console.log("[" + (i + 1) + "] " + name);
  }
});

let newCustomer = prompt("Enter your name to join the queue:");
let newIndex = simpleHash(newCustomer, tableSize);
while (hashTable[newIndex] !== null) {
  newIndex = (newIndex + 1) % tableSize;
}
hashTable[newIndex] = newCustomer;
alert("Hi " + newCustomer + "! Your hash table number is: " + (newIndex + 1));

console.log("\nUpdated Hashed Table:");
hashTable.forEach((name, i) => {
  if (name !== null) {
    console.log("[" + (i + 1) + "] " + name);
  }
});

let numberToService = parseInt(prompt("Enter the number to be serviced (1 to " + tableSize + "):"));

if (numberToService > 0 && numberToService <= tableSize && hashTable[numberToService - 1] !== null) {
  let customerName = hashTable[numberToService - 1];
  alert("Now servicing: " + customerName);
  hashTable[numberToService - 1] = null;

  console.log("\nUpdated Hashed Table After Servicing:");
  hashTable.forEach((name, i) => {
    if (name !== null) {
      console.log("[" + (i + 1) + "] " + name);
    }
  });

} else {
  alert("Invalid or already serviced number entered.");
}
