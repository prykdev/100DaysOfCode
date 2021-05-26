function findprod(arr){
  var prod =1;
  for(var i=0;i<arr.length;i++){
  prod *= arr[i];
  }
  return prod;
}

function solve(N,arr)
{
  var prod = findprod(arr);
  var res= [];
  for(var i=0;i<arr.length;i++)
  {
    res.push(prod /arr[i])
  }
  return res;
}


function runProgram(input){
	 input = input.split("\n");
  var T = Number(input[0]);
  var pos=1;
  for(var i=0;i<T;i++)
  {
    var N = Number(input[pos]);
    var test = input[pos+1].split(" ").map(Number);
    var solution = solve(N,test);
    pos += 2;
    console.log(solution.join(" "));
  }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
	read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});