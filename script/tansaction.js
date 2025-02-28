document.getElementById("transactions").style.display = "none";

document
  .getElementById("transaction-box")
  .addEventListener("click", function () {
    handleToggle("add-money-section", "none");
    handleToggle("cashout", "none");
    handleToggle("transactions", "block");
  });
