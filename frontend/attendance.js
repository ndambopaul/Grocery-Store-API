const BASE_URL = "http://localhost:5000"

const time_converter = (dateString) => {
    //const dateString = "2024-05-09T07:46:52.884Z";
const date = new Date(dateString);

// Format the date and time components
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const day = String(date.getDate()).padStart(2, '0');
const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
const seconds = String(date.getSeconds()).padStart(2, '0');
const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

// Construct the formatted date and time string
const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

console.log(formattedDateTime);
return formattedDateTime;

}

const getAttendances = async() => {
    const response = await fetch(`${BASE_URL}/attendances`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();
    const employees = data["attendances"]
    console.log(data)
    console.log(employees)

    const table = document.getElementById("attendanceTableBody");

    table.innerHTML = "";

    if(employees) {
        employees.forEach((attendance, index) => {
            const row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${attendance.employee.name}</td>
                    <td>${time_converter(attendance.checkin_time)}</td>
                    
                </tr>
            `
            table.innerHTML += row;
        })

    } else {
        // If no items found, display a message
        table.innerHTML = `<tr><td colspan="4">No items found</td></tr>`;
    }
}

getAttendances();