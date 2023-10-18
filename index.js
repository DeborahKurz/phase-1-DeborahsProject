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
            const closeButtons = [];
    
            deleteCardOne();
            deleteCardTwo();
            deleteCardThree();
            deleteCardFour();
            deleteCardFive();
            deleteCardSix();
            deleteCardSeven();
            deleteCardEight();
            deleteCardNine();
            deleteCardTen();
            deleteCardEleven();
            deleteCardTwelve();

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
            deleteCardOne();
            deleteCardTwo();
            deleteCardThree();
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
            deleteCardFour();
            deleteCardFive();
            deleteCardSix();
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
            deleteCardSeven();
            deleteCardEight();
            deleteCardNine();
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
            deleteCardTen();
            deleteCardEleven();
            deleteCardTwelve();
        });

    });

//deletes any existing divs when a button is pressed
function deleteDiv(){
    const deleteAthletes = document.querySelectorAll(".allAthletes");
    for(let item of deleteAthletes){
        item.remove();
    }
};

//Functin for addListener
function deleteCards(cardId){
    cardId.remove();
};
//Event Listener for delete button
function addListener(btn) {
    btn.addEventListener("click", function(){
        deleteCards(btn)
    })
};


//delete buttons
function deleteCardOne(){
    const closeBtn = document.getElementById("1");
    return addListener(closeBtn);
};

function deleteCardTwo(){
    const closeBtn = document.getElementById("2");
    return addListener(closeBtn);
};

function deleteCardThree(){
    const closeBtn = document.getElementById("3");
    return addListener(closeBtn);
};

function deleteCardFour(){
    const closeBtn = document.getElementById("4");
    return addListener(closeBtn);
};

function deleteCardFive(){
    const closeBtn = document.getElementById("5");
    return addListener(closeBtn);
};

function deleteCardSix(){
    const closeBtn = document.getElementById("6");
    return addListener(closeBtn);
};

function deleteCardSeven(){
    const closeBtn = document.getElementById("7");
    return addListener(closeBtn);
};

function deleteCardEight(){
    const closeBtn = document.getElementById("8");
    return addListener(closeBtn);
};

function deleteCardNine(){
    const closeBtn = document.getElementById("9");
    return addListener(closeBtn);
};

function deleteCardTen(){
    const closeBtn = document.getElementById("10");
    return addListener(closeBtn);
};

function deleteCardEleven(){
    const closeBtn = document.getElementById("11");
    return addListener(closeBtn);
};

function deleteCardTwelve(){
    const closeBtn = document.getElementById("12");
    return addListener(closeBtn);
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

//mouseOver & mouseOut Functions
function mouseOver(button){
    button.style.backgroundColor = 'rgb(62, 61, 61)';
    button.style.color = 'white';
}

function mouseOut(button){
    button.style.backgroundColor = "";
    button.style.color = "";
}

//mouseover and mouseout Event Listeners *

allBtn.addEventListener("mouseover", ()=> {
    return mouseOver(allBtn);
});

allBtn.addEventListener("mouseout", ()=> {
    return mouseOut(allBtn);
});


oneHBtn.addEventListener("mouseover", ()=> {
    return mouseOver(oneHBtn);
});

oneHBtn.addEventListener("mouseout", ()=> {
    return mouseOut(oneHBtn);
});
//
twoHBtn.addEventListener("mouseover", ()=> {
    return mouseOver(twoHBtn);
});
twoHBtn.addEventListener("mouseout", ()=> {
    return mouseOut(twoHBtn);
});
//
fourHBtn.addEventListener("mouseover", ()=> {
    return mouseOver(fourHBtn);
});
fourHBtn.addEventListener("mouseout", ()=> {
    return mouseOut(fourHBtn);
});
//
eightHBtn.addEventListener("mouseover", ()=> {
    return mouseOver(eightHBtn);
});
eightHBtn.addEventListener("mouseout", ()=> {
    return mouseOut(eightHBtn);
});
