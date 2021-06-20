function runProgram(input){
   var newInput = input.split("\n");
  var size=Number(newInput[0]);
  var sal=Number(newInput[2]);
  var sum=0
  for(var i=0;i<size;i++)
  {
    var test = newInput[1].split(' ').map(Number);
    sum+=test[i];
    
  }
  if(sum==sal)
    console.log("Neutral");
  else if(sum>sal)
    console.log("Debt");
  else
    console.log("Save");

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
