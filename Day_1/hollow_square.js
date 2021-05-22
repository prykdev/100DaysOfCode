//Enter code here
function runProgram(input){
	 var a = Number(input);
  var c=a;
  for(i=1;i<=a;i++)
  {
    var output="";
    for(j=1;j<=a;j++)
    {
      if(i==1 || j==1||  i==a|| j==a)
        output+="* ";
      else
        output+="  ";
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