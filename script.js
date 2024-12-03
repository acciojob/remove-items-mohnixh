// Get references to the select element and the button
const colorSelect = document.getElementById('colorSelect');
const removeColorButton = document.getElementById('removeColorButton');

// Add an event listener to the button for the click event
removeColorButton.addEventListener('click', () => {
  // Ensure the dropdown has options
  if (colorSelect.options.length > 0) {
    // Get the selected option
    const selectedOption = colorSelect.options[colorSelect.selectedIndex];

    // Remove the selected option from the dropdown
    colorSelect.removeChild(selectedOption);
  } else {
    alert('No colors to remove!');
  }
});

// Normalize the value attributes to match the text content
document.querySelectorAll('#colorSelect option').forEach(option => {
  option.value = option.textContent.trim();
});