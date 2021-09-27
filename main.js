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

let breakfastList = [];
let lunchList = [];
let snackList = [];
let dinnerList = [];

//setting empty arrays in local storage
if (localStorage.getItem("breakfastList") === null) {
    localStorage.setItem("breakfastList", JSON.stringify(breakfastList));
}
if (localStorage.getItem("lunchLIst") === null) {
    localStorage.setItem("lunchList", JSON.stringify(lunchList));
}
if (localStorage.getItem("snackLost") === null) {
    localStorage.setItem("snackList", JSON.stringify(snackList));
}
if (localStorage.getItem("dinnerList") === null) {
    localStorage.setItem("dinnerList", JSON.stringify(dinnerList));
}

//getting all the stored items in local storage

breakFastLiLocal = JSON.parse(localStorage.getItem("breakfastList"));
lunchLiLocal = JSON.parse(localStorage.getItem("lunchList"));
snackLiLocal = JSON.parse(localStorage.getItem("snackList"));
dinnerLiLocal = JSON.parse(localStorage.getItem("dinnerList"));

//copying locally stored array in nornaml array
breakfastList = [...breakFastLiLocal];
lunchList = [...lunchLiLocal];
snackList = [...snackLiLocal];
dinnerList = [...dinnerLiLocal];

//loop through already stored food in local storage and save them

function loopThroughLocalStorage() {
    for (i = 0; i < breakfastList.length; i++) {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.id = "delete_button";
        li.classList.add("innerList");
        breakfastName = breakfastList[i].name;
        for (j in breakfastList) {
            breakFastLi.appendChild(li);
            li.innerHTML = breakfastName;
            li.appendChild(button);
            // console.log(li)
            button.innerHTML = "delete";
        }
    }

    for (i = 0; i < lunchList.length; i++) {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.id = "delete_button";
        li.classList.add("innerList");
        lunchName = lunchList[i].name;
        for (j in lunchList) {
            lunchLi.appendChild(li);
            li.innerHTML = lunchName;
            li.appendChild(button);
            // console.log(li)
            button.innerHTML = "delete";
        }
    }

    for (i = 0; i < snackList.length; i++) {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.id = "delete_button";
        li.classList.add("innerList");
        snackName = snackList[i].name;
        for (j in snackList) {
            snackLi.appendChild(li);
            li.innerHTML = snackName;
            li.appendChild(button);
            // console.log(li)
            button.innerHTML = "delete";
        }
    }

    for (i = 0; i < dinnerList.length; i++) {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.id = "delete_button";
        li.classList.add("innerList");
        dinnerName = dinnerList[i].name;
        for (j in dinnerList) {
            dinnerLi.appendChild(li);
            li.innerHTML = dinnerName;
            li.appendChild(button);
            // console.log(li)
            button.innerHTML = "delete";
        }
    }
}

loopThroughLocalStorage();

//clear user input on form submission
function clearInput() {
    nameOfFood.value = "";
    typeOfFood.value = "default";
}

//this function will fire up upon form submission
form1.onsubmit = (event) => {
    event.preventDefault();

    //checking for empty fields
    if (nameOfFood.value.trim() === "") {
        alert("Dont leave the field empty");
        return;
    }

    //create food object

    const newFood = {
        name: nameOfFood.value,
        type: typeOfFood.value,
        id: Math.random(),
    };

    // conditionally entering values
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.id = "delete_button";
    li.classList.add("innerList");

    if (typeOfFood.value === "Breakfast") {
        breakfastList.push(newFood);
        li.innerHTML = newFood.name;
        li.appendChild(button);
        button.innerHTML = "delete";
        breakFastLi.appendChild(li);
        console.log(breakfastList);
        //store in local storage
        localStorage.setItem("breakfastList", JSON.stringify(breakfastList));
    } else if (typeOfFood.value === "Lunch") {
        lunchList.push(newFood);
        li.innerHTML = newFood.name;
        li.appendChild(button);
        button.innerHTML = "delete";
        breakFastLi.appendChild(li);
        lunchLi.appendChild(li);
        console.log(lunchList);
        //store in local storage
        localStorage.setItem("lunchList", JSON.stringify(lunchList));
    } else if (typeOfFood.value === "Snack") {
        snackList.push(newFood);
        li.innerHTML = newFood.name;
        li.appendChild(button);
        button.innerHTML = "delete";
        breakFastLi.appendChild(li);
        snackLi.appendChild(li);
        console.log(snackList);
        //store in local storage
        localStorage.setItem("snackList", JSON.stringify(snackList));
    } else if (typeOfFood.value === "Dinner") {
        dinnerList.push(newFood);
        li.innerHTML = newFood.name;
        li.appendChild(button);
        button.innerHTML = "delete";
        breakFastLi.appendChild(li);
        dinnerLi.appendChild(li);
        console.log(dinnerList);
        //store in local storage
        localStorage.setItem("dinnerList", JSON.stringify(dinnerList));
    } else {
        alert("enter a food type");
    }

    clearInput();
};

