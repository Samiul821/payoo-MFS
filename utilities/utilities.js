function getInputValueId(id) {
  const value = document.getElementById(id).value;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

function getInnerTextId(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

function setInnerTextByIdandValue(id, value) {
  document.getElementById(id).innerText = value;
}
