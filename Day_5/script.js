const calculateTemp=()=>{
    const tempval = document.getElementById('temp').value
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp =temp_diff.options[tempSelected.selectedIndex].value;
    const celtofah=(cel)=>{
        let fahrenheit=Math.round((cel * 9/5)+32);
        return fahrenheit;
    }
    const fahtocel=(fehr)=>{
        let celsius =Math.round((fehr -32 )* 5/9);
        return celsius;
    }

    let result ;
    if(valueTemp =='cel'){
        result= celtofah(tempval);
        document.getElementById('resultContainer').innerHTML=`=${result}°Celcius`;
    }
    else{
        result= fahtocel(tempval);
        document.getElementById('resultContainer').innerHTML=`=${result}°Fahrenheit`;
    }
}

