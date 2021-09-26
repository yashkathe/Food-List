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

// breakFastLiLocal = JSON.parse(localStorage.getItem("breakfastList"));
// lunchLiLocal = JSON.parse(localStorage.getItem("lunchList"));
// snackLiLocal = JSON.parse(localStorage.getItem("snackList"));
// dinnerLiLocal = JSON.parse(localStorage.getItem("dinnerList"));

//create delete button
const DeleteButton = document.createElement("button");
DeleteButton.classList.add("delete-button");

//checking for empty fields
function errorCheck() {
    if (nameOfFood.value.trim() === "") {
        console.log("Dont leave the field empty");
        return;
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

//loop through already stored food in local storage and save them
// function loopThroughLocalStorage() {
//     for (i in breakFastLiLocal) {
//         breakfastName = breakFastLiLocal[i].name;
//         const li = document.createElement("li");
//         li.innerHTML = breakfastName;
//         const child = breakFastLi.appendChild(li);
//         child.appendChild(DeleteButton);
//     }

//     for (i in lunchLiLocal) {
//         lunchName = lunchLiLocal[i].name;
//         const li = document.createElement("li");
//         li.innerHTML = lunchName;
//         const child = breakFastLi.appendChild(li);
//         child.append(DeleteButton);
//     }

//     for (i in snackLiLocal) {
//         snackName = snackLiLocal[i].name;
//         const li = document.createElement("li");
//         li.innerHTML = snackName;
//         const child = breakFastLi.appendChild(li);
//         child.append(DeleteButton);
//     }

//     for (i in dinnerLiLocal) {
//         dinnerName = dinnerLiLocal[i].name;
//         const li = document.createElement("li");
//         li.innerHTML = dinnerName;
//         const child = breakFastLi.appendChild(li);
//         child.append(DeleteButton);
//     }
// }

// loopThroughLocalStorage();

// console.log(breakfastList);

//this function will fire up upon form submission
form1.onsubmit = (event) => {
    event.preventDefault();

    // items.push(nameOfFood.value)
    // items2.push(typeOfFood.value)
    // console.log(items)
    // console.log(items2)

    //creating a newfood object

    errorCheck();

    // DeleteButton.textContent = 'delete'

    const newFood = {
        name: nameOfFood.value,
        type: typeOfFood.value,
        id: Math.random(),
    };
    // conditionally entering values
    const li = document.createElement("li");
    const button = document.createElement("button");

    if (typeOfFood.value === "Breakfast") {
        breakfastList.push(newFood);
        li.innerHTML = newFood.name;
        li.classList.add('innerList')
        button.innerHTML = "delete";
        li.appendChild(button);
        breakFastLi.appendChild(li);
        console.log(breakfastList);
    } else if (typeOfFood.value === "Lunch") {
        lunchList.push(newFood);
        li.innerHTML = newFood.name;
        button.innerHTML = "delete";
        li.appendChild(button);
        breakFastLi.appendChild(li)
        lunchLi.appendChild(li);
        console.log(lunchList);
    } else if (typeOfFood.value === "Snack") {
        snackList.push(newFood);
        li.innerHTML = newFood.name;
        button.innerHTML = "delete";
        li.appendChild(button);
        breakFastLi.appendChild(li)
        snackLi.appendChild(li);
        console.log(snackList);
    } else if (typeOfFood.value === "Dinner") {
        dinnerList.push(newFood);
        li.innerHTML = newFood.name;
        button.innerHTML = "delete";
        li.appendChild(button);
        breakFastLi.appendChild(li)
        dinnerLi.appendChild(li);
        console.log(dinnerList);
    } else {
        alert("enter a food type");
    }

    clearInput();
};

//delete function handler

// function deleteFoodItemHandler(event) {
//     breakFastLi.addEventListener("click", (event) => {
//         const toDeleteElement = event.target.closest("li");
//         toDeleteElement.remove();
//         console.log(toDeleteElement.textContent);
//         // console.log(typeOfFood2.value)
//         console.log(breakfastList[0].name);
//         // console.log(breakfastList[0].name)

//         //delete using splice

//         for (let i in breakFastLiLocal) {
//             if (breakFastLiLocal[i].name == toDeleteElement.textContent) {
//                 breakFastLiLocal.splice(i, 1);
//                 console.log(breakfastList);
//                 // localStorage.removeItem(
//                 //     "breakfastList",
//                 //     JSON.stringify(breakFastLiLocal)
//                 // );
//             }
//         }

//         for (let i in lunchLiLocal) {
//             if (lunchLiLocal[i].name == toDeleteElement.textContent) {
//                 lunchLiLocal.splice(i, 1);
//                 console.log(breakfastList);
//                 // localStorage.removeItem(
//                 //     "breakfastList",
//                 //     JSON.stringify(breakFastLiLocal)
//                 // );
//             }
//         }

//         for (let i in breakFastLiLocal) {
//             if (breakFastLiLocal[i].name == toDeleteElement.textContent) {
//                 breakFastLiLocal.splice(i, 1);
//                 console.log(breakfastList);
//                 // localStorage.removeItem(
//                 //     "breakfastList",
//                 //     JSON.stringify(breakFastLiLocal)
//                 // );
//             }
//         }

//         for (let i in breakFastLiLocal) {
//             if (breakFastLiLocal[i].name == toDeleteElement.textContent) {
//                 breakFastLiLocal.splice(i, 1);
//                 console.log(breakfastList);
//                 // localStorage.removeItem(
//                 //     "breakfastList",
//                 //     JSON.stringify(breakFastLiLocal)
//                 // );
//             }
//         }
//     });
// }

// deleteFoodItemHandler();

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
