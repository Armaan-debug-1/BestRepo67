const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach((button) => {
    button.addEventListener('click',function(e){
        if(e.target.id === 'blue' || e.target.id === 'purple'){
            body.style.color = 'white'
        }
        else body.style.color = 'black'
        body.style.backgroundColor = e.target.id;
    })
})