//delete function handler

function deleteFoodItemHandler() {
    breakFastLi.addEventListener("click", (event) => {
        const toDeleteElement = event.target.closest("li");
        toDeleteElement.remove();
        console.log(toDeleteElement.textContent);
        // console.log(typeOfFood2.value)
        // console.log(breakfastList[0].name)
        for (let i in breakfastList) {
            if (
                `${breakfastList[i].name}delete` == toDeleteElement.textContent
            ) {
                breakfastList.splice(i, 1);
                //rewrite local storage
                localStorage.setItem(
                    "breakfastList",
                    JSON.stringify(breakfastList)
                );
                console.log(breakfastList);
                // localStorage.removeItem(
                //     "breakfastList",
                //     JSON.stringify(breakFastLiLocal)
                // );
            }
        }
    });

    lunchLi.addEventListener("click", (event) => {
        const toDeleteElement = event.target.closest("li");
        toDeleteElement.remove();
        console.log(toDeleteElement.textContent);
        // console.log(typeOfFood2.value)
        // console.log(breakfastList[0].name)
        for (let i in lunchList) {
            if (`${lunchList[i].name}delete` == toDeleteElement.textContent) {
                lunchList.splice(i, 1);
                //rewrite local storage
                localStorage.setItem("lunchList", JSON.stringify(lunchList));
                console.log(lunchList);
                // localStorage.removeItem(
                //     "breakfastList",
                //     JSON.stringify(breakFastLiLocal)
                // );
            }
        }
    });

    snackLi.addEventListener("click", (event) => {
        const toDeleteElement = event.target.closest("li");
        toDeleteElement.remove();
        console.log(toDeleteElement.textContent);
        // console.log(typeOfFood2.value)
        // console.log(breakfastList[0].name)
        for (let i in snackList) {
            if (`${snackList[i].name}delete` == toDeleteElement.textContent) {
                snackList.splice(i, 1);
                //rewrite local storage
                localStorage.setItem("snackList", JSON.stringify(snackList));
                console.log(snackList);
                // localStorage.removeItem(
                //     "breakfastList",
                //     JSON.stringify(breakFastLiLocal)
                // );
            }
        }
    });

    dinnerLi.addEventListener("click", (event) => {
        const toDeleteElement = event.target.closest("li");
        toDeleteElement.remove();
        console.log(toDeleteElement.textContent);
        // console.log(typeOfFood2.value)
        // console.log(breakfastList[0].name)
        for (let i in dinnerList) {
            if (`${dinnerList[i].name}delete` == toDeleteElement.textContent) {
                dinnerList.splice(i, 1);
                //rewrite local storage
                localStorage.setItem("dinnerList", JSON.stringify(dinnerList));
                console.log(dinnerList);
                // localStorage.removeItem(
                //     "breakfastList",
                //     JSON.stringify(breakFastLiLocal)
                // );
            }
        }
    });
}

deleteFoodItemHandler();

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

    if (typeOfFood2.value === "Breakfast") {
        breakFastLi.classList.add("breakFastLi_visible");
        lunchLi.classList.remove("lunchLi_visible");
        snackLi.classList.remove("snackLi_visible");
        dinnerLi.classList.remove("dinnerLi_visible");
    } else if (typeOfFood2.value === "Lunch") {
        lunchLi.classList.add("lunchLi_visible");
        breakFastLi.classList.remove("breakFastLi_visible");
        snackLi.classList.remove("snackLi_visible");
        dinnerLi.classList.remove("dinnerLi_visible");
    } else if (typeOfFood2.value === "Snack") {
        snackLi.classList.add("snackLi_visible");
        dinnerLi.classList.remove("dinnerLi_visible");
        breakFastLi.classList.remove("breakFastLi_visible");
        lunchLi.classList.remove("lunchLi_visible");
    } else if (typeOfFood2.value === "Dinner") {
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
