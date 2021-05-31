function ans(contnum,countchar){
    if(contnum>0 && countchar>0)
    console.log("alphanumeric");
  else if(contnum>0)
    console.log("numbers");
  else
    console.log("chars");
}




function runProgram(input){
  input = input.split("\n");
  var N = Number(input[0]);
  var str= input[1].split("");
  var contnum=0;
  var countchar=0;
  for(var i=0;i<N;i++)
  {
    if(Number(str[i])){
      contnum++;
    }
    else if(str[i]==="0"){
            contnum++;
    }
    else{
      countchar++;
    }
  }
ans(contnum,countchar);
 //console.log(input,T);
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