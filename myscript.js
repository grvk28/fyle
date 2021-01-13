/*--------SEE ALL & HIDE--------*/
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    btnText.innerHTML = "Hide Categories"; 
    
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "See All Categories"; 
    
  }
}
