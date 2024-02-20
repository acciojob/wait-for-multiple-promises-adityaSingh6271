  function getRandomDelay() {
        return Math.floor(Math.random() * 3000) + 1000;
      }

      // Function to create a promise that resolves after a random delay
      function createPromise(name) {
        const timeTaken = getRandomDelay() / 1000; // Time taken in seconds
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ name, timeTaken });
          }, getRandomDelay());
        });
      }

      // Main function
      async function main() {
        // Array to store promises
        const promises = [
          createPromise("Promise 1"),
          createPromise("Promise 2"),
          createPromise("Promise 3"),
        ];

        // Wait for all promises to resolve
        const results = await Promise.all(promises);

        // Get the table body element
        const output = document.getElementById("output");

        // Iterate through resolved promises and update the table
        results.forEach(({ name, timeTaken }) => {
          const row = document.createElement("tr");
          const nameCell = document.createElement("td");
          const timeCell = document.createElement("td");

          nameCell.textContent = name;
          timeCell.textContent = timeTaken.toFixed(3); // Display time with 3 decimal places

          row.appendChild(nameCell);
          row.appendChild(timeCell);
          output.appendChild(row);
        });

        // Calculate and add the total time
        const totalTime = results.reduce((acc, { timeTaken }) => acc + timeTaken, 0);
        const totalRow = document.createElement("tr");
        const totalNameCell = document.createElement("td");
        const totalTimeCell = document.createElement("td");

        totalNameCell.textContent = "Total";
        totalTimeCell.textContent = totalTime.toFixed(3);

        totalRow.appendChild(totalNameCell);
        totalRow.appendChild(totalTimeCell);
        output.appendChild(totalRow);
      }

      // Call the main function
      main();