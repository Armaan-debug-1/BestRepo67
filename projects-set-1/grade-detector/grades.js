const form = document.querySelector('form')
let str;
const present=0;
let gradelist = [50,60,70,80,90,100]
gradelist = [10,20,30,40,100]
form.addEventListener('submit',(e) => {
    e.preventDefault();
    const marks = parseInt(document.querySelector('#Marks').value)
    const subject = document.querySelector('#Subject').value.toUpperCase()
    const result = document.querySelector('#result')
    switch (subject) {
        case 'MANPRO':
            gradelist = [40,50,65,70.7,100]
            break;
        case 'PHYSICS':
            gradelist = [41,57,69,79,100]
            break;
        case 'PROFFCOMM':
            gradelist = [45,62,69,74,100]
            break;
        case 'ED':
            gradelist = [48,60,75,82,100]
            break;
        case 'MATHS':
            gradelist = [47,62,80,86,100]
            break;
        case 'UAI201':
            gradelist = [100,100,100,100,100]
            break;
    
        default:
            str = 'unfortunately, we don\'t have that subject yet..'
            result.innerHTML = `<span>${str} !!</span>`
            present = 1
            break;
    }
    if(isNaN(marks)|| marks < 0 || marks > 100 )
        str = 'That\'s not physically possible....'
    else{
        if(marks<gradelist[0]){
            str = 'Your grade is F'
        }
        else if(marks<gradelist[1]){
            str = 'Your grade is B-'
        }
        else if(marks<gradelist[2]){
            str = 'Your grade is B'
        }
        else if(marks<gradelist[3]){
            str = 'Your grade is A-'
        }
        else if(marks<=gradelist[4]){
            str = 'Your grade is A'
        }
    }
    if(present == 0)
    result.innerHTML = `<span>${str} !!</span>`
})