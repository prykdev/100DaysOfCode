function runProgram(input){
	 var newInput = input.split("\n");
	 var a = Number(newInput[0]);
  var b=newInput[1];
  console.log(b.toUpperCase());

  

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