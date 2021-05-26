//Enter code here

function num2 (N,nums){
 
for(var i=0;i<N;i++)
  { 
  var ele = nums[i];
  if(i=== N-1)
    return -1;
     if( ele === 2 )
     {
      return nums[i+1];
     }
  
  }
}
function runProgram(input){
	input= input.split("\n");
  var N=Number(input[0]);
  var ans ;
  var nums=input[1].split(" ").map(Number);
  var abs = num2(N,nums);
  console.log(abs);
  

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