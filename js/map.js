console.log("map.js loaded");

let map;
function initMap(){
  // 1. Create map instance
  map = L.map("map");
  
  // 2. Set initial view (lat, lng, zoom)
  map.setView([20.5937, 78.9629], 5);

  // 3. Attach a tile layer
  L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);


  
};

function addMarker(location){
  // 1. Extract latitude and longitude from location
  const latitude = location.latitude;
  const longitude = location.longitude; 

  
  // 2. Create a Leaflet marker
  L.marker([latitude,longitude])
    .addTo(map)
    .bindPopup(location.place)
 
};


function renderMarkers(locations){};




window.mapRenderer = {
  initMap: initMap,
  addMarker: addMarker,
  renderMarkers: renderMarkers
};




