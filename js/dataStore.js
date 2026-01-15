// Data store for locations
const locations = [];

// add location to locations array

function addLocation(location){
  locations.push(location);
};


// return all stored locations
function getLocations(){
  return locations;
};

//Load saved locations into memory if they exist
function loadFromStorage(){         
  const storedData = localStorage.getItem("locations");  //localStorage → browser storage

  if(storedData){
    locations = JSON.parse(storedData);      // if there is data then it will convert text back to real data (storedData is text)
  };                                         //JSON.parse() converts it into array 


  
};                              



window.dataStore = {
  addLocation : addLocation,
  getLocations : getLocations
};


