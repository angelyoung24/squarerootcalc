const answerText = document.getElementById("answer");


function sqrt(a) {    
    if (a < 0) {
      return "Zero Negativity";
    } else if (a !== a) {
      return "There is beauty in every imperfection";
    } else {
      return "Perfect square!";
    }
    let x,
      x1 = a / 2;
    do {
      x = x1;
      x1 = (x + a / x) / 2;
    } while (x !== x1);
    return x;
  }
  