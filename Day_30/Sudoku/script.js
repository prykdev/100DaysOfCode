var myContainer=document.getElementById('container')
    
for(var i=0;i<9;i++){
 for(var j=0;j<9;j++)
 {
     var myInput = document.createElement('input')
     myInput.id= '${i}${j}'
     var number = Math.ceil(Math.random()*9)
     myInput.value=number
     myContainer.appendChild(myInput)

}
}
