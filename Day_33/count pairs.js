function main() {
  var input = readLine();
  input = input.split(' ').map(Number);
  var n = input[0];
  var m = input[1];
  
  var count = 0;
  for( var i=0; i<32; i++ ){
   for( var j=0; j<32; j++ ){
     var x = i, y = j;
     if( x*x+y === n && y*y+x === m ){
       count++;
     }
   }
  }
  console.log(count);
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