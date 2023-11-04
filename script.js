const display = document.querySelector('.calculator__display');
const keys = document.querySelectorAll('.calculator__key');
let resultCalculated = false;

keys.forEach(key => {
  key.addEventListener('click', () => {
    const value = key.textContent;
    const lastChar = display.textContent.slice(-1);

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
      if (
        (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') &&
        (value === '+' || value === '-' || value === '*' || value === '/')
      ) {
        return;
      } else if (display.textContent === '0' || display.textContent === 'Infinity' || display.textContent === '-Infinity') {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
    }
  });
});
