function calcEarning(N, R, heightOfBuilding){
  var countBuild = 1;
  var prevGreater = 0;
  var index = 0;        // 0-N
  for( var i=1; i<N; i++ ){
    //Comparing if height of (current building > previous building)
    var curr = heightOfBuilding[i],
    prev = heightOfBuilding[i-1];
    if( curr>prev && index===0 || curr>prevGreater && index>0 ){
      countBuild += 1;
      prevGreater = curr;
    }
    else if( curr<prev && index===0 ){
      prevGreater = prev;
    }
    
    index += 1;
  }
  var output = R * countBuild;
  return output;
}

function runProgram(input){
  //Converting input into a array with split method
  input = input.split("\n");
  var S = Number(input[0]);       //Number of  Streets
  
  var pos = 1;
  for( var i = 0; i < S; i++){
    //Getting => Number of buildings & Rupee earned from each
    var buildandrupee = input[pos].split(" ").map(Number);
    var N = buildandrupee[0],       
    R = buildandrupee[1];      
  
    //Getting => Height of buildings
    var heightOfBuilding = input[pos+1].split(" ").map(Number);
  
    var rupeeEarned = calcEarning(N, R, heightOfBuilding);
    console.log(rupeeEarned);
  
    pos += 2;
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