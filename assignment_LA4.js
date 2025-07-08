let customerQueue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

console.log("Initial Queue:");
customerQueue.forEach((customer, index) => {
  console.log((index + 1) + ". " + customer);
});

let newCustomer = prompt("Enter your name to join the queue:");
customerQueue.push(newCustomer);
let assignedNumber = customerQueue.length;
alert("Hi " + newCustomer + "! Your queue number is: " + assignedNumber);
console.log("\nUpdated Queue:");
customerQueue.forEach((customer, index) => {
  console.log((index + 1) + ". " + customer);
});

let serviceNumber = parseInt(prompt("Enter the number to be serviced (1 to " + customerQueue.length + "):"));

if (serviceNumber > 0 && serviceNumber <= customerQueue.length) {
  let servedCustomer = customerQueue[serviceNumber - 1];
  alert("Now servicing: " + servedCustomer);
  customerQueue.splice(serviceNumber - 1, 1); 

  console.log("\nUpdated Queue After Servicing:");
  customerQueue.forEach((customer, index) => {
    console.log((index + 1) + ". " + customer);
  });
} else {
  alert("Invalid number entered. Please try again.");
      }
