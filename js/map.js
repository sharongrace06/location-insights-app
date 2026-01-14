console.log("map.js loaded");

let map;
function initMap(){
  // 1. Create map instance
  const map = L.map("map");
  
// 2. Set initial view (lat, lng, zoom)
  //map.setView([latitude, longitude], 5);

  // 3. Attach a tile layer
  //L.tileLayer()

  
};

function addMarker(location){};

function renderMarkers(locations){};




window.mapRenderer = {
  initMap: initMap,
  addMarker: addMarker,
  renderMarkers: renderMarkers
};
