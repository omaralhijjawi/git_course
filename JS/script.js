fetch('header.html')
.then(response => response.text())
.then(data => document.getElementById('header').innerHTML = data);

fetch('footer.html')
.then(response => response.text())
.then(data => document.getElementById('footer').innerHTML = data);
document.addEventListener('DOMContentLoaded', function () {
            const selectElement = document.getElementById('capture-select');

       const selectElement = document.getElementById('capture-select');

        selectElement.addEventListener('change', function() {
            const selectedValue = this.value;

            // Redirect based on selected value
            switch (selectedValue) {
                case 'direct-credit':
                    window.location.href = './direct_credit.html';
                    break;
                case 'ach':
                    window.location.href = './ach.html';
                    break;
                case 'standing-direct-credit':
                    window.location.href = './standing_direct_credit.html';
                    break;
                default:
                    console.log('No page associated with this option.');
            }
        });
