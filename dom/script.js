const search = function(){
    const searchTerm = document.querySelector('#search').value.toLowerCase();
    const names = document.querySelectorAll('.container h3');

    for(let i = 0; i < names.length; i++){
        let textValue = names[i].textContent.toLowerCase();

        if(textValue.includes(searchTerm)){
            names[i].style.display = "block";
        } else {
            names[i].style.display = "none";
        }
    }
}
