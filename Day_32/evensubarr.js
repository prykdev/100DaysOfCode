function runProgram(input){
  input = input.split('\n');
  var N = Number(input[0]);
  var ar = input[1].split(' ').map(Number);
  
  var count =0;
  var subArray = [];
  for( var i=0; i<N; i++ ){
   for( var j=i; j<N; j++ ){
    var sum = 0;
    for( var k=i; k<=j; k++ ){
     sum += ar[k]; 
    }
    subArray.push(sum);
   }
  }
  
  for( var x = 0; x<subArray.length; x++ ){
   if( subArray[x]%2 === 0 ){
    count++;    
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