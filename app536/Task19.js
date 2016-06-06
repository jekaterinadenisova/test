/**
 * Created by Екатерина on 02.06.2016.
 */

console.log(getElementsLargerThanNumber([1,2,3,4,5,6,7,8,9,10,11,12,13,14],2));

function getElementsLargerThanNumber(arr,value)
{

    var result = [];
    var index = 0;

    for(var i = 0;i<arr.length;i++)
        if(arr[i]>value)
            result[index++] = arr[i];

    return result;
}