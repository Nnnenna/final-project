const card = document.querySelectorAll('input[type=submit]');

const summary = document.querySelector('.summary');

const main = document.querySelector('.main');

card.addEventListener('Submit', function (){
    document.querySelector('.summary')
    summary.style.display = 'block';
    
})

card.addEventListener('Submit ', (e) =>{
    e.preventDefault()
})

