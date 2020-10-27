// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// calculatehemoglobin.js
//
// David Curtis
// copyright (c) 2020
// all rights reserved.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function calculatehemoglobin() {

  document.getElementById("result").value = ""; 

  var weight = document.getElementById("weight").value;
  var hemoglobin = document.getElementById("hemoglobin").value;
  var fluid = document.getElementById("fluid").value;
  var bloodVolume;

  //Blood Volume
  if (male.checked) {
    bloodVolume = (weight * 75) / 100;
  }
  else if (female.checked) {
    bloodVolume = (weight * 65) / 100;
  }
  else {
    alert("Please select a sex.");
    return;
  }

  var result = ((hemoglobin * bloodVolume) / ((bloodVolume / 10) + fluid * .25)) / 10;

  document.getElementById("result").value = String(Math.round((result + Number.EPSILON) * 100) / 100) + " g/dL";
}

function validate() {

    var invalidClassName = 'invalid'
    var inputs = document.querySelectorAll('input, select, textarea')
    inputs.forEach(function (input) {
      input.addEventListener('invalid', function () {
      input.classList.add(invalidClassName)

      input.addEventListener('input', function () {
        if (input.validity.valid) {
          input.classList.remove(invalidClassName)
        }
      })
      })
    })
}