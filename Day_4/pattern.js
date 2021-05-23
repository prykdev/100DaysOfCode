function runProgram(input){
	 var a = Number(input);
  for(i=0;i<a;i++)
  {
    var output="";
    for(j=0;j<a;j++)
    {
      if(j==0||i==a-1||j==a-1)
        output +="* ";
      else 
        output += "  ";
     
    }
    console.log(output);
  }
  
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