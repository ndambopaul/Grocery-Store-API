const BASE_URL = "http://localhost:5000"

const fetchInventory = () => {
    fetch(`${BASE_URL}/items`)
    .then(response => response.json())
    .then(data => {
        // Get reference to tbody element
        const tableBody = document.getElementById('inventoryTableBody');
        
        // Clear any existing rows
        tableBody.innerHTML = '';

        // Check if items array exists and is not empty
        if (data.items && data.items.length > 0) {
            // Iterate through inventory items and create table rows
            data.items.forEach(item => {
                const row = `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                        <td>${item.price}</td>
                    </tr>
                `;
                // Append row to tbody
                tableBody.innerHTML += row;
            });
        } else {
            // If no items found, display a message
            tableBody.innerHTML = `<tr><td colspan="3">No items found</td></tr>`;
        }
    })
    .catch(error => console.error('Error fetching inventory:', error));
}

fetchInventory();