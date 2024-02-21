// Used Object.prop 
let Validate1 = (fullname) => {
    if(!fullname.firstName)
        return false;
    if(!fullname.lastName)
        return false;
    return true;
}
console.log(Validate1({firstName:'A',lastName:'B'}))
// Used Object['prop']
const rule = {
    firstName : {
        required : true
    },
    lastName : {
        required : true
    }
}
const Validate2 = (rule,values) => {
    for(prop in rule){
        if(rule[prop].required){
            for(let item in values){
                if(!values[item][prop]){
                    console.log(`Object index ${item} is Missing prop ${prop}`)
                    return false;
                }
            }
        }
    }
    return true;
}
const employees = [
    {firstName : 'A', lastName: 25},
    {firstName : '', lastName: 30},
    {firstName : 'C', lastName: 35}
]
console.log(Validate2(rule,employees))
