// A list to hold the states
let statesList = [];

// An async function to get the states
async function getTaxPercent() {
   const response = await fetch(
   "https://jadabower.github.io/wdd130/Javascript_github_stuff/states_tax_rates.json"
   );
   statesList = await response.json();
   let state_chosen = document.getElementById("state").value;
   let tax_rate = 0.0;
   statesList.forEach((state) => {
      if (state_chosen == state.name) {
         tax_rate = state.tax_rate;
      }
   });
   let original_price = getOriginalPrice();
   output(tax_rate, original_price);
}

// A function that gets the tip percent from the input
function getTipPercent() {
   let tip = parseFloat(document.getElementById("tip").value);
   let original_price = getOriginalPrice();
   output(tip, original_price);
}

// A function that gets the original price from the input
function getOriginalPrice() {
   let original_price = document.querySelector('#original_price').value;
   return original_price;
}

// A function to take in a percent and original price and calculate and output the total price
function output(percent, original_price) {
   let total_price = (((percent * 0.01) * original_price) + original_price);
   let paragraph_with_total = document.getElementById("total_price");
   paragraph_with_total.innerHTML = total_price;
}

// Event listeners to listen for when it changes the state or tip chosen
document.getElementById("tip").addEventListener("change", getTipPercent);
document.getElementById("state").addEventListener("change", getTaxPercent);