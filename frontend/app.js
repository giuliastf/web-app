document.getElementById('submitBtn').addEventListener('click', () => {
    const num1Field = document.getElementById('num1');
    const num2Field = document.getElementById('num2');
    const num1 = num1Field.value.trim();
    const num2 = num2Field.value.trim();
    let valid = true;

    num1Field.style.border = '1px solid #ccc';
    num2Field.style.border = '1px solid #ccc';
    document.getElementById('num1Error').textContent = '';
    document.getElementById('num2Error').textContent = '';

    if (!/^\d+$/.test(num1)) {
        num1Field.style.border = '2px solid red';
        document.getElementById('num1Error').textContent = 'You must insert a number';
        valid = false;
    }

    if (!/^\d+$/.test(num2)) {
        num2Field.style.border = '2px solid red';
        document.getElementById('num2Error').textContent = 'You must insert a number';
        valid = false;
    }

    if (valid) {
        fetch('http://localhost:3000/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ num1: parseInt(num1), num2: parseInt(num2) }),
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('result').textContent = `Result: ${data.result}`;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});
