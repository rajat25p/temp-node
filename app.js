/*const amount = 1

if(amount < 10){
console.log('small number')
}
else{
    console.log('large number')
}

console.log('My first node app')



console.log(__dirname)
setInterval(()=> {
    console.log('Hello World')
},2000) */


// 1. MODULES
//    a) CommonJs, every file is module (by default)
//    b) Modules - Encapsulated Code (only share minimum)

const names = require('./Module')
const sayHi = require('./utils')



sayHi('Rajat')
sayHi(names.john)
sayHi(names.peter)



const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);

