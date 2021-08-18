//getting form to user onSUbmit and list to append

const form = document.querySelector("form");
const FoodList = document.getElementById("list");

//getting user input

const nameOfFood = document.querySelector("[name='food']");
const typeOfFood = document.getElementById("select-opt");

//empty arrays

const breakfastList = [];
const lunchList = [];
const snackList = [];
const dinnerList = [];

//checking for empty fields
function errorCheck() {
    if (nameOfFood.value.trim() === "") {
        alert("Dont leave the field empty");
        return;
    }
}

//this function will fire up upon form submission
form.onsubmit = (event) => {
    event.preventDefault();

    // items.push(nameOfFood.value)
    // items2.push(typeOfFood.value)
    // console.log(items)
    // console.log(items2)

    const newFood = {
        name: nameOfFood.value,
        type: typeOfFood.value,
        id: Math.random(),
    };

    errorCheck();

    //conditionally entering values
    if (typeOfFood.value === "Breakfast") {
        breakfastList.push(newFood);
    } else if (typeOfFood.value === "Lunch") {
        lunchList.push(newFood);
    } else if (typeOfFood.value === "Snack") {
        snackList.push(newFood);
    } else if (typeOfFood.value === "Dinner") {
        snackList.push(newFood);
    } else {
        alert('enter a food type')
    }

    console.log(breakfastList);
};
