
let arr=[1,-2,-3,4,5];

function doubleMap(ar){
    let res=[];
    // console.log(n)
    for(let n in ar){
        res.push(ar[n]*2);
    }
    return res;
}

function checkPositiveNumFilter(ar){
    let res=[];
    for(let n in ar){
        if(ar[n]>=0){
            res.push(ar[n]);
        }
    }
    return res;
}

function sumAllReduce(ar){
    let total=0;
    for(let n in ar){
        total+=ar[n];
    }
    return total;
}


console.log(arr+"\n")

console.log("Map function : "+ arr.map((e)=>e*2));
console.log("Using logic "+doubleMap(arr)+"\n");

console.log("Filter function : "+ arr.filter((e)=>e>=0));
console.log("Using logic "+checkPositiveNumFilter(arr)+"\n");

console.log("Reduce function : "+ arr.reduce((total,e)=>e+total,0));
console.log("Using logic "+sumAllReduce(arr)+"\n");

let forArr=[];
arr.forEach((e)=>{forArr.push(e*2)});
console.log("ForEach Method : "+forArr);
// arr.forEach( (e) => console.log(e*2));//returns undefined
console.log("Using logic "+doubleMap(arr)+"\n");


