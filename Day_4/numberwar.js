function runProgram(input){
	 var newInput = input.split("\n");
	var N=newInput[0];
  var test= newInput[1].split(" ").map(Number);
  var sum1=0;
  var sum2 =0;
  for(var i=0;i<N;i++)
  {
   if(test[i]%2==0)
     sum1 += test[i];
    else
     sum2 += test[i];
  }
console.log(sum1-sum2);
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