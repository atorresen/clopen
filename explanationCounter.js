var pIndex = 0;

function revealExplanation(pLen, begin, counter) {
  if (counter > begin && pIndex <= pLen) {
    var x = document.getElementById("p" + pIndex);
    x.style.display = "block";
    if (pIndex == pLen) {
      var div = document.getElementById("explain");
      var end = document.createElement('p');
      end.innerHTML = "𖣯";
      div.appendChild(end);
    }
    pIndex++;
  }
};
