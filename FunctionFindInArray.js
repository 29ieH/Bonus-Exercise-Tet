const employees = [
    {name : 'A', age: 25},
    {name : 'B',age: 30},
    {name : 'C',age: 35}
]
const findEmp = (name) => {
    for(let item in employees){
        if(employees[item].name==name){
            return employees[item]
        }
    }
}
let emp1 = findEmp('A')
console.log(emp1)
// Short with function Find in Arrays
name1 = 'B';
let emp2 =  employees.find(item => item.name == name1);
console.log(emp2)