var items =[ [1, 2, 3, 4],
   [ 5, 6, 7, 6],
    [7, 8 ,9 ,9],
    [2 ,4 ,1 ,3]
];
var sum =0;
var sum1 = 0;
for(var i=0;i<items.length;i++)
{
    var row= items[i];
    for(var j=0;j<row.length;j++)
    {
        if(i==j)
        sum +=items[i][j];
        //console.log(ele);
        var len = row.length;
        if ((i + j) == (len - 1))
        sum1 += items[i][j];
        
    }
}
console.log(sum-sum1);