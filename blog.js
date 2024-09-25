// Select all the buttons with the class 'read-more-btn'
const readMoreButtons = document.querySelectorAll('.read-more-btn');

// Add a click event listener for each button
readMoreButtons.forEach((button) => {
  button.addEventListener('click', function() {
    const contentWrapper = this.previousElementSibling;
    if (contentWrapper.style.display === 'none' || contentWrapper.style.display === '') {
      contentWrapper.style.display = 'block';  // Show content
      this.textContent = 'Show Less';          // Change button text
    } else {
      contentWrapper.style.display = 'none';   // Hide content
      this.textContent = 'Read More...';       // Change button text back
    }
  });
});
