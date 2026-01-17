// export function for the map 

function exportMap(){
  console.log("Export map triggered");
  
  const mapElement = document.getElementById("map");
  
  html2canvas(mapElement, {useCORS: true, allowTaint: true}).then((canvas) => {
    console.log("Canvas created:", canvas);
    
    const imageData = canvas.toDataURL("image/png");
    const  anchor = document.createElement("a");
    
    anchor.setAttribute("href",imageData);
    anchor.setAttribute("download","map.png");
    anchor.click();
    
  });
};

function exportInsightsMap(){
  const map2Element = document.getElementById("insights-map");
  
  html2canvas(map2Element, {useCORS: true, allowTaint: true}).then((canvas) => {
    console.log("Canvas created:", canvas);

    const image2Data = canvas.toDataURL("image/png");
    const  anchor = document.createElement("a");
    
    anchor.setAttribute("href",image2Data);
    anchor.setAttribute("download","map2.png");
    anchor.click();
  });

  
};



