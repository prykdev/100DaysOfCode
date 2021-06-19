
var sudoku = [[],[],[],[],[],[],[],[],[]]
function createGrid(){
var myContainer=document.getElementById('container')
    for(var i=0;i<9;i++)
    {
      for(var j=0;j<9;j++)
        {
            var myInput = document.createElement('input')
            myInput.id= `${i}${j}`
            var number = Math.ceil(Math.random()*9)
            myInput.value=number
            //issafe is a function which checks weathe a no is fetting repeted or not
            //fix repetition
            myInput.row=i
            myInput.col=j
            if(isSafe(sudoku,i,j,number)){
                //add the no to html
                myInput.value=number
                myInput.readOnly=true
            }
            else{
                //keep it empty
                number=0
                myInput.value=''
            }

            sudoku[i][j]=number

            //accept input using event listner
            myContainer.appendChild(myInput);
            myInput.oninput=function(e) {
                checkAnswer(sudoku ,e)
            }
        }
    }
   // console.log(sudoku)
}

//execute a function
createGrid()
//sudoko=grid
//isSafe(sudiku,i,j,number)
function isSafe(grid,row,col,num){

    for(var x=0;x<9;x++){
        //check for a row and inc column
        if(grid[row][x]==num){
            return false
        }
    }

    for(var y=0;y<9;y++){
        //check for a row and inc column

        if(grid[y][col]==num){
            return false
        }
    }
    //check for mini-grid /cell
    //end 8,8
    //[6,6] to [8,8]
    //3 elements
    var startRow = row - (row%3)
    var startCol = col - (col%3)
    for(var m=0;m<3;m++){
        for(n=0;n<3;n++){

            if(grid[m+startRow][n+startCol]==num){
                return false
            }

        }
    }

    return true
}
function checkAnswer(grid,e){
    //console.log(e,grid);
    var row = e.target.row
    var col = e.target.col
    var num = Number(e.data)
    var id = e.target.id
    if(num==''){
        return false
    }
    for(var x=0;x<9;x++){
        //check for a row and inc column
        if(grid[row][x]==num){
            showColors('red',id)
            return false
        }
    }
    for(var y=0;y<9;y++){
        //check for a row and inc column
        if(grid[y][col]==num){
            showColors('red',id)
            return false
        }
    }
    //check for mini-grid /cell
    //end 8,8
    //[6,6] to [8,8]
    //3 elements
    var startRow = row - (row%3)
    var startCol = col - (col%3)
    for(var m=0;m<3;m++){
        for(n=0;n<3;n++){

            if(grid[m+startRow][n+startCol]==num){
                showColors('red',id)
                return false
            }

        }
    }
    showColors('green',id)
    return true   
}

function showColors(color,id){
    var inp=document.getElementById(id)
    if(color=='red'){
        inp.style.backgroundColor='red'
    }
    else{
        inp.style.backgroundColor='green'
    }
}