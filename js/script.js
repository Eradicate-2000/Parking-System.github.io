let tbody = document.getElementById('tbody');
function addVehicle() {
    let vehicleType = document.getElementById('vehicleType').value;
    let vehicleNo = document.getElementById('vehicleNo').value;
    if (vehicleNo.length == 0 || vehicleType == "Select") {
        alert("Cannot Add Vehicle!");
    } else {
        let newTime = new Date();
        let hours = newTime.getHours();
        let minutes = newTime.getMinutes();
        if (hours<10) {
            hours = `0${hours}`
        }
        if (minutes<10) {
            minutes = `0${minutes}`
        }
        tbody.innerHTML += `
        <tr>
            <td>${vehicleNo}</td>
            <td>${vehicleType}</td>
            <td>${hours} : ${minutes}</td>
            <td>--</td>
            <td>
                <button type="button" onclick="departVehicle(this)">Depart</button>
            </td>
            <td>--</td>
        </tr>
        `;
    }
}
function departVehicle(element) {
    let newTime = new Date();
    let hours = newTime.getHours();
    let minutes = newTime.getMinutes();
    if (hours<10) {
        hours = `0${hours}`
    }
    if (minutes<10) {
        minutes = `0${minutes}`
    }
    element.parentNode.parentNode.children[3].innerText = `${hours} : ${minutes}`;

    
    let type = element.parentNode.parentNode.children[1].innerText;
    let price;
    switch (type) {
        case "Car":
            price = 100;
            break;
        case "Scooty":
            price = 10;
            break;
        case "Bike":
            price = 20;
            break;
        case "Auto":
            price = 50;
            break;
        case "Truck":
            price = 150;
            break;
    }
    element.parentNode.parentNode.children[5].innerText = `${price}Rs`;
    element.disabled = true;
}
