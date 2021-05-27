import React from 'react';
let currDate =new Date(2021,5,2,20);
let greeting='';
currDate=currDate.getHours();
const cssStyle={ };
if(currDate>=1 && currDate<12){
  greeting='Good Morning';
  cssStyle.color='green';
}
else if(currDate>=12 && currDate<19)
{
  greeting='Good Afternoon';
  cssStyle.color='orange';
}
else {
  greeting='Good Night';
  cssStyle.color='black';
}
function Heading() {
    return (
        <div>
           <h1>Hello Team, <span style={cssStyle}>{greeting}</span></h1>
        </div>
    )
}

export default Heading;