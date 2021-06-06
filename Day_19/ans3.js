function runProgram(input){
	 var newInput = input.split("\n")
	 var a = Number(newInput[0]);
	 var b = newInput[1].split(" ").map(Number);
  var flag=0;
  for(var i=0;i<b.length;i++)
  {
    if(b[i] == 42){
      falg=1;break;}
    
  }
  if(flag==1)
    console.log("Yes");
  else
    console.log("No");
    
    
  
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