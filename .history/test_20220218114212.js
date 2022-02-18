const testNum = 10
const tmpArr = new Array(3).fill(0);
const arr = [...testNum+'']
while(arr.length < 3){
  arr.unshift('0')
}
console.log(arr);