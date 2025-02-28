document.getElementById("cashout").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("add-money-section", "block");
  handleToggle("cashout", "none");
  handleToggle("transactions", "none")
});

document.getElementById("cashout-box").addEventListener("click",function(){
  handleToggle("cashout", "block");
  handleToggle("add-money-section", "none");
  handleToggle("transactions", "none")
})


