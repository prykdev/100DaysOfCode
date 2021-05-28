function runProgram(input){
input = input.split("\n");

var start = 0;

var max = Number.MIN_SAFE_INTEGER;

while( start <input.length){

    var dim = input[start++].split(" ").map(Number);
    var row = dim[0];
    var col = dim[1];
    var oneDimArr = input.slice(start,row+start);
    start = start+row;
    var twoDimArr = [];
    for(var i=0;i<oneDimArr.length;i++){
     twoDimArr.push(oneDimArr[i].split(" ").map(Number));
    }
   var sum= sumMat(twoDimArr);
   if(sum>max)
   {
       max = sum;
   }

}
console.log(max);

}

function sumMat(mat){
    var sum =0;
    for(var i=0;i<mat.length;i++){
        for(var j=0;j<mat[i].length;j++)
        {
            sum += mat[i][j];
        }
    }
    return sum;
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