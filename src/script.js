var slider = document.getElementsByClassName("slider");
var output = document.getElementsByClassName("val");
var seeks = document.getElementsByClassName("seek");
for(let i = 0; i < slider.length; i++) {
  let sl = slider[i];
  let out = output[i];
  let seek = seeks[i];
  out.innerHTML = sl.value;
  function trackSize(){
  let x = sl.value/(sl.max-sl.min)*(sl.offsetWidth - 20) + "px";  seek.style.width = x;
  }
  trackSize();
  sl.oninput = function() {
  out.innerHTML = this.value;
  trackSize();
  }
}
  trackSize();
var count = document.getElementById("count");
var calc = document.getElementById("calc");
percent();
function percent() {
  var year = slider[1].value / 12;
  let pr = slider[0].value * year * 0.2;
  count.innerHTML = Math.round((pr + slider[0].value*1) / slider[1].value);
}
function result() {
  percent();
}
calc.addEventListener("click", result);