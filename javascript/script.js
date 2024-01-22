/* Dropdowns */
// script.js
var genderSelect = document.getElementById("gender");

var genders = ["Male", "Female", "Rather not say"];

for (var i = 0; i < genders.length; i++) {
  var option = new Option(genders[i], genders[i]);
  genderSelect.add(option);
}

var select = document.getElementById("date");
for (var i = 1; i <= 31; i++) {
  var option = new Option(i, i);
  select.add(option);
}

var monthSelect = document.getElementById("month");
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
for (var i = 0; i < months.length; i++) {
  var option = new Option(months[i], i + 1);
  monthSelect.add(option);
}

var yearSelect = document.getElementById("year");
var currentYear = new Date().getFullYear();

for (var year = 1900; year <= currentYear; year++) {
  var option = new Option(year, year);
  yearSelect.add(option);
}

// Set the default selected option to the current year (2023)
yearSelect.selectedIndex = yearSelect.options.length - 1;

/*  */
let form = document.querySelector("#create-account");
let firstName = document.querySelector('input[name="firstName"]');
let lastName = document.querySelector('input[name="lastName"]');
let password = document.querySelector('input[name="password"]');
let passwordRepeat = document.querySelector('input[name="passwordRepeat"]');
let message = document.querySelector(".msg");

form.addEventListener("submit", (e) => {
  /* (e) stands for event */
  e.preventDefault(); /* Prevents sending data the default route, which is to nothing if no source is defined */

  if (password.value == passwordRepeat.value) {
    form.classList.add("hidden");
    message.innerHTML = `Your account was created. Welcome ${firstName.value} ${lastName.value}.`;
  } else {
    message.innerHTML = "The passwords are not identical";
  }
});

form.addEventListener("input", (e) => {
  let passwordSuccess = document.querySelector(".passwords");

  if (e.target.name == "password" || e.target.name == "passwordRepeat") {
    if (password.value == passwordRepeat.value && password.value.length > 2) {
      passwordSuccess.classList.add("pass-success");
    } else {
      passwordSuccess.classList.remove("pass-success");
    }
  }
});
