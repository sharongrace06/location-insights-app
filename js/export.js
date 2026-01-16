// export function for the map 

function exportMap(){
  console.log("Export map triggered");
  
  const mapElement = document.getElementById("map");
  
  html2canvas(mapElement).then((canvas) => {
    console.log("Canvas created:", canvas);
    
    const imageData = canvas.toDataURL("image/png");
    const  anchor = document.createElement("a");
    
    anchor.setAttribute("href",imageData);
    anchor.setAttribute("download","map.png");
    anchor.click();
    
  });
};

