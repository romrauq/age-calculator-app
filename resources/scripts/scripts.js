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

// Event listener for input fields:
dayInput.addEventListener("input", validateInputs);
monthInput.addEventListener("input", validateInputs);
yearInput.addEventListener("input", validateInputs);

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
}

// Function to validate inputs and update alerts
function validateInputs() {
	const today = new Date();
	const day = parseInt(dayInput.value);
	const month = parseInt(monthInput.value);
	const year = parseInt(yearInput.value);

	if (day <= 0 || day > 31) {
		dayAlert.textContent = "Must be a valid day";
		dayAlert.style.visibility = "visible";
	} else if (isNaN(day)) {
		dayAlert.textContent = "Please provide day value.";
		dayAlert.style.visibility = "visible";
	} else {
		dayAlert.style.visibility = "hidden";
	}

	if (month < 0 || month > 12) {
		monthAlert.textContent = "Must be a valid month";
		monthAlert.style.visibility = "visible";
	} else if (isNaN(month)) {
		monthAlert.textContent = "Please provide month value.";
		monthAlert.style.visibility = "visible";
	} else {
		monthAlert.style.visibility = "hidden";
	}

	if (year > today.getFullYear()) {
		yearAlert.textContent = "Must be in the past";
		yearAlert.style.visibility = "visible";
	} else if (isNaN(year)) {
		yearAlert.textContent = "Please provide year value.";
		yearAlert.style.visibility = "visible";
	} else {
		yearAlert.style.visibility = "hidden";
	}

	// Recalculate age if all inputs are valid
	if (day <= 31 && month <= 12 && year <= today.getFullYear()) {
		calculateAge();
	}
}
