

const comment = document.querySelector('.comment')
const  submit = document.querySelector('#submit')
const  output = document.querySelector('#output1')

function showName(inputName){
    inputName.preventDefault();


output.innerHTML = comment.value;
}



submit.addEventListener('click', showName)