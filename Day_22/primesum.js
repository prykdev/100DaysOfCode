function runProgram(input){
	 var newInput = input.split(" ").map(Number);
	 var a = newInput[0];
	 var b = newInput[1];
  var output="";
  for (i = a; i <= b; i++)
  {
     if (i == 1 || i == 0)
            continue;
     flag = 1;
 
        for (j = 2; j <= i / 2; ++j) {
            if (i % j == 0) {
                flag = 0;
                break;
            }
      }
    if (flag == 1)
        output += i+" ";
  
 
  }
   console.log(output);
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