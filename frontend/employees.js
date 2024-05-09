
const BASE_URL = "http://localhost:5000"


const getEmployees = async() => {
    const response = await fetch(`${BASE_URL}/employees`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();
    const employees = data["employees"]
    console.log(data)
    console.log(employees)

    const table = document.getElementById("employeesTableBody");

    table.innerHTML = "";

    if(employees) {
        employees.forEach((employee, index) => {
            const row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${employee.name}</td>
                    <td>${employee.email}</td>
                    <td>${employee.phone_number}</td>
                </tr>
            `
            table.innerHTML += row;
        })

    } else {
        // If no items found, display a message
        table.innerHTML = `<tr><td colspan="4">No items found</td></tr>`;
    }
}

getEmployees();