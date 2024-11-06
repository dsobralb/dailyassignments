// Select the elements from the HTML
const toggleButton = document.getElementById('toggleButton');
const hiddenContent = document.getElementById('hiddenContent');
const counterDisplay = document.getElementById('counter');

// Initialize the click counter
let clickCount = 0;

// Add an event listener to the button to handle the click event
toggleButton.addEventListener('click', function() {
  // Toggle the display of the hidden content
  if (hiddenContent.style.display === 'none') {
    hiddenContent.style.display = 'block';
  } else {
    hiddenContent.style.display = 'none';
  }
  
  // Increment the click counter and update the display
  clickCount++;
  counterDisplay.textContent = `Click count: ${clickCount}`;
});
