// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// calculatehemoglobin.js
//
// David Curtis
// copyright (c) 2020
// all rights reserved.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function calculatehemoglobin() {

    var weight = document.getElementById("weight").value;
    var hemoglobin = document.getElementById("hemoglobin").value;
    var fluid = document.getElementById("fluid").value;
    var male = document.getElementsById("male").value;
    alert(male);
    var female = document.getElementsById("female").value;
    var bloodVolume;

    //Blood Volume
    if (male == True) {
        bloodVolume = (weight * 75) / 100;
    }
    else if (female == True) {
        bloodVolume = (weight * 60) / 100;
    }
    else {
        bloodVolume = (weight * 67.5) / 100;
    }

    //Total Hemoglobin
    var totalHemiglobin = (hemoglobin * bloodVolume);

    //Fluid Shit
    var bloodVolume = bloodVolume + fluid * .25;

    var total = totalHemiglobin / bloodVolume;

    alert(female);







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