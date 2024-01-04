function displayInput() {
    var userInput = document.getElementById('userInput').value;

 if(userInput === ''){
    document.getElementById('output').innerHTML = "please enter speed";
    return;
 }


 if(userInput <= 70) {
    document.getElementById('output').innerHTML = "OK";
 } else if (userInput >70){
   
    var pointsAboveLimit = userInput - 70;

    var extraPoints = Math.floor(pointsAboveLimit / 5)

    document.getElementById('output').innerHTML = "Demerit points: "  + (1 +extraPoints);
 }else {
    document.getElementById('output').innerHTML = "wrong input";
 }
  }
