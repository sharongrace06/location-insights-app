const tableBody = document.getElementById("locationTableBody");
function renderTable(){
  // before add new rows we need to clear the existing rows
  tableBody.innerHTML = "";

  // get the location
  const locations = dataStore.getLocations();

   // Loop through locations
  locations.forEach(function(location){
    //creating the row:  one location → one row
    const row = document.createElement("tr");
    // crete a cell i.e the column 
    const placeCell = document.createElement("td");
    placeCell.textContent = location.place;

    const latitudeCell = document.createElement("td");
    latitudeCell.textContent = location.latitude;

    const longitudeCell = document.createElement("td");
    longitudeCell.textContent = location.longitude;

    const dateCell = document.createElement("td");
    const formattedDate = location.createdAt.toLocaleString();
    dateCell.textContent = formattedDate;

    // to attach the cells to the rows 
    row.appendChild(placeCell);
    row.appendChild(latitudeCell);
    row.appendChild(longitudeCell);
    row.appendChild(dateCell);

    // to attach the table to the rows 
    tableBody.appendChild(row);
    
  });
  
};

window.tableRenderer = {
  renderTable: renderTable,
};

