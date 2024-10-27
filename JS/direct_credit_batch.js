fetch('header.html')
.then(response => response.text())
.then(data => document.getElementById('header').innerHTML = data);
fetch('footer.html')
.then(response => response.text())
.then(data => document.getElementById('footer').innerHTML = data);
//delete button 
const deleteButton = document.querySelector('.delete-button');
const formContainer = document.getElementById('myForm');

deleteButton.addEventListener('click', () => {
formContainer.querySelectorAll('input').forEach(input => input.value = '');
formContainer.querySelectorAll('select').forEach(select => select.selectedIndex = 0);
const tableBody = formContainer.querySelector('table tbody');
tableBody.innerHTML = '';
});
//close button 
const close = document.querySelector('.close-button');
const closeButton = document.querySelector('.close-button');
const formContainer2 = document.getElementById('myForm');
deleteButton.addEventListener('click', () => {
formContainer.querySelectorAll('input').forEach(input => input.value = '');
formContainer.querySelectorAll('select').forEach(select => select.selectedIndex = 0);
const tableBody = formContainer.querySelector('table tbody');
tableBody.innerHTML = ''; 
});
closeButton.addEventListener('click', () => {
if (window.confirm('Are you sure you want to close this Page??')) {
window.close();
window.location.href = 'about:blank';
}
});
//move authorization 
const moveButton = document.querySelector('.move-authorization');
moveButton.addEventListener('click', () => {
// Redirect to authorization.html in the same window
window.location.href = './authorization.html';
});