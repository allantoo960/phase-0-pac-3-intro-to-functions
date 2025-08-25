function doNothing(){}// Follow along with the examples here

function sayHello() {
console.log("Hello!");

}
sayHello `()`
function sayHelloToCheckmate(){
    console.log("Hello, Checkmate!");
}
sayHelloToCheckmate `()`

function sayHelloLiz(){
    console.log("Hello Liz!");
}
sayHelloLiz `()`

function sayHelloToBrian(){
    console.log("Hello Brian!")
}
sayHelloToBrian`()`
sayHelloLiz `()`
sayHelloToCheckmate `()`

function doSomething(thing){
    console.log(thing);
}
doSomething("anything");

function sayHelloTo(firstName){
    console.log(`Hello ${firstName}!`)
}
sayHelloTo("Checkmate");
sayHelloTo("Guadalupe");
sayHelloTo('Liz');

function say (greeting, firstName){
    console.log(`${greeting}, ${firstName}`)
}
say("Julio", "Goodafternoon");

function say (greeting, firstName){
    console.log("firstName:", firstName);
    console.log("greeting:", greeting);
    console.log(`${greeting}, ${firstName}!`)

}
function add(x,y){
    return x + y;

}
console.log(add(1,2));

function say(greeting, firstName){
    return `${greeting}, ${firstName}!`;
}
console.log(say("Hello","Liz"));

function say(greeting, firstName){
    console.log(`${greeting}, ${firstName}!`)

}
console.log(say("Hello","Liz"));

function add(x,y){
    x + y
}
console.log(add(1,2));
function say(greeting, firstName){
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");           
}
console.log(say("Howdy","partner"));

function say(greeting, firstName){
    console.log("I was called!"); 
    return `${greeting}, ${firstName}!`;
}
console.log(say("Howdy","partner"));