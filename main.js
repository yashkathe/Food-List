//getting form to user onSUbmit and list to append

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const breakFastLi = document.getElementById("breakFastLi");
const lunchLi = document.getElementById("lunchLi");
const snackLi = document.getElementById("snackLi");
const dinnerLi = document.getElementById("dinnerLi");

//getting user input

const nameOfFood = document.querySelector("[name='food']");
const typeOfFood = document.getElementById("select-opt");
const typeOfFood2 = document.getElementById("select-opt2");

//getting buttons and p for toggle

const info_btn = document.getElementById("info_btn");
const info_para = document.getElementById("info_para");

//empty arrays

const breakfastList = [];
const lunchList = [];
const snackList = [];
const dinnerList = [];

//getting all the stored items in local storage

breakFastLiLocal = JSON.parse(localStorage.getItem('breakfastList'))
lunchLiLocal=JSON.parse(localStorage.getItem('lunchList'))
snackLiLocal=JSON.parse(localStorage.getItem('snackList'))
dinnerLiLocal=JSON.parse(localStorage.getItem('dinnerList'))

//checking for empty fields
function errorCheck() {
    if (nameOfFood.value.trim() === "") {
        throw new Error('Dont leave the field empty')
    }
}

//creating a new list item to display
function addElement(foodName, listname) {
    const li = document.createElement("li");
    li.innerHTML = foodName;
    // listname.appendChild(li)
}

//clear user input on form submission
function clearInput() {
    nameOfFood.value = "";
    typeOfFood.value = "default";
}

//this function will fire up upon form submission
form1.onsubmit = (event) => {
    event.preventDefault();

    // items.push(nameOfFood.value)
    // items2.push(typeOfFood.value)
    // console.log(items)
    // console.log(items2)

    //creating a newfood object 

    errorCheck();

    const DeleteButton = document.createElement('button')
    DeleteButton.textContent = 'delete'

    const newFood = {
        name: nameOfFood.value,
        type: typeOfFood.value,
        id: Math.random(),
    };
    // conditionally entering values
    
    if (typeOfFood.value === "Breakfast") {
        breakfastList.push(newFood);
        localStorage.setItem("breakfastList", JSON.stringify(breakfastList));
        const li = document.createElement("li");
        li.innerHTML = newFood.name
        const child = breakFastLi.appendChild(li);
        child.appendChild(DeleteButton)
    } else if (typeOfFood.value === "Lunch") {
        lunchList.push(newFood);
        localStorage.setItem("lunchList", JSON.stringify(lunchList));
        const li = document.createElement("li");
        li.innerHTML = newFood.name;
        const child = lunchLi.appendChild(li);
        child.appendChild(DeleteButton)
    } else if (typeOfFood.value === "Snack") {
        snackList.push(newFood);
        localStorage.setItem("snackList", JSON.stringify(snackList));
        const li = document.createElement("li");
        li.innerHTML = newFood.name;
        const child = snackLi.appendChild(li);
        child.appendChild(DeleteButton)
    } else if (typeOfFood.value === "Dinner") {
        dinnerList.push(newFood);
        localStorage.setItem("dinnerList", JSON.stringify(dinnerList));
        const li = document.createElement("li");
        li.innerHTML = newFood.name;
        const child = dinnerLi.appendChild(li);
        child.appendChild(DeleteButton)
    } else {
        alert("enter a food type");
    }


    clearInput();
};



//delete function handler 

function deleteFoodItemHandler(event){
    breakFastLi.addEventListener('click', event=>{
        const toDeleteElement = event.target.closest('li')
        toDeleteElement.remove()
        console.log(toDeleteElement.textContent)
        // const len = breakfastList.length
        // breakfastList.splice(0,1,to
        // console.log(len)
    })
} 

deleteFoodItemHandler()

//toggling the info button

function toggleInfo() {
    function togglei() {
        info_btn.classList.toggle("info__circle_visible");
    }

    function togglep() {
        info_para.classList.toggle("toggle_info_visible");
    }

    info_btn.addEventListener("click", togglei);
    info_btn.addEventListener("click", togglep);
}

toggleInfo();

//clear input on form 2

function clearInput2() {
    typeOfFood2.value = "default";
}

//rendering lists conditionally
form2.onsubmit = (event) => {
    event.preventDefault();

    if (typeOfFood2.value === "Breakfast" && breakfastList.length >= 1) {
        breakFastLi.classList.add("breakFastLi_visible");
        lunchLi.classList.remove("lunchLi_visible");
        snackLi.classList.remove("snackLi_visible");
        dinnerLi.classList.remove("dinnerLi_visible");
    } else if (typeOfFood2.value === "Lunch" && lunchList.length >= 1) {
        lunchLi.classList.add("lunchLi_visible");
        breakFastLi.classList.remove("breakFastLi_visible");
        snackLi.classList.remove("snackLi_visible");
        dinnerLi.classList.remove("dinnerLi_visible");
    } else if (typeOfFood2.value === "Snack" && snackList.length >= 1) {
        snackLi.classList.add("snackLi_visible");
        dinnerLi.classList.remove("dinnerLi_visible");
        breakFastLi.classList.remove("breakFastLi_visible");
        lunchLi.classList.remove("lunchLi_visible");
    } else if (typeOfFood2.value === "Dinner" && dinnerList.length >= 1) {
        dinnerLi.classList.add("dinnerLi_visible");
        breakFastLi.classList.remove("breakFastLi_visible");
        lunchLi.classList.remove("lunchLi_visible");
        snackLi.classList.remove("snackLi_visible");
    } else if (typeOfFood2.value === "default") {
        alert("Cant load list, enter food type");
        breakFastLi.classList.remove("breakFastLi_visible");
        lunchLi.classList.remove("lunchLi_visible");
        snackLi.classList.remove("snackLi_visible");
        dinnerLi.classList.remove("dinnerLi_visible");
    } else {
        alert("You food list is empty");
    }

    clearInput2();
};
