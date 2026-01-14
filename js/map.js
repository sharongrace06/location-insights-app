console.log("map.js loaded");

let map;
let markerLayer;  //container of markers

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

  markerLayer = L.layerGroup().addTo(map);  // Create an empty box -> Put the box on the map -> Remember where the box is

  
};

function addMarker(location){
  // 1. Extract latitude and longitude from location
  const latitude = location.latitude;
  const longitude = location.longitude; 

  
  // 2. Create a Leaflet marker
  L.marker([latitude,longitude])
    .addTo(markerLayer)
    .bindPopup(location.place)
 
};


function renderMarkers(locations){
  markerLayer.clearLayers();
  locations.forEach(function(location){
    addMarker(location);});
  
};




window.mapRenderer = {
  initMap: initMap,
  addMarker: addMarker,
  renderMarkers: renderMarkers
};





