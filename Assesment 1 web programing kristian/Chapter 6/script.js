const costInput = document.getElementById("cost");
const litresInput = document.getElementById("litres");
const currencySelect = document.getElementById("currency");
const result = document.getElementById("result");
const button = document.getElementById("calculateBtn");


function calculate() {

  
  let cost = parseFloat(costInput.value);
  let litres = parseFloat(litresInput.value);
  let currency = currencySelect.value;

  
  costInput.classList.remove("error");
  litresInput.classList.remove("error");

  
  if (isNaN(cost) || cost < 0) {
    costInput.classList.add("error");
    result.textContent = "Enter valid cost.";
    return;
  }

  if (isNaN(litres) || litres < 0) {
    litresInput.classList.add("error");
    result.textContent = "Enter valid litres.";
    return;
  }

  
  let total = cost * litres;

  
  result.textContent = `Total Cost: ${currency}${total.toFixed(2)}`;

  
  result.classList.add("show");
}


button.addEventListener("click", calculate);


costInput.addEventListener("input", calculate);
litresInput.addEventListener("input", calculate);
currencySelect.addEventListener("change", calculate);