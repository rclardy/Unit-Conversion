/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
1 foot = 0.3048 meter
1 gallon = 3.78541 liters
1 pound = 0.453592 kilogram
*/
const meterFeetOutput = document.getElementById('meterFeet');
const literGalOutput = document.getElementById('literGallons');
const kiloLbsOutput = document.getElementById('kiloLbs');
const userInput = document.getElementById('userInput');
const convertBtn = document.getElementById('convertBtn');

convertBtn.addEventListener('click', convertVals);

function convertVals() {
  const inputValue = parseFloat(userInput.value);
  const meterToFeet = inputValue * 3.281;
  const feetToMeter = inputValue * 0.3048;
  const literToGallon = inputValue * 0.264;
  const gallonToLiter = inputValue * 3.78541;
  const kiloToPound = inputValue * 2.204;
  const poundToKilo = inputValue * 0.453592;

  if (isNaN(inputValue)) {
    alert('Please enter a valid number');
    return;
  }

  meterFeetOutput.textContent = `${inputValue} meters = ${meterToFeet.toFixed(
    3
  )} feet | ${inputValue} feet = ${feetToMeter.toFixed(3)} meters`;

  literGalOutput.textContent = `${inputValue} liters = ${literToGallon.toFixed(
    3
  )} gallons | ${inputValue} gallons = ${gallonToLiter.toFixed(3)} liters`;

  kiloLbsOutput.textContent = `${inputValue} kilos = ${kiloToPound.toFixed(
    3
  )} pounds | ${inputValue} pounds = ${poundToKilo.toFixed(3)} kilos`;
}
