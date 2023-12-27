////////////////////////////////
// Function Parameters
///////////////////////////////
// Parameters/Input --> Function --> Return Value/Output

function addNums(){
    console.log(1 + 1)
}

addNums()

// x,y are parameters (placeholders)
function addNums(x, y){
    console.log(x + y)
}

// invoke --> pass arguments to fill those parameters
addNums(2, 3)

// x,y are parameters (placeholders)
function addNums(x, y){
    console.log(x + y)
}

// invoke --> pass arguments to fill those parameters
addNums(2,3)
addNums(3,3)
addNums(5,6)

// Write a function that takes 3 arguments, adds the first two and multiplies by the third and logs the result
 function addAndMulti(x, y, z){
    console.log((x + y) * z)
 }

 addAndMulti(1,2,3)

 ///////////////

 function printIceCream(flavor){
    console.log(`The flavor is ${flavor}`)
}

printIceCream("Chocolate")

function printIceCream(flavor = "Vanilla"){
    console.log(`The flavor is ${flavor}`)
}

printIceCream("Chocolate")
printIceCream()