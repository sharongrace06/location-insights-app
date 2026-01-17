console.log("insights.js loaded");

//If I give this function data, it gives me a single number back.
function getTotalLocations(locations){
  return locations.length ; 
  
};

//This function converts raw location objects into a drawable path.
function getSequentialPath(locations) {
  const copy =  [...locations]; // create a copy of the locations array
  copy.sort((a,b) => {
    const timeA = new Date(a.createdAt).getTime();
    const timeB = new Date(b.createdAt).getTime();
    if (timeA < timeB) return -1;
    if (timeA > timeB) return 1;
    return 0;
     });

  const locationPath = copy.map(item => {
    return [item.latitude, item.longitude];
});
  return locationPath;
  
};



//Every location becomes a heat ‘dot’ with equal weight.
function getHeatPoints(locations) {
  const heatPoints = locations.map(location => {
  
    const latitude = location.latitude;
    const longitude = location.longitude;
    const intensity = 1;
    return [latitude, longitude, intensity]  ;
    });

  return heatPoints;
};





window.insights = {
  getTotalLocations: getTotalLocations,
  getSequentialPath: getSequentialPath,
  getHeatPoints: getHeatPoints
  
};








