function sample(param){
    if(param===undefined){
        throw new Error('Missing param !');
    }
    return param;
}
// Short with arrow function 
mamdatory = () => { throw new Error('Missing param !')};
const sample1 = (param=mamdatory()) => param
console.log(sample())
console.log(sample1)