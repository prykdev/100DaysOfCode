//Enter code here
function runProgram(input){
	input= input.split("\n");
  var N=Number(input[0]);
  var sum=0;
  var arr=input[1].split(" ").map(Number);
var max=Number.MIN_SAFE_INTEGER;
  var min=Number.MAX_SAFE_INTEGER;
  for(i=0;i<N;i++)
  {
    var num=arr[i];
    if(max<num)
      max=num;
    if(min>num)
      min=num;
  }
  console.log(min);
  console.log(max);
  
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