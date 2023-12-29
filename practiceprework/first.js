document.getElementById('gradeForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const marks = parseInt(document.getElementById('marksInput').value);

  if (marks <= 40){
    document.getElementById('gradeResult').innerText = 'Your are a Fool MAXWELL ';
      } 
      else if (marks <= 49) {
    document.getElementById('gradeResult').innerText = 'Your grade is D';
  } else if (marks <= 59){
    document.getElementById('gradeResult').innerText = 'Your grade is C';
  } else if (marks <= 79){
    document.getElementById('gradeResult').innerText = 'Your grade is B';
  } else {
    document.getElementById('gradeResult').innerText = 'Your grade is A';
  }
  
});
