function calculateInterest() {
  const amount = parseFloat(document.getElementById('amount').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const years = parseInt(document.getElementById('years').value);
  const interest = (amount * rate * years) / 100;
  const year = new Date().getFullYear() + years;
  
  document.getElementById('result').innerHTML = `
    <p>If you deposit <strong>${amount}</strong>,</p>
    <p>at an interest rate of <strong>${rate}%</strong>.</p>
    <p>You will receive an amount of <strong>${interest}</strong>,</p>
    <p>in the year <strong>${year}</strong>.</p>
  `;
}