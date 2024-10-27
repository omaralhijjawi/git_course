function handleSelectChange(event) {
    const selectedValue = event.target.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}
document.getElementById('capture-select').addEventListener('change', handleSelectChange);
document.getElementById('Monitoring-select').addEventListener('change', handleSelectChange);