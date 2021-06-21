
function rotate(N, K, ar){  
  for( var i=K-1; i>=0; i-- ){
   var remove = ar.pop(); 
   ar.unshift(remove);
  }
  return ar.join(' ');
}
function runProgram(input){
  input = input.split('\n');
  var t = Number(input[0]);
  
  var pos = 1;
  for(var i=0; i<t; i++){
    var easy = input[pos].split(' ').map(Number);
    var N = easy[0];
    var K = easy[1];
    var ar = input[pos+1].split(' ').map(Number);
    console.log(rotate(N, K, ar));
    pos += 2;
  }
  
}process.stdin.resume();
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