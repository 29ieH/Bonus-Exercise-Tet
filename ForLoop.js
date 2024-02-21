let sampleArray = [1,2,3,4];
for(let i = 0 ; i < sampleArray.length ; i++){
    console.log(sampleArray[i]);
} 
// short 
for (let item in sampleArray){
    console.log(item,sampleArray[item])
}
for(let i = 0 ; i < 100000; i++);
// short 
for(let i = 0 ; i < 1e5 ; i++);
// 1e0 -> 1 , 1en ->1(0 loop n ) , 1e5 -> 100000