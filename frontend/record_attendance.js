// Fetch items and populate dropdown
fetch(`${BASE_URL}/employees`)
  .then((response) => response.json())
  .then((data) => {
    const itemDropdown = document.getElementById("employeeName");

    // Iterate through items and add options to dropdown
    data.employees.forEach((employee) => {
      const option = document.createElement("option");
      option.value = employee._id; // Assuming each item has an ID
      option.textContent = employee.name;
      itemDropdown.appendChild(option);
    });
  })
  .catch((error) => console.error("Error fetching items:", error));

// Function to handle form submission for recording sales
document
  .getElementById("attendanceForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    // Get form data
    const employee = document.getElementById("employeeName").value;

    // Create sale object
    const newAttendance = {
      employee: employee
    };

    // Send POST request to backend API to record sale
    fetch(`${BASE_URL}/attendances`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAttendance),
    })
      .then((response) => response.json())
      .then((data) => {
        // Reset form fields
        document.getElementById("attendanceForm").reset();
        window.location.reload();
        //alert("Attendance recorded successfully!");
      })
      .catch((error) => console.error("Error recording attendance:", error));
  });
