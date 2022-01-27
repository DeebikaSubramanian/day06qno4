let n = 123;
let x=n.toString().split("").map(Number)
console.log(x)
console.log(add(n));
function add(n)
{
let sum = 0;
for(var i=0;i<x.length;i++){
 sum+=x[i]
 }
 return sum;
}