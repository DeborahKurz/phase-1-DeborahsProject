//All Data Fetch
fetch('http://localhost:3000/athletes')
    .then((resp)=>resp.json())
    .then(function(data) {

        const allAthletes = document.getElementsByClassName("allAthletes");
        const twoHAthletes = document.getElementsByClassName("200m");
        const fourHAthletes = document.getElementsByClassName("400m");
        const eightHAthletes = document.getElementsByClassName("800m");

        const deleteButton = document.getElementsByClassName("closeCard");

        allBtn.addEventListener("click", ()=> {
            deleteDiv();

            domData = makeDiv(data);

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

function deleteDiv(){
    const deleteAthletes = document.querySelectorAll(".allAthletes");
    for(let item of deleteAthletes){
        item.remove();
    }
};

function deleteCards(cardId){
    cardId.remove();
};

function deleteCardOne(){
    const deleteBtn = document.getElementById("1");
    const deleteCard = document.getElementById("1");
    deleteBtn.addEventListener("click", function(){
        deleteCards(deleteCard);
    });
};

function deleteCardTwo(){
    const deleteBtn = document.getElementById("2");
    const deleteCard = document.getElementById("2");
    deleteBtn.addEventListener("click", function(){
        deleteCards(deleteCard);
    });
};

function deleteCardThree(){
    const deleteBtn = document.getElementById("3");
    const deleteCard = document.getElementById("3");
    deleteBtn.addEventListener("click", function(){
        deleteCards(deleteCard);
    });
};

function deleteCardFour(){
    const deleteBtn = document.getElementById("4");
    const deleteCard = document.getElementById("4");
    deleteBtn.addEventListener("click", function(){
        deleteCards(deleteCard);
    });
};

function deleteCardFive(){
    const deleteBtn = document.getElementById("5");
    const deleteCard = document.getElementById("5");
    deleteBtn.addEventListener("click", function(){
        deleteCards(deleteCard);
    });
};

function deleteCardSix(){
    const deleteBtn = document.getElementById("6");
    const deleteCard = document.getElementById("6");
    deleteBtn.addEventListener("click", function(){
        deleteCards(deleteCard);
    });
};

function deleteCardSeven(){
    const deleteBtn = document.getElementById("7");
    const deleteCard = document.getElementById("7");
    deleteBtn.addEventListener("click", function(){
        deleteCards(deleteCard);
    });
};

function deleteCardEight(){
    const deleteBtn = document.getElementById("8");
    const deleteCard = document.getElementById("8");
    deleteBtn.addEventListener("click", function(){
        deleteCards(deleteCard);
    });
};

function deleteCardNine(){
    const deleteBtn = document.getElementById("9");
    const deleteCard = document.getElementById("9");
    deleteBtn.addEventListener("click", function(){
        deleteCards(deleteCard);
    });
};

function deleteCardTen(){
    const deleteBtn = document.getElementById("10");
    const deleteCard = document.getElementById("10");
    deleteBtn.addEventListener("click", function(){
        deleteCards(deleteCard);
    });
};

function deleteCardEleven(){
    const deleteBtn = document.getElementById("11");
    const deleteCard = document.getElementById("11");
    deleteBtn.addEventListener("click", function(){
        deleteCards(deleteCard);
    });
};

function deleteCardTwelve(){
    const deleteBtn = document.getElementById("12");
    console.log(deleteBtn)
    const deleteCard = document.getElementById("12");
    console.log(deleteCard)
    deleteBtn.addEventListener("click", function(){
        deleteCards(deleteCard);
    });
};


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


//Hover Button Event Listeners:
const allBtn = document.getElementById("all");
const oneHBtn = document.getElementById("oneH");
const twoHBtn =  document.getElementById("twoH");
const fourHBtn = document.getElementById("fourH");
const eightHBtn = document.getElementById("eightH");
//
allBtn.addEventListener("mouseover", ()=> {
    allBtn.style.backgroundColor = 'rgb(62, 61, 61)';
    allBtn.style.color = 'white';
});
allBtn.addEventListener("mouseout", ()=> {
    allBtn.style.backgroundColor = "";
    allBtn.style.color = "";
});
//
oneHBtn.addEventListener("mouseover", ()=> {
    oneHBtn.style.backgroundColor = 'rgb(62, 61, 61)';
    oneHBtn.style.color = 'white';
});
oneHBtn.addEventListener("mouseout", ()=> {
    oneHBtn.style.backgroundColor = "";
    oneHBtn.style.color = "";
});
//
twoHBtn.addEventListener("mouseover", ()=> {
    twoHBtn.style.backgroundColor = 'rgb(62, 61, 61)';
    twoHBtn.style.color = 'white';
});
twoHBtn.addEventListener("mouseout", ()=> {
    twoHBtn.style.backgroundColor = "";
    twoHBtn.style.color = "";
});
//
fourHBtn.addEventListener("mouseover", ()=> {
    fourHBtn.style.backgroundColor = 'rgb(62, 61, 61)';
    fourHBtn.style.color = 'white';
});
fourHBtn.addEventListener("mouseout", ()=> {
    fourHBtn.style.backgroundColor = "";
    fourHBtn.style.color = "";
});
//
eightHBtn.addEventListener("mouseover", ()=> {
    eightHBtn.style.backgroundColor = 'rgb(62, 61, 61)';
    eightHBtn.style.color = 'white';
});
eightHBtn.addEventListener("mouseout", ()=> {
    eightHBtn.style.backgroundColor = "";
    eightHBtn.style.color = "";
});




//Psuedocode
// A. DOM Structure
// DONE 1) Create Divs
// DONE 2) Add Headers
// DONE 3) Review buttons
// DONE 4) Add filter button
// DONE 5) Get filter Button working
// DONE 6) Figure out how to attach the json data to the button options

// B. JS DOM Divs
// DONE 1) Review how to add HTML elements with JS.
// DONE 2) Create a function that will create a div for the athlete "cards"
// DONE 3) Use forEach() to put the json data into a div on the DOM
// DONE 4) Get the cards working

// C. Event Listeners w/ their own callback functions
// DONE 1) Create the remove button to remove cards
// DONE 2) Add something that will show all the athletes when "all" is selected
// 3) Add one more type of event listener (have button and mouseover)