var count=0;
document.querySelector(".btn-inc").addEventListener("click",increase);
function increase(){
  count=count+1;
  document.querySelector("p").innerHTML=count;
}
document.querySelector(".btn-dec").addEventListener("click",decrease);
function decrease(){
  count=count-1;
  document.querySelector("p").innerHTML=count;
}
document.querySelector(".btn-reset").addEventListener("click",reset);
function reset(){
  count=0;
  document.querySelector("p").innerHTML=count;
}
document.querySelector(".btn-options").addEventListener("click",colorChange);
function colorChange(){
  if (count>0) {
    document.querySelector("p").style.color="#16FF00";
  }
  else if (count<0) {
    document.querySelector("p").style.color="#FF1E1E";
  }
  else {
    document.querySelector("p").style.color="white";
  }
}
