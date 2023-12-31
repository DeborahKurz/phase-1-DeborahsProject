const toggle = document.getElementById("toggleInput");
toggle.addEventListener("change", ()=> {
    const body = document.querySelector("body");
    const textBlocks = document.getElementsByClassName("text");
    if(body.style.backgroundColor === "black"){
        body.style.backgroundColor = "white";
        for(const textItem of textBlocks){
            textItem.style.color = "black";
        };
    } else {
        body.style.backgroundColor = "black";
        for(const textItem of textBlocks){
            textItem.style.color = "white";
        };
    };
});

const btnChoiceArr = document.getElementsByClassName("btnChoice");
for(let button of btnChoiceArr){
    button.addEventListener('mouseover', function(){
        button.style.backgroundColor = 'rgb(62, 61, 61)';
        button.style.color = 'white';
    });
    button.addEventListener('mouseout', function(){
        button.style.backgroundColor = "";
        button.style.color = "";
    });
};

fetch('http://localhost:3000/athletes')
    .then((resp)=>resp.json())
    .then(athleteArr => {
        sortAthletesArr(athleteArr);
        attachBtnListeners(athleteArr);
});

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
        };
    });
};   

let oneHArr = [];
let twoHArr = [];
let fourHArr = [];
let eightHArr = [];

function attachBtnListeners(athleteArr){
    let allBtn = document.getElementById("all");
    let oneHBtn = document.getElementById("oneH");
    let twoHBtn = document.getElementById("twoH");
    let fourHBtn = document.getElementById("fourH");
    let eightHBtn = document.getElementById("eightH");

    addListener(allBtn, athleteArr);
    addListener(oneHBtn, oneHArr);
    addListener(twoHBtn, twoHArr);
    addListener(fourHBtn, fourHArr);
    addListener(eightHBtn, eightHArr);
};

function addListener(button, raceEventArr){
    button.addEventListener("click", ()=>{
        deleteOldAthletes();
        renderNewAthletes(raceEventArr);
    });
};

function deleteOldAthletes(){
    const deleteAthletes = document.querySelectorAll(".allAthletes");
    for(let athleteDiv of deleteAthletes){
        athleteDiv.remove();
    };
};

function renderNewAthletes(raceEventArr){
    const parentDiv = document.getElementById("athleteDiv");
    for(const athleteObj of raceEventArr){
        const newDiv = document.createElement("div");
        newDiv.id = athleteObj.id;
        newDiv.className = "allAthletes";
        parentDiv.appendChild(newDiv);

        let h3 = document.createElement("h3");
        h3.textContent = athleteObj.event;
        let infoMain = document.createElement("main");
        infoMain.className = "athleteCard";
        newDiv.append(h3, infoMain);

        let divPart1 = document.createElement("div");
        divPart1.id = "imgDiv";
        divPart1.className = "athleteInfo";
        let divPart2 = document.createElement("div");
        divPart2.id = "bioDiv";
        divPart2.className = "athleteInfo";
        let divPart3 = document.createElement("div");
        divPart3.id = "closeDiv";
        divPart3.className = "athleteInfo";
        infoMain.append(divPart1, divPart2, divPart3);

        let imgDiv1 = document.createElement("div");
        let img = document.createElement("img");
        img.src = athleteObj.image;
        img.alt = "Athlete Profile Picture";
        imgDiv1.appendChild(img);

        let imgDiv2 = document.createElement("div");
        let a = document.createElement("a");
        a.textContent = "Image Source";
        a.href = athleteObj.image;
        imgDiv2.appendChild(a);

        divPart1.append(imgDiv1, imgDiv2);

        let p = document.createElement("p");
        p.textContent = athleteObj.name;
        let p2 = document.createElement("p");
        p2.textContent = athleteObj.time;
        divPart2.append(p, p2);

        let button = document.createElement("button");
        button.id = `btn${athleteObj.id}`;
        button.className = "closeCard";
        button.textContent = " X ";
        divPart3.appendChild(button);

        let buttonId = athleteObj.id;
        closeBtn(buttonId);
    };   
};

function closeBtn(buttonId){
    let athleteCard = document.getElementById(`${buttonId}`);
    let closeBtn = document.getElementById(`btn${buttonId}`);
    closeBtn.addEventListener("click", ()=>{
        athleteCard.remove();
    });
};