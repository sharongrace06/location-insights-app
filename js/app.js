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
});





