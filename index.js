document.addEventListener("DOMContentLoaded",()=>console.log(apiTest()))

function apiTest(){
    fetch('http://localhost:3000/athletes')
    .then((resp)=>resp.json())
    .then((data)=> console.log(data))
}
