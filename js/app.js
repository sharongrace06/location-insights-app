console.log("App Loaded")

// Select DOM elements
const form = document.querySelector("form");
const placeInput = document.getElementById("placeName");
const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");
const errorInput = document.getElementById("errorMessage");

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
    place : "",
    latitude : "" ,
    longitude : "",
    createdAt : new Date(),
  };
  
  
});








