const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convertBtn");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

const errorMessage = document.getElementById("errorMessage");

convertButton.addEventListener("click", function () {

    const inputValue = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    errorMessage.textContent = "";

    if (isNaN(inputValue)) {
        errorMessage.textContent = "Please enter a valid temperature.";
        clearResults();
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    if (unit === "C") {
        celsius = inputValue;

        if (celsius < -273.15) {
            showError();
            return;
        }

        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = celsius + 273.15;

    } else if (unit === "F") {

        fahrenheit = inputValue;
        celsius = (fahrenheit - 32) * 5 / 9;

        if (celsius < -273.15) {
            showError();
            return;
        }

        kelvin = celsius + 273.15;

    } else if (unit === "K") {

        kelvin = inputValue;

        if (kelvin < 0) {
            showError();
            return;
        }

        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    celsiusResult.textContent =
        celsius.toFixed(2) + " °C";

    fahrenheitResult.textContent =
        fahrenheit.toFixed(2) + " °F";

    kelvinResult.textContent =
        kelvin.toFixed(2) + " K";
});


function showError() {

    errorMessage.textContent =
        "Temperature cannot be below absolute zero.";

    clearResults();
}


function clearResults() {

    celsiusResult.textContent = "-- °C";
    fahrenheitResult.textContent = "-- °F";
    kelvinResult.textContent = "-- K";
}