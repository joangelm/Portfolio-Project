var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pick) {
    fullImgBox.style.display = "flex";
    fullImg.src = pick;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}
