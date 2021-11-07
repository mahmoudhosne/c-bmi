let weight = document.querySelector('.weight').value;
let height = document.querySelector('.height').value;
document.querySelector('.send').addEventListener('click', function () {
  if (
    !weight ||
    !height ||
    (height < 150 && weight > 40) ||
    (height > 150 && weight < 40)
  ) {
    document.querySelector('.messege').textContent =
      'please enter the weight and the height';
    document.querySelector('.messege2').textContent =
      'just height from 150  to 210 and weight from 40 to 110';
  } else if (height == 150 && weight < 55) {
    weight = document.querySelector('.weight').value;
    height = document.querySelector('.height').value;
    let calc = Math.trunc(height * height) / weight;
    document.querySelector('.messege').textContent = calc;
    document.querySelector('.messege2').textContent = 'not bad';
  }
});
document.querySelector('.sendtwo').addEventListener('click', function () {
  weight = document.querySelector('.weight').value = '';
  height = document.querySelector('.height').value = '';
  document.querySelector('.messege').textContent = '';
  document.querySelector('.messege2').textContent = '';
  document.querySelector('.messege3').textContent = '';
});
