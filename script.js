var pop = document.querySelector('.popup')
var tea = document.getElementById('Team')
var divv = document.querySelector('.black')
function getVal(){
var val = tea.options[tea.selectedIndex].value
console.log(val)
divv.style.visibility = 'visible'
pop.style.visibility = 'visible'
pop.style.transform = 'scale(1.2,1.2)'
if(val === 'France'){
    document.querySelector('.popup > h3').innerText = 'You chose France!!'
    document.querySelector('.popup > p').innerText = 'What a loser'
}
if(val === 'Argentina'){
    document.querySelector('.popup > h3').innerText = 'Congrats!'
    document.querySelector('.popup > p').innerText = 'You won'
}
if(val == 'Brazil'){
    document.querySelector('.popup > h3').innerText = 'HAHA'
    document.querySelector('.popup > p').innerText = 'Loooser'
}
if(val == 'Germany'){
    document.querySelector('.popup > h3').innerText = 'Fuck off'
    document.querySelector('.popup > p').innerText = 'Faggot'
}
}
function CloseWindow(){
    divv.style.visibility = 'hidden'
    pop.style.visibility = 'hidden'
    pop.style.transform = 'none'
}