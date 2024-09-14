
console.log(console)

console.assert(false, 'Your message')


let array = ['apple', 'samsung', 'facebook']


for (company of array) {
    console.count('Company')
    console.log(company)
}
console.countReset('Company')




let array1 = ['apple', 'samsung', 'facebook']
let array2 = ['banana', 'apple', 'kivi']


let matrix = [array1, array2]

console.table(matrix)


const matrixTwo = [
    {name: 'Ilishan', prexota: 'Morskaya'},
    {name: 'Ilishan', prexota: 'Morskaya'},
    {name: 'Ilishan', prexota: 'Morskaya'},
    {name: 'Ilishan', prexota: 'Morskaya'},
    {name: 'Ilishan', prexota: 'Morskaya'},
    {name: 'Ilishan', prexota: 'Morskaya'},
]

console.table(matrixTwo)




console.log('Это наружняя группа')
console.group()
console.log('level 2')
console.group()
console.log('level 3')
console.warn('Bigger level 3')
console.groupEnd()
console.log('Again level 2')
console.groupEnd()
console.log('Обратно в наружную группу')



// Timer

const a = 6
let m = 1
console.time('My timer')
for (let i = 0; i < 9; i++) {
    console.timeLog('My timer')
    m += m * a * i
}

console.timeEnd('My timer')



console.log(
    '%cD1agnozzz DICKIY',
    'color: red;font-family: monospace;font-size: 30px;'

)