function runProgram(input){
	 var newInput = input.split("\n");
	 var a = Number(newInput[0]);
	 var b = newInput[1].split(" ").map(Number);
  var sume=0;
  var sumo=0;
  for(var i=0;i<b.length;i++)
  {
    if(b[i]%2==0)
      sume+=b[i];
    else
      sumo+=b[i];
  }
  if(sume>=sumo){
    console.log("Even");
    
  }
  else
    console.log("Odd");
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