function runProgram(input){
  var input = input.split("\n").map(Number);
  var A = Number(input[0]);
  var B = Number(input[1]);
  var C = Number(input[2]);
  
  var N = Number(input[3]);

  var periA= 4*A;
  var periB=4*B;
  var periC=4*C;
    //console.log(periA,N);
  if(periA >=N)
    console.log("Park A");
  else if(periB>=N)
    console.log("Park B");
  else if(periC>=N)
    console.log("Park C");
  else
    console.log("Resolution Failed");
   
  
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