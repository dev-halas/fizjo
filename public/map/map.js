let map; 

function initMap() {
    const pinMap = { lat: 51.969176857161344, lng: 17.530155061361796 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: pinMap,
      disableDefaultUI: true,
      styles: []
    });
    
    const contentString =
      '<div id="mapContent">' +
      'Procold s.c.' + '<br>' +
      'ul. Leszczyce 10, ' + '<br>' +
      '63-200 Jarocin' +
      "</div>";
  
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 300,
    });
  
    const icon = {
        path: "M65.9,0A31.765,31.765,0,0,0,43.443,54.23L65.9,76.247,88.372,54.226A31.766,31.766,0,0,0,65.9,0Zm0,47.654A15.885,15.885,0,1,1,81.789,31.769,15.884,15.884,0,0,1,65.9,47.654Z",
        fillColor: '#193441',
        strokeWeight: 0,
        fillOpacity: 1, 
        anchor: new google.maps.Point(90, 72),
    };
  
    const marker = new google.maps.Marker({
      position: pinMap,
      map,
      icon: icon,
      title: "Dailo",
    });
  
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
}
  