document.getElementById("addEmployeeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("employeeName").value;
    const email  = document.getElementById("employeeEmail").value;
    const phone_number = document.getElementById("employeePhoneNumber").value;

    const employeeObject = {
        name: name,
        email: email,
        phone_number: phone_number
    };

    fetch(`${BASE_URL}/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeObject)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        getEmployees();
        document.getElementById("addEmployeeForm").reset()
    })
    .catch((error) => console.log(error.message))
})