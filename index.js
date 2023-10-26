const toggle = document.getElementById("toggleInput");

toggle.addEventListener("change", ()=> {
    const body = document.querySelector("body");
    const text = document.getElementsByClassName("text");
    if(body.style.backgroundColor === "black"){
        body.style.backgroundColor = "white";
        for(const item of text){
            item.style.color = "black";
        }
    } else {
        body.style.backgroundColor = "black";
        for(const item of text){
            item.style.color = "white";
        }
    }
});

let oneHArr = [];
let twoHArr = [];
let fourHArr = [];
let eightHArr = [];

let oneHBtn = document.getElementById("oneH");

fetch('http://localhost:3000/athletes')
    .then((resp)=>resp.json())
    .then(athleteArr => {

        sortAthletesArr(athleteArr)
        
        oneHBtn.addEventListener("click", ()=>{
            deleteOldAthletes();
            for(const athlete of oneHArr){
                renderNewAthletes(athlete)
            }
        })


})

function sortAthletesArr(athleteArr){
    athleteArr.forEach(athleteObj => {
        if(athleteObj.event === "100m"){
            oneHArr.push(athleteObj);
        }else if(athleteObj.event === "200m"){
            twoHArr.push(athleteObj);
        }else if(athleteObj.event === "400m"){
            fourHArr.push(athleteObj);
        }else if(athleteObj.event === "800m"){
            eightHArr.push(athleteObj);
        }
    })
}   

console.log(oneHArr)
console.log(twoHArr)
console.log(fourHArr)
console.log(eightHArr)

        // for(const athleteObj of athleteArr){
        //     if(athleteObj.event === "100m"){
        //         let oneHBtn = document.getElementById("oneH");
        //         let newAthleteArr = [];
        //         newAthleteArr.push(athleteObj);
        //         console.log(newAthleteArr)

//         athleteArr.forEach(athleteObj =>{
//         //     let allBtn = document.getElementById("all")
//         //         allBtn.addEventListener("click", ()=>{
//         //             deleteOldAthletes()
//         //             renderNewAthletes(athleteObj)
//         //         })
//             if(athleteObj.event === "100m"){

//             }else if(athleteObj.event === "200m"){
//                 let twoHBtn = document.getElementById("twoH")
//                     twoHBtn.addEventListener("click", ()=>{
//                         renderNewAthletes(athleteObj)
//                     })
//             }else if(athleteObj.event === "400m"){
//                 let fourHBtn = document.getElementById("fourH")
//                     fourHBtn.addEventListener("click", ()=>{
//                         deleteOldAthletes()
//                         renderNewAthletes(athleteObj)
//                     })
//             }else if(athleteObj.event === "800m"){
//                 let eightHBtn = document.getElementById("eightH")
//                     eightHBtn.addEventListener("click", ()=>{
//                         deleteOldAthletes()
//                         renderNewAthletes(athleteObj)
//                     })
//             } 
//         }
// )
// });

function deleteOldAthletes(){
    console.log("deleteOldAthletes was clicked")

    const deleteAthletes = document.querySelectorAll(".allAthletes");
    for(let athleteDiv of deleteAthletes){
        athleteDiv.remove();
    }
};

function renderNewAthletes(athleteObj){
    // console.log("renderNewAthletes was clicked")

    const parentDiv = document.getElementById("athleteDiv");
    const newDiv = document.createElement("div");

    newDiv.id = athleteObj.id;
    newDiv.classList.add(athleteObj.event, 'allAthletes');
    parentDiv.appendChild(newDiv);

    let h3 = document.createElement("h3");
    let infoDiv = document.createElement("main");
    newDiv.append(h3, infoDiv);

    h3.textContent = athleteObj.event;
    infoDiv.className = "athleteCard";

    let divPart1 = document.createElement("div");
    let divPart2 = document.createElement("div");
    let divPart3 = document.createElement("div");
    infoDiv.append(divPart1, divPart2, divPart3);

    divPart1.id = "imgDiv";
    divPart1.className = "athleteInfo";

    divPart2.id = "bioDiv";
    divPart2.className = "athleteInfo";

    divPart3.id = "closeDiv";
    divPart3.className = "athleteInfo";

    let img = document.createElement("img");
    divPart1.appendChild(img);

    img.src = athleteObj.image;

    let p = document.createElement("p");
    let p2 = document.createElement("p");
    divPart2.append(p, p2);

    p.textContent = athleteObj.name;
    p2.textContent = athleteObj.time;

    let button = document.createElement("button");
    divPart3.appendChild(button);

    button.id = athleteObj.id;
    button.className = "closeCard";
    button.textContent = " X ";
}

            //add eventlistener to coresponding btnChoice

        //event listener btnChoiceArr
            //for each item of btnChoiceArr


        //sort obj based on their event
        //add event listeners to each btn in btnChoice
        //when a button is clicked, the data is run through a render funtion
        // addBtnListeners(athleteObjs);



