function runProgram(input){
	 var newInput = input.split(" ").map(Number);
	 var req = newInput[0];
	 var n1 = newInput[1];
  var n2 = newInput[2];
  var n3= newInput[3];
  var n4= newInput[4];
  var n5= newInput[5];
  var n6= newInput[6];
  var sum = n1+n2+n3+n4+n5+n6;
  var sol = req-sum;
  console.log(sol);
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