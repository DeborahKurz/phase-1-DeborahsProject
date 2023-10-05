document.addEventListener("DOMContentLoaded",()=>fetchData());


function fetchData(){
    const latitude = 40.71427
    const longitude = 74.00597
    const url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`;
    fetch(url)
    .then((resp)=>resp.json())
    .then((data)=> console.log(data))
}