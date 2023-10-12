//All Data Fetch
fetch('http://localhost:3000/athletes')
    .then((resp)=>resp.json())
    .then(function(data) {
        const parentDiv = document.getElementById("athleteDiv");

        for(const item of data){
            const newDiv = document.createElement("div");

            newDiv.className = item.event;
            newDiv.hidden = true;
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
        }

    });




    
// document.addEventListener('DOMContentLoaded', ()=> {
//     document.
// })

// document.getElementById("100meter").addEventListener("click", ()=> console.log("I was clicked"));
// ()=> {
//     let array = document.getElementsByClassName("100m");
//     let modifiedArray = array.map(function(element){
//         element.hidden = false;
//         console.log(element);
//     })
    // oneH.map(function(item){
    //     item.hidden = false;
    // })
    // document.getElementsByClassName("100m").forEach((item)=>{
    //    item.hidden = false;
    // });
// });

    // console.log(document.getElementById("100meter").addEventListener("click", ()=> console.log("I was clicked")));
    // console.log(document.getElementsByClassName("100m"))


































//add event listners to the options...
//so when the option is clicked, the data is either hidden or visible...
//___To do that, we need to get the data using fetch
//___Use forEach() to sort them into divs...
//Then use filter to look for options with the id that matches an event...
//that was attached to the event that was clicked on.

//In other words:
//1. Fetch the data using interpolation to look for objects that match the ID.
    //1) 
    //1) Use fetch .then .then (function (data){ }
    //2) Assign matching 
//2. Add a click event listener to the options that triggers a function.
//3. That function will use filter() to search the fetch data for athletes that match the event.
//4. It will invoke another function that will use forEach to sort the data into divs and make the elements visible on the DOM.
    //1) The function will first check to see if there is anything in the parent div. If so, it will delete those items.
    //2) Declare a const and assign an array.
    //3) The function will then iterate through the API data using filter() and the Comparison Operator (===) to check if the data.event matches the event we're searching for.
    //4) When a match is found, it will be pushed to the new const array.
        //5) Make another function.
        //6) Use forEach() to iterate through the new const array and assign each item of each object to a newly created div and side-by-side div.
        //7) Assign each Object value to an img or p so it can be displayed on the DOM, make the Object.key the tag's id on the DOM.
    //8) Create CSS styling of the tags ids so they are all consistent in the cards



//Psuedocode
// A. DOM Structure
// DONE 1) Create Divs
// DONE 2) Add Headers
// DONE 3) Review buttons
// DONE 4) Add filter button
// DONE 5) Get filter Button working
// 6) Figure out how to attach the json data to the filter options

// B. JS DOM Divs
// DONE 1) Review how to add HTML elements with JS.
// DONE 2) Create a function that will create a div for the athlete "cards"
// 3) Use forEach() to put the json data into a div on the DOM
// DONE 4) Get the cards working

// C. Event Listeners w/ their own callback functions
// 1) Create the remove button to remove cards
// 2) Add something that will remove all the cards when "all" is selected from the filter
// 3) Add something that will show all the athletes when "all" is selected
// 4) Add a mouseover event that tells you what placing the athlete is in (1st,2nd, or 3rd)

