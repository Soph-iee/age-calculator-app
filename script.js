"use strict";

const errorMessage = document.querySelector(".error-message"),
  ageDay = document.querySelector(".calculated-days"),
  ageMonth = document.querySelector(".calculated-months"),
  ageYear = document.querySelector(".calculated-years"),
  arrow = document.querySelector(".icon-arrow"),
  dayFieldParent = document.querySelector(".day"),
  monthFieldParent = document.querySelector(".month"),
  yearFieldParent = document.querySelector(".year"),
  inputs = document.querySelectorAll("input");

// writing functions ///////////////////
for (let i = 0; i < inputs.length; i++) {
  const element = inputs[i];
  element.addEventListener("input", function () {
    if (element.name === "day") {
      let value = Number(element.value);
      if (value > 31 || value === 0) {
        errorMessage.innerHTML = "Must be a valid day";
        errorMessage.classList.remove("display");
        dayFieldParent.classList.add("error");
      } else if (value < 31) {
        errorMessage.classList.add("display");
        dayFieldParent.classList.remove("error");
      }
    } else if (element.name === "month") {
      let value = Number(element.value);

      if (value > 12 || value === 0) {
        monthFieldParent.children[2].innerHTML = "Must be a valid month";
        monthFieldParent.children[2].classList.remove("display");
        monthFieldParent.classList.add("error");
      } else if (value < 12) {
        monthFieldParent.children[2].classList.add("display");
        monthFieldParent.classList.remove("error");
      }
    } else if (element.name === "year") {
      let value = Number(element.value);
      let date = new Date().getFullYear();

      if (value > date || value === 0) {
        yearFieldParent.children[2].innerHTML = "Must be in the past";
        yearFieldParent.children[2].classList.remove("display");
        yearFieldParent.classList.add("error");
      } else if (value < date) {
        yearFieldParent.children[2].classList.add("display");
        yearFieldParent.classList.remove("error");
      }
    }
  });
}

// ///// handlimg click event for the arrow icon
function requiredField() {
  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    if (element.value === "") {
      if (element.name === "day") {
        errorMessage.innerHTML = "This feild is required";
        errorMessage.classList.remove("display");
      }
      if (element.name === "month") {
        monthFieldParent.children[2].innerHTML = "This feild is required";
        monthFieldParent.children[2].classList.remove("display");
      }
      if (element.name === "year") {
        yearFieldParent.children[2].innerHTML = "This feild is required";
        yearFieldParent.children[2].classList.remove("display");
      }
    } else {
    }
  }
}
function calcAge() {
  const day = document.getElementById("day").value,
    month = document.getElementById("month").value,
    year = document.getElementById("year").value;
  if (day === "" || month === "" || year === "") {
    requiredField();
  } else {
    let date = new Date(),
      d2 = date.getDate(),
      m2 = 1 + date.getMonth(),
      y2 = date.getFullYear();
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day > d2) {
      d2 = d2 + months[m2 - 1];
      m2 = m2 - 1;
    }
    if (month > m2) {
      m2 + 12;
      y2 = y2 - 1;
    }
    let dayDiff = d2 - day,
      monthDiff = m2 - month,
      yearDiff = y2 - year;
    if (dayDiff >= 0 && monthDiff >= 0 && yearDiff >= 0) {
      ageDay.innerHTML = dayDiff;
      ageMonth.innerHTML = monthDiff;
      ageYear.innerHTML = yearDiff;
    }
  }
}
arrow.addEventListener("click", calcAge);
