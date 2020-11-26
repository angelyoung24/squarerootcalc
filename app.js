const answerText = document.getElementById("answer");


function sqrt(a) {    
    if (a < 0) {
      answerText.InnerText = "No Negative Numbers Allowed";
    } else if (a !== a) {
      answerText.InnerText = "False";
    } else {
     answerText.InnerText = "True";
    }
    let x,
      x1 = a / 2;
    do {
      x = x1;
      x1 = (x + a / x) / 2;
    } while (x !== x1);
    return x;
  }
  