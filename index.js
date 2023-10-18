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

        const deleteButton = document.getElementsByClassName("closeCard");


        allBtn.addEventListener("click", ()=> {
            deleteDiv();

            domData = makeDiv(data);
    
            deleteCard("1");
            deleteCard("2");
            deleteCard("3");
            deleteCard("4");
            deleteCard("5");
            deleteCard("6");
            deleteCard("7");
            deleteCard("8");
            deleteCard("9");
            deleteCard("10");
            deleteCard("11");
            deleteCard("12");

            return domData;
        });

        const dataArray = [...data];
       

        oneHBtn.addEventListener("click", function(data){
            deleteDiv();
            dataArray.forEach(object => {
                if(object.event === "100m"){
                    let newArray = [];
                    newArray.push(object);
                    return makeDiv(newArray);
                };
            });
            deleteCard("1");
            deleteCard("2");
            deleteCard("3");
        });

        twoHBtn.addEventListener("click", function(data){
            deleteDiv();
            dataArray.forEach(object => {
                if(object.event === "200m"){
                    let newArray = [];
                    newArray.push(object);
                    return makeDiv(newArray);
                };
            });
            deleteCard("4");
            deleteCard("5");
            deleteCard("6");
        });

        fourHBtn.addEventListener("click", function(data){
            deleteDiv();
            dataArray.forEach(object => {
                if(object.event === "400m"){
                    let newArray = [];
                    newArray.push(object);
                    return makeDiv(newArray);
                };
            });
            deleteCard("7");
            deleteCard("8");
            deleteCard("9");
        });

        eightHBtn.addEventListener("click", function(data){
            deleteDiv();
            dataArray.forEach(object => {
                if(object.event === "800m"){
                    let newArray = [];
                    newArray.push(object);
                    return makeDiv(newArray);
                };
            });
            deleteCard("10");
            deleteCard("11");
            deleteCard("12");
        });

    });

//deletes any existing divs when a button is pressed
function deleteDiv(){
    const deleteAthletes = document.querySelectorAll(".allAthletes");
    for(let item of deleteAthletes){
        item.remove();
    }
};

//Attach event listener to delete button
function deleteCard(id){
    const closeBtn = document.getElementById(id);
    return addListener(closeBtn);
};
//Event Listener for delete button
function addListener(btn) {
    btn.addEventListener("click", function(){
        deleteCards(btn)
    })
};
//Functin for addListener
function deleteCards(cardId){
    cardId.remove();
};

//fetch
function makeDiv(data){
    const parentDiv = document.getElementById("athleteDiv");
    for(const item of data){
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
};


//Buttons
const allBtn = document.getElementById("all");
const oneHBtn = document.getElementById("oneH");
const twoHBtn =  document.getElementById("twoH");
const fourHBtn = document.getElementById("fourH");
const eightHBtn = document.getElementById("eightH");


document.addEventListener("DOMContentLoaded", ()=>{
    const btnChoice = document.getElementsByClassName("btnChoice");
    addMouseEvents(btnChoice);
})

function addMouseEvents(object){
    for(let item of object){
        item.addEventListener('mouseover', function(){
            mouseOver(item);
        })
        item.addEventListener('mouseout', function(){
            mouseOut(item);
        })
    }
};

function mouseOver(button){
    button.style.backgroundColor = 'rgb(62, 61, 61)';
    button.style.color = 'white';
}

function mouseOut(button){
    button.style.backgroundColor = "";
    button.style.color = "";
}