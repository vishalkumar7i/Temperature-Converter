"use strict";

const celcius = document.getElementById("cel");
const farenhite = document.getElementById("far");
const kelvin = document.getElementById("kel");
const reading = document.querySelector(".reading");
const statuss = document.querySelector(".statuss");

document.getElementsByName("celcius")[0].placeholder = "1";
document.getElementsByName("farenhite")[0].placeholder = "33.8";
document.getElementsByName("kelvin")[0].placeholder = "274.15";

const updateTemperatures = (changedInput) => {
  const valueCel = parseFloat(celcius.value);
  const valueFar = parseFloat(farenhite.value);
  const valueKel = parseFloat(kelvin.value);

  if (changedInput === "cel") {
    farenhite.value = isNaN(valueCel) ? "" : ((valueCel * 9/5) + 32).toFixed(3);
    kelvin.value = isNaN(valueCel) ? "" : (valueCel + 273.15).toFixed(3);
  } else if (changedInput === "far") {
    celcius.value = isNaN(valueFar) ? "" : (((valueFar - 32) * 5/9)).toFixed(3);
    kelvin.value = isNaN(valueFar) ? "" : (((valueFar - 32) * 5/9) + 273.15).toFixed(3);
  } else if (changedInput === "kel") {
    celcius.value = isNaN(valueKel) ? "" : (valueKel - 273.15).toFixed(3);
    farenhite.value = isNaN(valueKel) ? "" : (((valueKel - 273.15) * 9/5) + 32).toFixed(3);
  }
};

celcius.addEventListener("input", () => {
  updateTemperatures("cel");
});

farenhite.addEventListener("input", () => {
  updateTemperatures("far");
});

kelvin.addEventListener("input", () => {
  updateTemperatures("kel");
});

const progressBar = document.getElementById("progress-bar");
let previousValueCel = parseFloat(celcius.value);

const updateProgressBar = () => {
  const valueCel = parseFloat(celcius.value);
  const valueFar = parseFloat(farenhite.value);
  const valueKel = parseFloat(kelvin.value);

  const maxValue = Math.max(valueCel, valueFar, valueKel);
  progressBar.style.width = `${valueCel/10}%`;

  if (valueCel < previousValueCel) {
    progressBar.classList.add("decreasing");
    statuss.textContent = "decreasing";
    statuss.style.color = "#5AF840";

    
  } else {
    progressBar.classList.remove("decreasing");
    statuss.textContent = "Increasing";
    statuss.style.color = "#E83434";
  }

  previousValueCel = valueCel;
};

reading.addEventListener("input", () => {
  updateProgressBar();
});
