const headerElement = document.getElementById('header')
const logoElement = document.getElementById('logo')
const blockButtonElement = document.getElementById('blockButton')
const buttonbtn = document.getElementById('button')
const blockLinkElement = document.getElementById('blockLink')
const itemElementOne = document.getElementById('item-1')
const itemElementTwo = document.getElementById('item-2')
const itemElementThree = document.getElementById('item-3')
const itemElementFour = document.getElementById('item-4')
const buttonCloseBtn = document.getElementById('buttonClose')


buttonbtn.addEventListener('click',function (){
    blockLinkElement.style.display = 'flex'
    blockLinkElement.style.justifyContent = 'center'
    blockLinkElement.style.alignItems = 'center'
    blockLinkElement.style.flexDirection = 'column'
    buttonbtn.style.display = 'none'
    headerElement.style.height = '300px'
    buttonCloseBtn.style.display = 'block'
})

buttonCloseBtn.addEventListener('click', function() {
    buttonCloseBtn.style.display = 'none'
    blockLinkElement.style.display = 'none'
    buttonbtn.style.display = 'block'
    headerElement.style.height = '120px'
})