// const btnChoice = document.getElementsByClassName("btnChoice");

// fetch('http://localhost:3000/athletes')
//     .then((resp)=>resp.json())
//     .then(athleteObjs => {
//         addBtnListeners(athleteObjs);
// });

// function addBtnListeners(athleteObjs){
//     for(const item of btnChoice){
//         if(item.id === "all"){
//             let allAthletes = document.getElementById(item.id);
//             allAthletes.addEventListener("click", ()=>{
//                 deleteDiv();
//                 makeAthleteCardForAll(athleteObjs);
//             });
//         }else if(item.id === "oneH"){
//             let btnId = item.id;
//             let race = "100m";
//             btnListener(btnId, race);
//         }else if(item.id === "twoH"){
//             let btnId = item.id;
//             let race = "200m";
//             btnListener(btnId, race);
//         }else if(item.id === "fourH"){
//             let btnId = item.id;
//             let race = "400m";
//             btnListener(btnId, race);
//         }else if(item.id === "eightH"){
//             let btnId = item.id;
//             let race = "800m";
//             btnListener(btnId, race, data);
//         }
// }};

// function btnListener(btnId, race, data){
//     let element = document.getElementById(btnId);
//     element.addEventListener("click", ()=>{
//         deleteDiv();
//         makeAthleteCard(race, data);
//     });
// }

// function makeAthleteCardForAll(array){
//     array.forEach(createCard);
//     };

// function makeAthleteCard(meters, array){
//     array.forEach(object => {
//         if(object.event === meters){
//             createCard(object);
//         };
//     });
// }

// function createCard(object){
//     makeDiv(object);
//     let objectId = object.id;
//     let closeBtn = document.getElementById(objectId);
//     closeBtn.addEventListener("click", function(){
//         closeBtn.remove();
//     });
// }

// function deleteDiv(){
//     const deleteAthletes = document.querySelectorAll(".allAthletes");
//     for(let item of deleteAthletes){
//         item.remove();
//     }
// };

// function makeDiv(item){
//     const parentDiv = document.getElementById("athleteDiv");
//     const newDiv = document.createElement("div");

//     newDiv.id = item.id;
//     newDiv.classList.add(item.event, 'allAthletes');
//     parentDiv.appendChild(newDiv);

//     let h3 = document.createElement("h3");
//     let infoDiv = document.createElement("main");
//     newDiv.append(h3, infoDiv);

//     h3.textContent = item.event;
//     infoDiv.className = "athleteCard";

//     let divPart1 = document.createElement("div");
//     let divPart2 = document.createElement("div");
//     let divPart3 = document.createElement("div");
//     infoDiv.append(divPart1, divPart2, divPart3);

//     divPart1.id = "imgDiv";
//     divPart1.className = "athleteInfo";

//     divPart2.id = "bioDiv";
//     divPart2.className = "athleteInfo";

//     divPart3.id = "closeDiv";
//     divPart3.className = "athleteInfo";


//     let img = document.createElement("img");
//     divPart1.appendChild(img);

//     img.src = item.image;

//     let p = document.createElement("p");
//     let p2 = document.createElement("p");
//     divPart2.append(p, p2);

//     p.textContent = item.name;
//     p2.textContent = item.time;

//     let button = document.createElement("button");
//     divPart3.appendChild(button);

//     button.id = item.id;
//     button.className = "closeCard";
//     button.textContent = " X ";
//     };

// document.addEventListener("DOMContentLoaded", ()=>{
//     addMouseEvents(btnChoice);
// })

// function addMouseEvents(object){
//     for(let item of object){
//         item.addEventListener('mouseover', function(){
//             item.style.backgroundColor = 'rgb(62, 61, 61)';
//             item.style.color = 'white';
//         })
//         item.addEventListener('mouseout', function(){
//             item.style.backgroundColor = "";
//             item.style.color = "";
//         })
//     }
// };