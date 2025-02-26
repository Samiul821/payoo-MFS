document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    const mainBalence = document.getElementById("main-balence").innerText;
    const convertedMainBalenc = parseFloat(mainBalence);

    if (amount && pin) {
      if (convertedPin === 2255) {
        const sum = convertedMainBalenc + convertedAmount;
        document.getElementById("main-balence").innerText = sum;
      } else {
        alert("enter valid pin");
      }
    } else {
      alert("enter amount");
    }
  });
