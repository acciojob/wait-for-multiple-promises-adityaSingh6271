//your JS code here. If required.
// Function to generate a random delay between 1 and 3 seconds
function getRandomDelay() {
  return Math.floor(Math.random() * 3000) + 1000;
}

// Function to create a promise that resolves after a random delay
function createPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getRandomDelay() / 1000); // Resolve with the time taken in seconds
    }, getRandomDelay());
  });
}

// Function to add loading text to the table
function addLoadingText() {
  const outputTable = document.getElementById("output");
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.setAttribute("colspan", "2");
  cell.textContent = "Loading...";
  row.appendChild(cell);
  outputTable.appendChild(row);
}

// Function to update the table with resolved promise values
function updateTable(promises) {
  const outputTable = document.getElementById("output");
  outputTable.innerHTML = ""; // Clear existing table content

  promises.forEach((time, index) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const timeCell = document.createElement("td");

    nameCell.textContent = `Promise ${index + 1}`;
    timeCell.textContent = time.toFixed(3); // Display time with 3 decimal places

    row.appendChild(nameCell);
    row.appendChild(timeCell);
    outputTable.appendChild(row);
  });

  // Calculate and add the total time
  const totalTime = promises.reduce((total, time) => total + time, 0);
  const totalRow = document.createElement("tr");
  const totalNameCell = document.createElement("td");
  const totalTimeCell = document.createElement("td");

  totalNameCell.textContent = "Total";
  totalTimeCell.textContent = totalTime.toFixed(3);

  totalRow.appendChild(totalNameCell);
  totalRow.appendChild(totalTimeCell);
  outputTable.appendChild(totalRow);
}

// Main function
async function main() {
  addLoadingText(); // Add loading text to the table

  // Create an array of promises
  const promises = [createPromise(), createPromise(), createPromise()];

  // Wait for all promises to resolve
  const results = await Promise.all(promises);

  // Update the table with resolved promise values
  updateTable(results);
}

// Call the main function
main();
