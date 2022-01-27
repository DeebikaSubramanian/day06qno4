var as=[12,34,5,6,2,56,6,2,1];
var b=as.filter((e)=>e%2!=0).reduce((a,e)=>a+e)
console.log(b)
