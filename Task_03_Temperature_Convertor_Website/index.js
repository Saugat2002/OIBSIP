document.getElementById('degree').addEventListener('input', function (e) {
    var degree = e.target.value;
    document.getElementById('fahrenheit').value = (degree * 9 / 5) + 32;
});

document.getElementById('fahrenheit').addEventListener('input', function (e) {
    var fahrenheit = e.target.value;
    document.getElementById('degree').value = (fahrenheit - 32) * 5 / 9;
});