  mapboxgl.accessToken = 'pk.eyJ1IjoiZXRhZWtwbyIsImEiOiJjbDVqbGxrYWowMWJqM3BubW9pbmhubnFzIn0.reC9Wx3BrlMMkpy-lWLhIA';

let selectMap = document.querySelector("#map-select");

var optionsJan ={
   map: new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [5.7669, 5.5494],
        zoom:6
      }),
} 

var work = new Map(document.querySelector("map"), optionsJan)


function onChangeOption(event){
    let eventValue = event.target.value;
    if(eventValue === "one"){
        work.updateOptions({
            trial: new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [8.3417, 4.9757],
                zoom: 9
              }),  //calabar    
            
        })
    }
    else if (eventValue === "two"){
        work.updateOptions({
             trial: new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [7.9128, 5.0377],
                zoom: 9,
                // uyo
              }), 
        })
    }
     else if(eventValue === "three"){
        work.updateOptions({
            trial: new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [7.7145, 5.1744],
                zoom: 9
              }),
              //ikot-ekpene
        })
    }
    else if(eventValue === "four"){
        work.updateOptions({
            trial: new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [7.9429, 4.6467],
                zoom: 9
              }),
              //eket
        })
    }
    else if(eventValue === "five"){
        work.updateOptions({
            trial: new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [8.2377, 4.8074],
                zoom: 9
              }),
              //oron
        })
    }
    else if(eventValue === "six"){
        work.updateOptions({
            trial: new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [8.3499, 5.0812],
                zoom: 9
              }),
              //odukpani
        })
        
    }
    if(eventValue === "seven"){
        work.updateOptions({
            trial: new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [7.3733, 5.1216],
                zoom: 9
              }),
              //aba
        })
    } 
    
}

selectMap.addEventListener("change", onChangeOption);


