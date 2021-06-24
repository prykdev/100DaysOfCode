function runProgram(input){
input = input.split('\n');
  var firstLine = input[0].split(' ').map(Number);
  var row = firstLine[0];
  var col = firstLine[1];
  
  //Making a 2D array
  var pos = 1;
  var arr = [];
  for( var x=0; x<row; x++ ){
    arr.push(input[pos].split(' ').map(Number));
    pos += 1;
  }
  var ans=[]
for(var j=0;j<=col-1;j++)
{
  for(var i=row-1;i>=0;i--)
  {
    ans.push(arr[i][j]);
  }
}
 console.log( ans.join(" "));
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

