fetch(`${BASE_URL}/items`)
  .then((response) => response.json())
  .then((data) => {
    const itemDropdown = document.getElementById("itemName");

    // Iterate through items and add options to dropdown
    data.items.forEach((item) => {
      const option = document.createElement("option");
      option.value = item._id; // Assuming each item has an ID
      option.textContent = item.name;
      itemDropdown.appendChild(option);
    });
  })
  .catch((error) => console.error("Error fetching items:", error));

  document
  .getElementById("saleForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    // Get form data
    const item_id = document.getElementById("itemName").value;
    const quantity = document.getElementById("itemQuantity").value;

    // Create sale object
    const newSale = {
      item_id: item_id,
      quantity: parseInt(quantity)
    };

    // Send POST request to backend API to record sale
    fetch(`${BASE_URL}/sales`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSale),
    })
      .then((response) => response.json())
      .then((data) => {
        // Reset form fields
        document.getElementById("saleForm").reset();
        if (data.error) {
            alert(data.error)
        }
        console.log(data)
        window.location.reload();
        //alert("Attendance recorded successfully!");
      })
      .catch((error) => alert("Error recording attendance:", error));
  });