let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseBox = document.querySelector('.close-modal');

document.querySelector('.send').addEventListener('click', function () {
  let height = Number(document.querySelector('.height').value);
  let weight = Number(document.querySelector('.weight').value);
  let calc = (height * height) / weight;

  let userName = String(document.querySelector('.userName').value);
  let male = document.querySelector('.male').checked;
  let female = document.querySelector('.female').checked;

  let userMesseg = document.querySelector('.user-messege');

  function removeClassHidden() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }

  //BUG FIX
  if (!height || !weight || !userName || (male && female === 'false')) {
    removeClassHidden();
    userMesseg.textContent = `please All fields must be filled out`;
    // /////////////////////////////////////////////////////////////////////////

    // to fat
  } else if (male && weight === height - 100) {
    removeClassHidden();
    userMesseg.textContent = `mester ${userName} your BMI is ${calc}`;
  } else if (female && weight === height - 100) {
    removeClassHidden();
    userMesseg.textContent = `miss ${userName} your BMI is ${calc}`;
  } else if (male && weight === height - 105) {
    removeClassHidden();
    userMesseg.textContent = `mester ${userName} your BMI is ${calc}`;
  } else if (female && weight === height - 105) {
    removeClassHidden();
    userMesseg.textContent = `miss ${userName} your BMI is ${calc}`;
  } else if (male && weight === height - 110) {
    removeClassHidden();
    userMesseg.textContent = `mester ${userName} your BMI is ${calc}`;
  } else if (female && weight === height - 110) {
    removeClassHidden();
    userMesseg.textContent = `miss ${userName} your BMI is ${calc}`;
  } else if (male && weight === height - 115) {
    removeClassHidden();
    userMesseg.textContent = `mester ${userName} your BMI is ${calc}`;
  } else if (female && weight === height - 115) {
    removeClassHidden();
    userMesseg.textContent = `miss ${userName} your BMI is ${calc}`;
  } else if (male && weight === height - 120) {
    removeClassHidden();
    userMesseg.textContent = `mester ${userName} your BMI is ${calc}`;
  } else if (female && weight === height - 120) {
    removeClassHidden();
    userMesseg.textContent = `miss ${userName} your BMI is ${calc}`;
  } else if (male && weight === height - 125) {
    removeClassHidden();
    userMesseg.textContent = `mester ${userName} your BMI is ${calc}`;
  } else if (female && weight === height - 125) {
    removeClassHidden();
    userMesseg.textContent = `miss ${userName} your BMI is ${calc}`;

    // ///////////////////////////////////////////////////////////////////////
    //  to thin
  } else if (male && weight === height - 95) {
    removeClassHidden();
    userMesseg.textContent = `mester ${userName} your BMI is ${calc}`;
  } else if (female && weight === height - 95) {
    removeClassHidden();
    userMesseg.textContent = `miss ${userName} your BMI is ${calc}`;
  } else if (male && weight === height - 90) {
    removeClassHidden();
    userMesseg.textContent = `mester ${userName} your BMI is ${calc}`;
  } else if (female && weight === height - 90) {
    removeClassHidden();
    userMesseg.textContent = `miss ${userName} your BMI is ${calc}`;
  } else if (male && weight === height - 85) {
    removeClassHidden();
    userMesseg.textContent = `mester ${userName} your BMI is ${calc}`;
  } else if (female && weight === height - 85) {
    removeClassHidden();
    userMesseg.textContent = `miss ${userName} your BMI is ${calc}`;
  } else if (male && weight === height - 80) {
    removeClassHidden();
    userMesseg.textContent = `mester ${userName} your BMI is ${calc}`;
  } else if (female && weight === height - 80) {
    removeClassHidden();
    userMesseg.textContent = `miss ${userName} your BMI is ${calc}`;
  } else if (male && weight === height - 75) {
    removeClassHidden();
    userMesseg.textContent = `mester ${userName} your BMI is ${calc}`;
  } else if (female && weight === height - 75) {
    removeClassHidden();
    userMesseg.textContent = `miss ${userName} your BMI is ${calc}`;
  } else if (male && weight === height - 70) {
    removeClassHidden();
    userMesseg.textContent = `mester ${userName} your BMI is ${calc}`;
  } else if (female && weight === height - 70) {
    removeClassHidden();
    userMesseg.textContent = `miss ${userName} your BMI is ${calc}`;
  } else if (male && weight === height - 65) {
    removeClassHidden();
    userMesseg.textContent = `mester ${userName} your BMI is ${calc}`;
  } else if (female && weight === height - 65) {
    removeClassHidden();
    userMesseg.textContent = `miss ${userName} your BMI is ${calc}`;
  } else if (male && weight === height - 60) {
    removeClassHidden();
    userMesseg.textContent = `mester ${userName} your BMI is ${calc}`;
  } else if (female && weight === height - 60) {
    removeClassHidden();
    userMesseg.textContent = `miss ${userName} your BMI is ${calc}`;
  } else {
    removeClassHidden();
    userMesseg.textContent = `sir ${userName}
    your BMI is ${calc}`;
  }
});

function addClassHidden() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
overlay.addEventListener('click', addClassHidden);
document.addEventListener('keydown', function (e) {
  addClassHidden();
});
btnCloseBox.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.querySelector('.sendtwo').addEventListener('click', function () {
  document.querySelector('.height').value = '';
  document.querySelector('.weight').value = '';
  document.querySelector('.userName').value = '';
  document.querySelector('.male').checked = false;
  document.querySelector('.female').checked = false;
});
