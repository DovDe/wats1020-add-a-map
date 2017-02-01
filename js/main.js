/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

$( document ).ready(function() {

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.
  
// var mymap = L.map('map-container').setView([28.7612, 83.7119], 13);
  
var satAnnapurna = L.tileLayer('https://api.mapbox.com/styles/v1/dovde/ciylqiodi001f2rlrx8mmdqvg/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG92ZGUiLCJhIjoiY2l5a29jaTBzMDAyODJxdDh1cXUwZHVndSJ9.z6wsWHnftHnrqsH6Bjhxbg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'pk.eyJ1IjoiZG92ZGUiLCJhIjoiY2l5a29jaTBzMDAyODJxdDh1cXUwZHVndSJ9.z6wsWHnftHnrqsH6Bjhxbg'
});
  
 var topAnnapurna =  L.tileLayer('https://api.mapbox.com/styles/v1/dovde/ciym1dkcg002o2sku8f17m8ac/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG92ZGUiLCJhIjoiY2l5a29jaTBzMDAyODJxdDh1cXUwZHVndSJ9.z6wsWHnftHnrqsH6Bjhxbg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'pk.eyJ1IjoiZG92ZGUiLCJhIjoiY2l5a29jaTBzMDAyODJxdDh1cXUwZHVndSJ9.z6wsWHnftHnrqsH6Bjhxbg'
});
  
  var baseMaps = {
	"Satellite": satAnnapurna,
	"Topographic": topAnnapurna
};
  
  var myMap = L.map('map-container', {
	center: [28.7612, 83.7119],
	zoom: 12,
  layers: [satAnnapurna, ]

});

L.control.layers(baseMaps).addTo(myMap);
  
//   $('.carousel').carousel('pause');
// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:
  
$(".clickBtn").on("click", function(event){
  event.stopPropagation();

  
  var eventTrigger = $(event.target);
  
  
    if ($(eventTrigger).is(".description-btn")){

     $('#description-tab').tab('show');
      
    } else if($(eventTrigger).is(".history-btn")){
       $('#history-tab').tab('show');
      
    }else{
      $('#stats-tab').tab('show');
    }
    
});


  


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

});