mapboxgl.accessToken = 'pk.eyJ1IjoiZXRhZWtwbyIsImEiOiJjbDVqbGxrYWowMWJqM3BubW9pbmhubnFzIn0.reC9Wx3BrlMMkpy-lWLhIA'

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
  })

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
  }

function errorLocation() {
    setupMap([-2.24, 53.48])
  }
  


function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom:10

      });
      const marker = new mapboxgl.Marker({
        color: "red",
        draggable: false
    })  .setLngLat([7.9128, 5.0377])
        .addTo(map);
        const marker1 = new mapboxgl.Marker({
          color: "red",
          draggable: false
      })  .setLngLat([7.9929, 4.6467])
          .addTo(map);
      
    

      map.addControl(new mapboxgl.NavigationControl());
    
}



  // Create a new marker.
// Set marker options.
const marker = new mapboxgl.Marker({
    color: "red",
    draggable: false
})  .setLngLat([7.9128, 5.0377])
    .addTo(map);

const marker1 = new mapboxgl.Marker({
    color: "red",
    draggable: false
})  .setLngLat([7.9929, 4.6467])
    .addTo(map);

const marker2 = new mapboxgl.Marker({
    color: "yellow",
    draggable: false
})  .setLngLat([7.7485, 4.7322])
    .addTo(map);

const marker3 = new mapboxgl.Marker({
    color: "green",
    draggable: false
})  .setLngLat([7.9128, 5.0377])
    .addTo(map);

const marker4 = new mapboxgl.Marker({
    color: "green",
    draggable: false
})  .setLngLat([3.9470, 7.3775])
    .addTo(map);

const marker5 = new mapboxgl.Marker({
    color: "red",
    draggable: false
})  .setLngLat([8.3417, 4.9757])
    .addTo(map);

 

