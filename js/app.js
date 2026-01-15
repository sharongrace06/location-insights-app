console.log("App Loaded")

// Select DOM elements
const form = document.querySelector("form");
const placeInput = document.getElementById("placeName");
const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");
const errorInput = document.getElementById("errorMessage");
const tableBody = document.getElementById("locationTableBody");


//APP STARTUP (runs ONCE)

//initialize the stored data the user typed in 
dataStore.loadFromStorage();

//initialize map once when app loads
mapRenderer.initMap();
//render table once on load (shows empty state)
tableRenderer.renderTable();

// rendering the map markers 
mapRenderer.renderMarkers(dataStore.getLocations());

// Adding the delete button 
tableBody.addEventListener("click", function(event){
  const clickedElement = event.target;
  if(clickedElement.tagName === "BUTTON"){
    const id = Number(clickedElement.dataset.id);       //if the clicked thing is a Delete button, get its ID, delete that location
    dataStore.deleteLocation(id);
    tableRenderer.renderTable();
    mapRenderer.renderMarkers(dataStore.getLocations());
  }
  
});

  
console.log(form);
console.log(placeInput);

// Handle form submission

form.addEventListener("submit", function(event){
  event.preventDefault();
  console.log("Form submitted");
  
  // Read input values
  const place = placeInput.value ;
  const latitude = latitudeInput.value ;
  const longitude = longitudeInput.value ; 
  console.log(place, latitude, longitude)

  // Validation
  if(place.trim() === ""){
    errorInput.textContent = "Please add the Name of the Location";
    return;
  }
  if(latitude.trim() === ""){
    errorInput.textContent = "Please Add Latitude";
    return;
    
  }
  if(longitude.trim() === ""){
    errorInput.textContent = "Please Add Longitude ";
    return; 
  }
  if(isNaN(latitude)){
    errorInput.textContent = "Latitude must be a Number/s";
    return;
  }
  if(isNaN(longitude)){
    errorInput.textContent = "Longitude must be a Number/s";
    return;
  }
   // If validation passes
  
  errorInput.textContent = "";
  console.log("Validation passed");

  // Create location object
  const locationData = {
    id : Date.now(),
    place : place,
    latitude : latitude,
    longitude : longitude,
    createdAt : new Date(),
  };
  console.log(locationData);
  
  // connecting dataStores.js with app.js 
  
  dataStore.addLocation(locationData);    // store the data 
  console.log(dataStore.getLocations());
  
  mapRenderer.renderMarkers(dataStore.getLocations());  // update the map 

  tableRenderer.renderTable(); // Update table


  // to clear out the input fields in the form once a value is added. 

  placeInput.value = "";
  latitudeInput.value = "";
  longitudeInput.value = "";
  


});

  
  


























