//////////////////
// return values
/////////////////.
// The one value that a function gives back that can be used or assigned to a variable

function addNums(x,y){
    // send the result out of the function
    return x + y
}

const result = addNums(1,1)
console.log(result)
console.log(addNums(1,1))
console.log(addNums(addNums(1,1),addNums(1,1)))

// first function is getListingName takes a firstName and a LastName and returns a string that is "lastName, firstName"

// second function, takes a string of (lastName, firstName) and returns a string of "firstName lastName")

