// document
//   .getElementById("withdraw-btn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     const pin = document.getElementById("cashout-pin").value;
//     const convertedPin = parseInt(pin);
//     const cashoutAmount = document.getElementById("cashout-amount").value;
//     const convertedCashoutAmount = parseFloat(cashoutAmount);
//     const mainBalence = document.getElementById('main-balence').innerText;
//     const convertedMainBalenc = parseFloat(mainBalence);
//     if(convertedPin === 2255){
//        const sum = convertedMainBalenc - convertedCashoutAmount;
//        document.getElementById('main-balence').innerText = sum;
//     }
//     else{
//         alert('enter valid pin');
//     }
//   });

document
  .getElementById("withdraw-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const agentNumber = document.getElementById("agent-number").value;
    const amount = getInputValueId("cashout-amount");
    const pinNumber = getInputValueId("cashout-pin");
    const mainBalence = getInnerTextId("main-balence");

    if (amount > mainBalence) {
      alert("invalid amount");
      return;
    }

    if (agentNumber.length === 11) {
      if (pinNumber === 2255) {
        const sum = mainBalence - amount;
        setInnerTextByIdandValue("main-balence", sum);

        const contanier = document.getElementById("transactions-container");
        const p = document.createElement("p");
        p.innerText = `
        cashout ${amount} Taka from this ${agentNumber} agent
        `;
        contanier.appendChild(p);
      } else {
        alert("pin number not valid");
      }
    } else {
      alert("agent number not valid");
    }
  });
