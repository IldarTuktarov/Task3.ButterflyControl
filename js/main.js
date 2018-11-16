﻿var firstSelect = document.getElementById("available"),
    secondSelect = document.getElementById("selected"),
    allToSelBtn = document.getElementById("all-to-selected-btn"),
    allToAvBtn = document.getElementById("all-to-available-btn"),
    toSelBtn = document.getElementById("to-selected-btn"),
    toAvBtn = document.getElementById("to-available-btn");

function displayErrorMessage() {
    if (firstSelect.selectedIndex == -1 && secondSelect.selectedIndex == -1) {
        alert('Выберете элемент из списка');
    }
}

function allToSelOrAv(select1, select2) {
    while (select1.options.length > 0) {
        select2.appendChild(select1.options[0]);
    }
}

function toSelOrAv(select1, select2) {
    displayErrorMessage();
    if (select1.options.length > 0) {
        select2.appendChild(select1.options[select1.selectedIndex]);
    }
    select2.selectedIndex = -1;
}




