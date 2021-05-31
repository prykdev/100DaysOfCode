function runProgram(input){
  input = input.split("");
  var count = 1;
  var output ="";
  
  //checking for every value of input
  for( var i=1; i<input.length; i++ ){
    var curr = input[i];
    var prev = input[i-1];
    
    //checking if previous element equalls to current element
    if( prev === curr ){
     count += 1; 
     //console.log(count);
    }
    //if previous element is not equalls to current element
    else{
     //if count is odd push previous element and modify count
     if( count%2 !== 0 ){
       output += prev;
       count = 1;
     }
     //if count is even just modify count
     else{
      count = 1;
     }
    }
    
    //if current element is last element, then push current element
    if( i === input.length -1 ){
     if( count%2 !== 0 ){
      output += curr; 
     }
    }    
  }
  
  if( output ){
   console.log(output); 
  }
  else{
   console.log("Empty String"); 
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