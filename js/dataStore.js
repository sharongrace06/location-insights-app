// Data store for locations
const locations = [];

// add location to locations array

function addLocation(location){
  locations.push(location);
  saveToStorage();
};


// return all stored locations
function getLocations(){
  return locations;
};

//Load saved locations into memory if they exist
function loadFromStorage(){         
  const storedData = localStorage.getItem("locations");  //localStorage → browser storage

  if(storedData){
    const parsedLocations = JSON.parse(storedData);    // if there is data then it will convert text back to real data (storedData is text)
    //JSON.parse() converts it into array 
    
    locations.length = 0;            // clear existing array --> Set the number of items in this array to zero.
    locations.push(...parsedLocations);      // refill it
    
  };                                         
};                              

function saveToStorage(){
  // to convert location to text
  const textLocation =  JSON.stringify(locations);
  // save to localStorage  
  const saveToStore = localStorage.setItem("locations", textLocation);
  
};



window.dataStore = {
  addLocation : addLocation,
  getLocations : getLocations,
  loadFromStorage: loadFromStorage,
  saveToStorage: saveToStorage
  
};







