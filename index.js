document.addEventListener("DOMContentLoaded",()=>cstCdt());


//BEGIN Latitude & Longitude
function akstAkdt(){
    //Anchorage was used for lat & lon
    const latitude = 61.217381
    const longitude = -149.863129
    return fetchData(latitude,longitude); 
}

function hst(){
    //Honolulu was used for lat & lon
    const latitude = 21.315603
    const longitude = -157.858093
    return fetchData(latitude,longitude); 
}

function pstPdt(){
    //Los Angeles was used for lat & lon
    const latitude = 34.052235
    const longitude = -118.243683
    return fetchData(latitude,longitude); 
}

function mstMdt(){
    //Denver was used for lat & lon
    const latitude = 39.742043
    const longitude = -104.991531
    return fetchData(latitude,longitude); 
}

function cstCdt(){
    //Chicago was used for lat & lon
    const latitude = 41.85003
    const longitude = -87.65005
    return fetchData(latitude,longitude); 
}

function estEdt(){
    //NYC was used for lat & lon
    const latitude = 40.71427
    const longitude = 74.00597
    return fetchData(latitude,longitude);
}
//END Latitude & Longitude
//BEGIN fetch request
function fetchData(latitude, longitude){
    const url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`;
    fetch(url)
    .then((resp)=>resp.json())
    .then((data)=> console.log(data))
}
//END fetch request