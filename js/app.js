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
  if(place.trim()){
    errorInput.textContent = "Please add the Name of the Location";
    return;
  }else if(latitude.trim() && isNaN(latitude)){
    errorInput.textContent = "Add a Latitude in Numbers";
    return;
    
  }else if(longitude.trim() &&  isNaN(longitude)){
    errorInput.textContent = "Add a Longitude in Numbers";
    return; 
  }else{

    // If validation passes
    errorInput.textContent = "";
    console.log("Validation passed");
  }
  
});






