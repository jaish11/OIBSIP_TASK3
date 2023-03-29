function clearFields() {
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celsius").value = "";
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const fahrenheit = document.getElementById("fahrenheit").value;
    const celsius = document.getElementById("celsius").value;

    if (fahrenheit !== "") {
        const celsiusValue = (fahrenheit - 32) * 5/9;
        document.getElementById("celsius").value = celsiusValue.toFixed(2);
    }

    if (celsius !== "") {
        const fahrenheitValue = (celsius * 9/5)+32;
        document.getElementById("fahrenheit").value = fahrenheitValue.toFixed(2);
    }
});