// Get references to input fields and output spans:
const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const yearsOutput = document.getElementById("years-output");
const monthsOutput = document.getElementById("months-output");
const daysOutput = document.getElementById("days-output");
const dayAlert = document.getElementById("day-alert");
const monthAlert = document.getElementById("month-alert");
const yearAlert = document.getElementById("year-alert");
const button = document.getElementById("action-btn");

// Event listeners for input fields:
dayInput.addEventListener("input", validateDay);
monthInput.addEventListener("input", validateMonth);
yearInput.addEventListener("input", validateYear);

// Function to calculate age:
function calculateAge() {
	const today = new Date();
	const birthDate = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
	let years = today.getFullYear() - birthDate.getFullYear();
	let months = today.getMonth() - birthDate.getMonth();
	let days = today.getDate() - birthDate.getDate();

	if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
		years--;
		months += 12;
	}

	if (days < 0) {
		months--;
		const tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
		days += tempDate.getDate();
	}

	yearsOutput.textContent = years;
	monthsOutput.textContent = months;
	daysOutput.textContent = days;

	console.log(birthDate); // Test log
	console.log(days, months, years); // Test log
	console.log(typeof dayInput.value); // Test log
}

// Function to validate day input and update alert:
function validateDay() {
	const day = parseInt(dayInput.value);

	if (day <= 0 || day > 31) {
		dayAlert.textContent = "Must be a valid day";
		dayAlert.style.visibility = "visible";
	} else if (isNaN(day)) {
		dayAlert.textContent = "Please provide day value.";
		dayAlert.style.visibility = "visible";
	} else {
		dayAlert.style.visibility = "hidden";
	}
}

// Function to validate month input and update alert:
function validateMonth() {
	const month = parseInt(monthInput.value);

	if (month <= 0 || month > 12) {
		monthAlert.textContent = "Must be a valid month";
		monthAlert.style.visibility = "visible";
	} else if (isNaN(month)) {
		monthAlert.textContent = "Please provide month value.";
		monthAlert.style.visibility = "visible";
	} else {
		monthAlert.style.visibility = "hidden";
	}
}

// Function to validate year input and update alert:
function validateYear() {
	const today = new Date();
	const year = parseInt(yearInput.value);

	if (year > today.getFullYear()) {
		yearAlert.textContent = "Must be in the past";
		yearAlert.style.visibility = "visible";
	} else if (isNaN(year)) {
		yearAlert.textContent = "Must be a valid year.";
		yearAlert.style.visibility = "visible";
	} else if (year <= 0) {
		yearAlert.textContent = "Must be greater than 0";
		yearAlert.style.visibility = "visible";
	} else {
		yearAlert.style.visibility = "hidden";
	}
}
