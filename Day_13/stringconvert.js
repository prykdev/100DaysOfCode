function runProgram(input){
	  var newInput = input.split("\n");
  var s=newInput[0];
  var ans=[];
  var arr=newInput[1].split("");
 for(var i=0;i<arr.length;i++)
 {
   if(arr[i]==arr[i].toUpperCase())
     ans.push(arr[i].toLowerCase())
   else
     ans.push(arr[i].toUpperCase())
 }
  console.log(ans.join(""));
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