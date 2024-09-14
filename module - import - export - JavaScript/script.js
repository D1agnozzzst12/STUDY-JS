
// Импорт дефолтного экспорта под именем name

// import name from './vars.js'


// console.log(name)



import newName from './vars.js'

console.log(newName)




// Импорт именованного экспорта


// import {age} from './vars.js'

// console.log(age)



// import { gender } from './vars.js'

// console.log(gender)






// import {age, gender} from './vars.js'


// console.log(age, gender)








// Импорт именованных экспортов с переименованием


// import {age as newAge, gender as newGender} from './vars.js'


// console.log(newAge, newGender)








// Импорт всех именованных экспортов


// import * as vars from './vars.js'


// console.log(vars)

// console.log(vars.age)

// console.log(vars.gender)

// console.log(vars.default)









// Импорт дефолтных и всех именованных экспортов


// import userName, * as vars from './vars.js'

// console.log(userName, vars.age, vars.gender)




import { userInfo } from './vars.js'

console.log(userInfo)

