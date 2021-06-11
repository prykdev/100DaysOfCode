function runProgram(input){
	 var newInput = input.split("\n");
	 var a = Number(newInput[0]);
  var pos=1;
  var ch=2;
  var count =0;
  for(var i=0;i<a;i++){
  var size = Number(newInput[pos]);
  var arr = newInput[ch].split(" ").map(Number);
    var ans=[];
  for(var j=0;j<size;j++)
  {
    if(arr[j]%2==0)
      ans.push(-1);
    else
      ans.push(1);
      
  }
    console.log(ans.join(" "));
   ch +=2;
  pos+=2;
  count=0;
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