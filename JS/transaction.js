fetch('../pages/header.html')
            .then(response => response.text())
            .then(data => document.getElementById('header-container').innerHTML = data);
        fetch('../pages/footer.html')
            .then(response => response.text())
            .then(data => document.getElementById('footer-container').innerHTML = data);