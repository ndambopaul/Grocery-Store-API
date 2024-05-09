const BASE_URL = "http://localhost:5000"

const fetchInventory = () => {
    fetch(`${BASE_URL}/sales`)
    .then(response => response.json())
    .then(data => {
        // Get reference to tbody element
        const tableBody = document.getElementById('salesTableBody');
        console.log(data.sales)
        
        // Clear any existing rows
        tableBody.innerHTML = '';

        // Check if items array exists and is not empty
        if (data.sales && data.sales.length > 0) {
            // Iterate through inventory items and create table rows
            data.sales.forEach((sale, index) => {
                const row = `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${sale.item}</td>
                        <td>${sale.quantity}</td>
                        <td>${sale.total_cost}</td>
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