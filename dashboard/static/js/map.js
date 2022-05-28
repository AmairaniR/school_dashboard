// Map code 



// Add console.log to check to see if our code is working.
console.log("working");

// Tile layer, Background of map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [40.7, -74.0],
	zoom: 11,
	layers: [streets]
});

d3.json("").then(function(data) {
    // Function determines style for each marker 
    function styleInfo(feature) {
        return 
    };

    // Create GeoJSON layer
    L.geoJson(data, {
    	// We turn each feature into a circleMarker on the map.
    	pointToLayer: function(feature, latlng) {
      		console.log(data);
      		return L.circleMarker(latlng);
        },
      // Set the style for each circleMarker using styleInfo function.
    style: styleInfo,
     // Create popup for each circleMarker to display school name, cohort year, and location
     onEachFeature: function(feature, layer) {
      layer.bindPopup("School Name: " + feature.properties.mag + "<br>Cohort Year: " + feature.properties.place + "<br>Location: " + feature + "<br>Class: " + feature);
    }
  }).addTo(map);
});
