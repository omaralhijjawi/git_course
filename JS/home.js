        // Load the header dynamically
        //header page 
        fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
    
            // Access the 'capture-select' element after loading
            const captureSelect = document.getElementById('capture-select');
            if (captureSelect) {
                captureSelect.addEventListener('change', function() {
                    const selectedValue = this.value;
                    if (selectedValue) {
                        window.location.href = selectedValue;
                    }
                });
            } else {
                console.error("Element with ID 'capture-select' not found in header.");
            }
        const monti = document.getElementById('Monitoring-select');
        if (monti) {
            monti.addEventListener('change', function() {
                const selectedValue = this.value;
                if (selectedValue) {
                    window.location.href = selectedValue;
                }
            });
        } else {
            console.error("Element with ID 'Monitoring-select' not found in header.");
        }
    
            //footer page 
        })
        .catch(error => console.error('Error loading header:', error));
        fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));


       