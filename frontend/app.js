document.getElementById('submitBtn').addEventListener('click', () => {
    const num1Field = document.getElementById('num1');
    const num2Field = document.getElementById('num2');
    const num1 = parseInt(num1Field.value);
    const num2 = parseInt(num2Field.value);
});
    num1Field.style.border = '1px solid #ccc';
    num2Field.style.border = '1px solid #ccc';


   
    fetch('http://localhost:3000/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num1, num2 }),
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').textContent = `Result: ${data.result}`;
        })
         .catch(error => {
            console.error('Error:', error);
        });
    
});
