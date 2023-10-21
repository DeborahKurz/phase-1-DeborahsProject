const toggle = document.getElementById("toggleInput");
const body = document.querySelector("body");
const text = document.getElementsByClassName("text");

toggle.addEventListener("change", ()=> {
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

fetch('http://localhost:3000/athletes')
    .then((resp)=>resp.json())
    .then(function(data) {

        const dataArray = [...data];

        allBtn.addEventListener("click", ()=>{
            deleteDiv();
            makeAthleteCardForAll(dataArray);
        })

        oneHBtn.addEventListener("click", ()=>{
            deleteDiv();
            makeAthleteCard("100m", dataArray);
        });

        twoHBtn.addEventListener("click", ()=>{
            deleteDiv();
            makeAthleteCard("200m", dataArray);
        });

        fourHBtn.addEventListener("click", ()=>{
            deleteDiv();
            makeAthleteCard("400m", dataArray);
        });

        eightHBtn.addEventListener("click", ()=>{
            deleteDiv();
            makeAthleteCard("800m", dataArray);
        });

    });

function makeAthleteCard(meters, array){
    array.forEach(object => {
        if(object.event === meters){
            makeDiv(object);
            let objectId = object.id;
            let closeBtn = document.getElementById(objectId);
            closeBtn.addEventListener("click", function(){
                closeBtn.remove();
            });
        };
    });
}

function makeAthleteCardForAll(array){
    array.forEach((object) => {
        makeDiv(object);
        let objectId = object.id;
        let closeBtn = document.getElementById(objectId);
        closeBtn.addEventListener("click", function(){
            closeBtn.remove();
        });
    });
};

//Buttons:
const allBtn = document.getElementById("all");
const oneHBtn = document.getElementById("oneH");
const twoHBtn =  document.getElementById("twoH");
const fourHBtn = document.getElementById("fourH");
const eightHBtn = document.getElementById("eightH");

//deletes any existing divs when a button is pressed
function deleteDiv(){
    const deleteAthletes = document.querySelectorAll(".allAthletes");
    for(let item of deleteAthletes){
        item.remove();
    }
};

//Make Divs In Fetch
function makeDiv(item){
    const parentDiv = document.getElementById("athleteDiv");
    // for(const item of data){
        const newDiv = document.createElement("div");

        newDiv.id = item.id;
        newDiv.classList.add(item.event, 'allAthletes');
        parentDiv.appendChild(newDiv);

        let h3 = document.createElement("h3");
        let infoDiv = document.createElement("main");
        newDiv.append(h3, infoDiv);

        h3.textContent = item.event;
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

        img.src = item.image;

        let p = document.createElement("p");
        let p2 = document.createElement("p");
        divPart2.append(p, p2);

        p.textContent = item.name;
        p2.textContent = item.time;

        let button = document.createElement("button");
        divPart3.appendChild(button);

        button.id = item.id;
        button.className = "closeCard";
        button.textContent = " X ";
    };
// };

//MouseOver and MouseOut events:
document.addEventListener("DOMContentLoaded", ()=>{
    const btnChoice = document.getElementsByClassName("btnChoice");
    addMouseEvents(btnChoice);
})

function addMouseEvents(object){
    for(let item of object){
        item.addEventListener('mouseover', function(){
            item.style.backgroundColor = 'rgb(62, 61, 61)';
            item.style.color = 'white';
        })
        item.addEventListener('mouseout', function(){
            item.style.backgroundColor = "";
            item.style.color = "";
        })
    }
};