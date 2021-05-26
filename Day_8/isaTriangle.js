function findtri(a,b,c){
  if(a+b>c && a+c>b && b+c>a)
    return true;
  else
    return false; 
}



function runProgram(input){
	 input = input.split("\n");
  var T = Number(input[0]);
  var pos=1;
  for(i=0;i<T;i++)
  {
    var test = input[pos++].split(" ").map(Number);
   
    var possible = findtri(test[0],test[1],test[2]);
    if(possible)
      console.log("Yes");
    else
      console.log("No");
       
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