function runProgram(input){
	 var input = input.split(" ").map(Number);
  var sum=0;
  for(var i=0;i<input.length;i++)
  { 
    sum += input[i];
  }
  var n= input.length +1;
  var totalSum=(n*(n+1))/2;
  var diff = totalSum - sum;
  console.log(diff);
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