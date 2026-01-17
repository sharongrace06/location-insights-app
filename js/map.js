console.log("map.js loaded");

let map;
let markerLayer;  //container of markers
let insightsMap;

let insightsHeatLayer = null;
let growthPathLayer = null;


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



function initInsightsMap(){
  // create the map instance 
  insightsMap = L.map("insights-map");

// 2. Set initial view (lat, lng, zoom)
  insightsMap.setView([20.5937, 78.9629], 5);

  // 3. Attach tile layer
  L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution: "© OpenStreetMap contributors"
    }
  ).addTo(insightsMap);
  
};


function renderGrowthPath(locations) {
  // 1. Remove existing growth path (if any)
  if (growthPathLayer) {
    insightsMap.removeLayer(growthPathLayer);
  }

  // 2. Get ordered coordinates from insights
  const pathCoordinates = window.insights.getSequentialPath(locations);

  // Guard: need at least 2 points to draw a line
  if (pathCoordinates.length < 2) {
    return;
  }

  // 3. Create polyline
  growthPathLayer = L.polyline(pathCoordinates, {
    color: "#2563eb",   // calm blue
    weight: 3,
    opacity: 0.8
  });

  // 4. Add to insights map
  growthPathLayer.addTo(insightsMap);

};


function  renderInsightsHeatMap(locations){
  // 1. remove existing path layer (if any)
  
  if (insightsHeatLayer) {
    insightsMap.removeLayer(insightsHeatLayer);
  }
  // 2. get ordered path from insights
  const heatPoints = window.insights.getHeatPoints(locations);
  // 3. Create heat layer
  insightsHeatLayer = L.heatLayer(heatPoints, {
    radius: 25,
    blur: 15,
    maxZoom: 17
  });

  // 4. Add to insights map
  insightsHeatLayer.addTo(insightsMap);
};




window.mapRenderer = {
  initMap: initMap,
  addMarker: addMarker,
  renderMarkers: renderMarkers,
  
  initInsightsMap: initInsightsMap,
  renderInsightsHeatMap: renderInsightsHeatMap,
  renderGrowthPath: renderGrowthPath
  
};








