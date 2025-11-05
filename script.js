const today = new Date();
const arrivalDate = new Date("2025-11-18");
today.setHours(0, 0, 0, 0);
arrivalDate.setHours(0, 0, 0, 0);
const diffMs = arrivalDate - today; // разница в миллисекундах
const diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log(diffDays);
console.log(today);

const dateContainer = document.getElementById("output");
dateContainer.textContent = diffDays;
