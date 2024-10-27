    // Fetch and load header and footer content
    fetch('header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data);
fetch('footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);
    
    //create button 
const formElement = document.getElementById('direct-credit-form');
formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = './direct_credit_batch.html';
}); 
    //checkbox button 
// Select necessary elements
const createButton = document.getElementById('create-button');
const checkbox = document.getElementById('confirm-checkbox');

// Store the original HTML content when the page loads
const originalContent = document.getElementById('direct-credit-form').innerHTML;

// Add event listener to the 'Create' button
createButton.addEventListener('click', function () {
if (checkbox.checked) {
// If the checkbox is checked, reset the content (reload the page or restore original content)
document.getElementById('direct-credit-form').innerHTML = originalContent;
alert('Successful transaction send');
} else {
// If the checkbox is NOT checked, navigate to another page
window.location.href = 'error.html'; // Change this to your desired page
}
});
