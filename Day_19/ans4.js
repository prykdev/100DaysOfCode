function runProgram(input){
	 var newInput = input.split("\n");
	 var a = Number(newInput[0]);
	 var b = newInput[1].split(" ").map(Number);
  var max=b[0];
  var min=b[0];
  for(var i=1;i<b.length;i++){
  if(b[i]<min)
    min=b[i]
  if(b[i]>max)
    max=b[i];
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