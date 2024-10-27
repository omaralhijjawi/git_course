fetch('header.html')
            .then(response => response.text())
            .then(data => document.getElementById('header').innerHTML = data);
        fetch('footer.html')
            .then(response => response.text())
            .then(data => document.getElementById('footer').innerHTML = data);
//send button 
    const modal = document.getElementById("sendModal");
    const sendBtn = document.getElementById("sendBtn");
    const closeBtn = document.querySelector(".close");
    sendBtn.onclick = function() {
    modal.style.display = "block";
    };
    closeBtn.onclick = function() {
    modal.style.display = "none";
    };
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    };

    const formElement = document.getElementById('confirmSend');
    formElement.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '../pages/home.html';
    }); 
