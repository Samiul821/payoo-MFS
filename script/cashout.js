document
  .getElementById("withdraw-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pin = document.getElementById("cashout-pin").value;
    const convertedPin = parseInt(pin);
    const cashoutAmount = document.getElementById("cashout-amount").value;
    const convertedCashoutAmount = parseFloat(cashoutAmount);
    const mainBalence = document.getElementById('main-balence').innerText;
    const convertedMainBalenc = parseFloat(mainBalence);
    if(convertedPin === 2255){
       const sum = convertedMainBalenc - convertedCashoutAmount;
       document.getElementById('main-balence').innerText = sum;
    } 
    else{
        alert('enter valid pin');
    }
  });
