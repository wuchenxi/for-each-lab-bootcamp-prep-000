iterativeLog=(arr)=>{
  arr.forEach((e,i,a)=>{console.log(`${i}: ${e}`)})
}

iterate=(fun)=>{
  var a=[1,2,3]
  a.forEach(fun)
  return a
}

doToArray=(a,f)=>{
  return a.forEach(f)
}
