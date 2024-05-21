// Get references to input fields and output spans:
const dayLabel = document.getElementById("day-label");
const monthLabel = document.getElementById("month-label");
const yearLabel = document.getElementById("year-label");
const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const dayAlert = document.getElementById("day-alert");
const monthAlert = document.getElementById("month-alert");
const yearAlert = document.getElementById("year-alert");
const yearsOutput = document.getElementById("years-output");
const monthsOutput = document.getElementById("months-output");
const daysOutput = document.getElementById("days-output");
const button = document.getElementById("action-btn");

// Event listeners for input fields:
dayInput.addEventListener("input", validateDay);
monthInput.addEventListener("input", validateMonth);
yearInput.addEventListener("input", validateYear);

// Function to calculate age:
function calculateAge() {
	// Check if any input field is empty
	if (!dayInput.value || !monthInput.value || !yearInput.value) {
		yearsOutput.textContent = "--";
		monthsOutput.textContent = "--";
		daysOutput.textContent = "--";

		dayAlert.textContent = "This field is required.";
		dayAlert.style.visibility = "visible";
		dayLabel.style.color = "hsl(0, 100%, 67%)";

		monthAlert.textContent = "This field is required.";
		monthAlert.style.visibility = "visible";
		monthLabel.style.color = "hsl(0, 100%, 67%)";

		yearAlert.textContent = "This field is required.";
		yearAlert.style.visibility = "visible";
		yearLabel.style.color = "hsl(0, 100%, 67%)";

		return;
	}

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

// Function to validate day input and update alert:
function validateDay() {
	const day = parseInt(dayInput.value);

	if (day <= 0 || day > 31) {
		dayAlert.textContent = "Must be a valid day";
		dayAlert.style.visibility = "visible";
		dayLabel.style.color = "hsl(0, 100%, 67%)";
	} else if (isNaN(day)) {
		dayAlert.textContent = "Please provide day value.";
		dayAlert.style.visibility = "visible";
		dayLabel.style.color = "hsl(0, 100%, 67%)";
	} else {
		dayAlert.style.visibility = "hidden";
		dayLabel.style.color = "hsl(0, 1%, 44%)";
	}
}

// Function to validate month input and update alert:
function validateMonth() {
	const month = parseInt(monthInput.value);

	if (month <= 0 || month > 12) {
		monthAlert.textContent = "Must be a valid month";
		monthAlert.style.visibility = "visible";
		monthLabel.style.color = "hsl(0, 100%, 67%)";
	} else if (isNaN(month)) {
		monthAlert.textContent = "Please provide month value.";
		monthAlert.style.visibility = "visible";
		monthLabel.style.color = "hsl(0, 100%, 67%)";
	} else {
		monthAlert.style.visibility = "hidden";
		monthLabel.style.color = "hsl(0, 1%, 44%)";
	}
}

// Function to validate year input and update alert:
function validateYear() {
	const today = new Date();
	const year = parseInt(yearInput.value);

	if (year > today.getFullYear()) {
		yearAlert.textContent = "Must be in the past";
		yearAlert.style.visibility = "visible";
		yearLabel.style.color = "hsl(0, 100%, 67%)";
	} else if (isNaN(year)) {
		yearAlert.textContent = "Must be a valid year.";
		yearAlert.style.visibility = "visible";
		yearLabel.style.color = "hsl(0, 100%, 67%)";
	} else if (year <= 0) {
		yearAlert.textContent = "Must be greater than 0";
		yearAlert.style.visibility = "visible";
		yearLabel.style.color = "hsl(0, 100%, 67%)";
	} else {
		yearAlert.style.visibility = "hidden";
		yearLabel.style.color = "hsl(0, 1%, 44%)";
	}
}
