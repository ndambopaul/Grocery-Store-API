//const BASE_URL = "http://localhost:5000"
 
 // Function to handle form submission for adding a new item
 document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const itemName = document.getElementById('itemName').value;
    const itemQuantity = document.getElementById('itemQuantity').value;
    const itemPrice = document.getElementById('itemPrice').value;

    // Create item object
    const newItem = {
        name: itemName,
        quantity: parseInt(itemQuantity),
        price: parseFloat(itemPrice)
    };

    // Send POST request to backend API to add new item
    fetch(`${BASE_URL}/items`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
    })
    .then(response => response.json())
    .then(data => {
        // Refresh inventory table
        console.log(data)
        fetchInventory();
        // Clear form fields

        document.getElementById('addItemForm').reset();
    })
    .catch(error => console.error('Error adding item:', error));
});