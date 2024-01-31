var fullImage = document.getElementById("fullImage");
var fullPict = document.getElementById("changImg");

function openImg(pic) {
    fullImage.style.display = "flex";
    fullPict.src = pic;
}
function closePic() {
    fullImage.style.display = "none";
    
}