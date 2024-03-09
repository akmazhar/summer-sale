let total = 0;

function handleCLikBtn(target) {
  const selectedItemContainer = document.getElementById("selected-items");
  const itemName = target.parentNode.childNodes[1].innerText;
  const ul = document.createElement("ul");
  ul.innerText = itemName;
  selectedItemContainer.appendChild(ul);
  const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
  total = parseInt(total) + parseInt(price);
  document.getElementById("total").innerText = total;
}





function handleCLikBtn(target) {
  const selectedItemContainer = document.getElementById("selected-items");
  const itemName = target.parentNode.childNodes[1].innerText;
  const ul = document.createElement("ul");
  ul.innerText = itemName;
  selectedItemContainer.appendChild(ul);
  
  const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
  total = parseInt(total) + parseInt(price);
  document.getElementById("total").innerText = total;

  applyDiscount();
}

function applyDiscount() {
  const discountPercentage = 20; 
  const discountedTotal = total - (total * discountPercentage / 100);
  document.getElementById("discounted-total").innerText = discountedTotal.toFixed(2);
}

