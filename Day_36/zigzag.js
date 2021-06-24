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
  
  //Getting => element as desired output
  var output = '';
  for( var i=0; i<row; i++ ){
   if( i%2 === 0 ){
     for( var j=col-1; j>=0; j-- ){
     	output += arr[i][j] + ' ';
     }
   }
   else{
     for( var j=0; j<col; j++ ){
     	output += arr[i][j] + ' ';
     }
   }
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
