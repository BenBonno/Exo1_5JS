const someArr = [1, 2, 3, 4, 5];

//Ex 1
const doubleArray = someArr.map(e => e * 2) // for (let i= 0; i >numbers.length;i++) {numbersX2.push(numbers[i]*2)}
console.log(doubleArray);
//Ex 2
const evenArray = someArr.filter(e => e % 2 == 0) // filter renvoi boolean , si vrai on garde et on ajoute new tableau, si faux on met pas dans le nouveau tableau
const oddArray = someArr.filter(e => e % 2 != 0)

//Ex 3
const maxValueArr = someArr.reduce((max, e) => Math.max(max, e)) // max ici est nommé accumulateur, bonne pratique de nommer accumulateur en donnée de sortie attendue 
const minValueArr = someArr.reduce((min, e) => Math.min(min, e))

//Ex 4

const sumValueArr = someArr.reduce((total, e) => total + e)

// //Ex 5

const isOddValue = someArr.filter(e => e % 2 != 0).length != 0