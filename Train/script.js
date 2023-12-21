// Sample data (simulated backend data)
const maintenanceData = [
    {
      trainID: '123',
      start: 'Station A',
      end: 'Station B',
      status: 'In Service',
      lastUpdated: '2023-12-15',
      nextCheckup: '2024-01-10',
      problem: 'None',
    },
    // Add more sample data as needed
  ];
  
  // Function to populate the table with data
  function populateTable(data) {
    const tableBody = document.querySelector('#maintenanceTable tbody');
    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.trainID}</td>
        <td>${item.start}</td>
        <td>${item.end}</td>
        <td>${item.status}</td>
        <td>${item.lastUpdated}</td>
        <td>${item.nextCheckup}</td>
        <td>${item.problem}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Populate the table when the page loads
  window.onload = function() {
    populateTable(maintenanceData);
  };
  