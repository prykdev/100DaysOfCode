//Enter code here
function runProgram(input){
	input= input.split("\n");
  var N=Number(input[0]);
  var sum=0;
  var nums=input[1].split(" ").map(Number);
  for(var i=0;i<N;i++)
  {
     sum += nums[i];
  }
  var avg=sum/N;
  console.log(avg);
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