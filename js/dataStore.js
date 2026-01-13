// Data store for locations
const locations = [];

// add location to locations array

const function addLocation(location){
  locations.push(location);
};


// return all stored locations
const function getLocations(){
  return locations;
};

window.dataStore = {
  addLocation : addLocation,
  getLocations : getLocations
};
