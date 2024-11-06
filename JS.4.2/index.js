// Select the button, hidden content, and counter elements
const toggleButton = document.getElementById('toggleButton');
const hiddenContent = document.getElementById('hiddenContent');
const counterDisplay = document.getElementById('counter');

let clickCount = 0;

// Function to toggle display of content and update counter
toggleButton.addEventListener('click', function() {
  // Toggle the display of the hidden content
  if (hiddenContent.style.display === 'none') {
    hiddenContent.style.display = 'block';
  } else {
    hiddenContent.style.display = 'none';
  }
  
  // Increment and update the counter
  clickCount++;
  counterDisplay.textContent = `Click count: ${clickCount}`;
});
