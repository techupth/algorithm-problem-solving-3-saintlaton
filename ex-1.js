function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < customers.length - 1; i++) {
    let changePosition = false;

    for (let j = 0; j < customers.length - 1 - i; j++) {
      if (customers[j].toLowerCase() > customers[j + 1].toLowerCase()) {
        const temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
        changePosition = true;
      }
    }

    if (!changePosition) {
      break;
    }
  }
  return customers;
}

const customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
const sortedCustomers = sortCustomerName(customers);
console.log(sortedCustomers);

// ตอบคำถามตรงนี้จ้า
//ใน worst case คือ O(n^2) เพราะคือ nested loops จะลูปซ้อนลูปไปเรื่อย ๆ
