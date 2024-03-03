const display = document.getElementById('display');

    //   function handleButtonClick(value) {
    //     if (!isNaN(value)) {
    //       // If it's a number, append it to the display
    //       display.value += value;
    //     } else {
    //       // If it's not a number, show an alert
    //       alert("Only numbers are allowed!");
    //     }
    //   }
    const allowedK = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '/', '*', '+', '-', 'Enter', 'Backspace'];
    function handleButtonClick(value) {
        if (allowedK.includes(value)) {
        // If it's a number, append it to the display
        display.value += value;
        } else {
        // If it's not a number, show an alert
        alert("Only numbers are allowed!");
        }
    }

  function calculateResult() {
    try {
      // Evaluate the expression and display the result
      display.value = eval(display.value);
    } catch (error) {
      // If there's an error in evaluation, show an alert
      alert("Invalid expression!");
    }
  }

  // Listen for keyboard events
  document.addEventListener('keydown', function(event) {
    const key = event.key;
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '/', '*', '+', '-', 'Enter', 'Backspace'];

    if (!allowedKeys.includes(key)) {
      // If the pressed key is not in allowed keys, show an alert
      alert("Only numbers are allowed!");
    } else {
      if (key === 'Enter') {
        // If Enter key is pressed, calculate the result
        calculateResult();
      } else if (key === 'Backspace') {
        // If Backspace key is pressed, remove the last character from display
        display.value = display.value.slice(0, -1);
      } else {
        // Otherwise, append the pressed key to the display
        display.value += key;
      }
    }
  });