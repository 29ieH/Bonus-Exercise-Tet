let a;
const b = "";
// Sử dụng if else
if(b!==null || b!==undefined || b!==""){
    a = b;
} else{
    a = "";
}
console.log(a);
// Sử dụng toán tủ ""
const z = b || "";
console.log(z);