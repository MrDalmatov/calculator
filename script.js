const display = document.querySelector('.calculator__display');
const keys = document.querySelectorAll('.calculator__key');
let resultCalculated = false;


keys.forEach(key => {
  key.addEventListener('click', () => {
    const value = key.textContent;

    if (resultCalculated) {
      display.textContent = '';
      resultCalculated = false; 
    }

    if (value === 'C') {
      display.textContent = '';
    } else if (value === '=') {
      display.textContent = eval(display.textContent);
      resultCalculated = true;
    } else {
      display.textContent += value;
    }

  });
});