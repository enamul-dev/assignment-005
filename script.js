let likeCount = 0;
const likeCountDisplay = document.getElementById("like-count");
const heartButtons = document.getElementsByClassName("heart-btn");

for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].onclick = function () {
    likeCount++;
    likeCountDisplay.textContent = likeCount;
  };
}
