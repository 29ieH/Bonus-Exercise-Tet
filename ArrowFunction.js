function sayHello(name){
    console.log('Hello',name);
}
// Short
let hello = (name) => {
    console.log("hello",name)
}
let hello1 = name => console.log("Hello",name) // used if the body is only 1 line
sayHello('29ieh');
hello('29ieh');
hello1('29ieh');
// Arrouw function in function
setTimeout(function(){
    console.log('Loaded')
},2000);
// Short
setTimeout(()=> console.log('Loaded'),2000);
// Implicit return 
function getValue(ratio){
    return ratio*6.9;
}
// Arrow
let getValue1 = (ratio) => {ratio * 6.9};
console.log(getValue(1));
