const fareMatrix = [13, 16, 20, 24, 28];

const stations = [
    "North Avenue", "Quezon Avenue", "GMA Kamuning", "Araneta Center-Cubao",
    "Santolan-Annapolis", "Ortigas", "Shaw Boulevard", "Boni", "Guadalupe",
    "Buendia", "Ayala", "Magallanes", "Taft Avenue"
];


function calculateFare() {
    let fromStation = document.getElementById("fromStation").value;
    let toStation = document.getElementById("toStation").value;
    let ticketType = document.getElementById("ticketType").value;
    let fareDisplay = document.getElementById("fareDisplay");

 
    let fromIndex = stations.indexOf(fromStation);
    let toIndex = stations.indexOf(toStation);

 
    let stationDifference = Math.abs(toIndex - fromIndex);

=
    let fare;
    if (stationDifference === 0) {
        fare = 13; 
    } else if (stationDifference >= 1 && stationDifference <= 3) {
        fare = fareMatrix[1];
    } else if (stationDifference >= 4 && stationDifference <= 6) {
        fare = fareMatrix[2];
    } else if (stationDifference >= 7 && stationDifference <= 9) {
        fare = fareMatrix[3];
    } else {
        fare = fareMatrix[4]; 
    }

   
    if (ticketType === "discounted") {
        fare *= 0.8; 
    }

    
    fareDisplay.textContent = fare.toFixed(2);
}

