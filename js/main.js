/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

$( document ).ready(function() {

//map layers
  
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
 
 var whiteAnnapurna =  L.tileLayer('https://api.mapbox.com/styles/v1/dovde/ciyrkqc9f001t2so761ogf7bo/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG92ZGUiLCJhIjoiY2l5a29jaTBzMDAyODJxdDh1cXUwZHVndSJ9.z6wsWHnftHnrqsH6Bjhxbg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'pk.eyJ1IjoiZG92ZGUiLCJhIjoiY2l5a29jaTBzMDAyODJxdDh1cXUwZHVndSJ9.z6wsWHnftHnrqsH6Bjhxbg'
});	
	
	// here I make the layers an object to put into the map
	
  var mtMaps = {
	"White Map" :	whiteAnnapurna,
	"Satellite": satAnnapurna,
	"Topographic": topAnnapurna
};
  
  var myMap = L.map('map-container', {
	center: [28.794671, 83.937368],
	zoom: 8,
  layers: [satAnnapurna, ]

});
	
	// marker inputs
	L.marker([28.79353, 83.938]).addTo(myMap)
    .bindPopup(' Thorung La pass');

	
	L.marker([28.61543, 84.14748]).addTo(myMap)
    .bindPopup('Lower Pisang');

	
	L.marker([28.5334, 84.1992]).addTo(myMap)
    .bindPopup('Chame');

	
		L.marker([28.2844, 84.3729]).addTo(myMap)
    .bindPopup('Khudi');
		
		
		L.marker([28.1830, 84.1554]).addTo(myMap)
    .bindPopup('Dharapani');
		
		
		L.marker([28.7763, 83.6861]).addTo(myMap)
    .bindPopup('Marpha');
		
		L.marker([28.5, 83.633333]).addTo(myMap)
    .bindPopup('Tatopani');
		
	L.marker([28.6220, 83.6049]).addTo(myMap)
    .bindPopup('Lete');
	
	// this  puts the map layers into the html container
		
L.control.layers(mtMaps).addTo(myMap);
  

	// here I am making the navbar work by showing the correct content and jumping to it when 
	// it is clicked
  
$(".clickBtn").on("click", function(event){
  event.stopPropagation();

  
  var eventTrigger = $(event.target);
  
  
    if ($(eventTrigger).is(".description-btn")){

     $('#description-tab').tab('show');
      
    } else if($(eventTrigger).is(".history-btn")){
       $('#history-tab').tab('show');
      
    }else if($(eventTrigger).is(".stats-tab")){
      $('#stats-tab').tab('show');
    }else {
			$('#annapurna-weather-tab').tab('show');

		}
    
});

	// smooth scrolling function

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
	// fixed scrolling navbar

$('.navbar-inverse').affix({offset: {top: 150} });
	
	

// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

});