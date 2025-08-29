/*love button function */

let likeCount = 0;
const likeCountDisplay = document.getElementById("like-count");
const heartButtons = document.getElementsByClassName("heart-btn");

for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].onclick = function () {
    likeCount++;
    likeCountDisplay.textContent = likeCount;
  };
}

/* alert button fuctions */

const buttons = document.querySelectorAll(".alert-btn");
const buttons2 = document.querySelectorAll(".alert-btn2");
const buttons3 = document.querySelectorAll(".alert-btn3");
const buttons4 = document.querySelectorAll(".alert-btn4");
const buttons5 = document.querySelectorAll(".alert-btn5");
const buttons6 = document.querySelectorAll(".alert-btn6");
const buttons7 = document.querySelectorAll(".alert-btn7");
const buttons8 = document.querySelectorAll(".alert-btn8");
const buttons9 = document.querySelectorAll(".alert-btn9");
function showAlert1() {
  alert("National Emergency calling 999");
}

function showAlert2() {
  alert("police Helpline Number calling 902");
}
function showAlert3() {
  alert("Fire Service Number calling 903");
}
function showAlert4() {
  alert("Ambulence Service Number calling 19940");
}

function showAlert5() {
  alert("Women & child helpline service calling 109");
}
function showAlert6() {
  alert("Anti Corruption Helpline calling 106");
}
function showAlert7() {
  alert("Electricity helpline calling 166");
}
function showAlert8() {
  alert("Brac Helpline calling 16445");
}

function showAlert9() {
  alert("Bangladesh Railway Helpline calling 163");
}
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", showAlert1);
}

for (var i = 0; i < buttons2.length; i++) {
  buttons2[i].addEventListener("click", showAlert2);
}

for (var i = 0; i < buttons3.length; i++) {
  buttons3[i].addEventListener("click", showAlert3);
}
for (var i = 0; i < buttons4.length; i++) {
  buttons4[i].addEventListener("click", showAlert4);
}
for (var i = 0; i < buttons5.length; i++) {
  buttons5[i].addEventListener("click", showAlert5);
}
for (var i = 0; i < buttons6.length; i++) {
  buttons6[i].addEventListener("click", showAlert6);
}
for (var i = 0; i < buttons7.length; i++) {
  buttons7[i].addEventListener("click", showAlert7);
}
for (var i = 0; i < buttons8.length; i++) {
  buttons8[i].addEventListener("click", showAlert8);
}
for (var i = 0; i < buttons9.length; i++) {
  buttons9[i].addEventListener("click", showAlert9);
}

/* Coin Count Functions */

var coins = 100;
var coinDisplay = document.getElementById("coin-count");

function makeCall(msg) {
  if (coins >= 20) {
    coins = coins - 20;

    coinDisplay.textContent = "" + coins;

    alert(msg + "\n20 coins deducted.");
  } else {
    alert("Not enough coins to make a call!");
  }
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var msg = this.getAttribute("data-message");
    makeCall(msg);
  });
}

for (var i = 0; i < buttons2.length; i++) {
  buttons2[i].addEventListener("click", function () {
    var msg = this.getAttribute("data-message");
    makeCall(msg);
  });
}
for (var i = 0; i < buttons3.length; i++) {
  buttons3[i].addEventListener("click", function () {
    var msg = this.getAttribute("data-message");
    makeCall(msg);
  });
}

for (var i = 0; i < buttons4.length; i++) {
  buttons4[i].addEventListener("click", function () {
    var msg = this.getAttribute("data-message");
    makeCall(msg);
  });
}
for (var i = 0; i < buttons5.length; i++) {
  buttons5[i].addEventListener("click", function () {
    var msg = this.getAttribute("data-message");
    makeCall(msg);
  });
}
for (var i = 0; i < buttons6.length; i++) {
  buttons6[i].addEventListener("click", function () {
    var msg = this.getAttribute("data-message");
    makeCall(msg);
  });
}
for (var i = 0; i < buttons7.length; i++) {
  buttons7[i].addEventListener("click", function () {
    var msg = this.getAttribute("data-message");
    makeCall(msg);
  });
}
for (var i = 0; i < buttons8.length; i++) {
  buttons8[i].addEventListener("click", function () {
    var msg = this.getAttribute("data-message");
    makeCall(msg);
  });
}
for (var i = 0; i < buttons9.length; i++) {
  buttons9[i].addEventListener("click", function () {
    var msg = this.getAttribute("data-message");
    makeCall(msg);
  });
}

/* Service and call history functions */
// counter
const historyDisplay = document.getElementById("call-history-list"); // DOM element showing count
const historyButtons = document.getElementsByClassName("created"); // buttons/icons
const clearBtn = document.getElementById("clear-history");

for (let i = 0; i < historyButtons.length; i++) {
  historyButtons[i].addEventListener("click", function () {
    const name = this.getAttribute("data-name");
    const number = this.getAttribute("data-number");

    const li = document.createElement("li");
    li.textContent = name + " " + number;

    // Add it to the history list
    historyDisplay.appendChild(li);
  });
}

clearBtn.addEventListener("click", function () {
  historyDisplay.innerHTML =
    '<li id="placeholder" class="text-gray-500">No calls yet</li>';
});
