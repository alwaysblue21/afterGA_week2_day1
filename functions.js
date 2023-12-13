/////////////////////
// FUNCTIONS
/////////////////////
// Chunks of code you can run on command

// defining the function/writing the spell in my spellbook
function fireball(){
    console.log("I cast fireball")
    console.log("firrrrrrrree")
    console.log("flames consume the land")
}

//invoke/call the function
fireball()
fireball()
fireball()

/////////////////////////
// 3 Way to Define a Function
/////////////////////////

// function declaration
function helloWorld1(){
    console.log("Hello World")
}

helloWorld1()

//statement vs expression
//statements do not evaluate to a single value
//expressions evaluate to a single value

// function expression
const helloWorld2 = function(){
    console.log("Hello World")
}

helloWorld2()

const helloWorld3 = () => {
    console.log("Hello World");
  };
  
  helloWorld3()