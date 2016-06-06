/**
 * Created by Екатерина on 02.06.2016.
 */

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],8));

function binarySearch(arr,value)
{

    var index   =   Math.floor(arr.length/2);

    if(arr[0] == value)
        return arr[0];
    if(arr[arr.length-1] == value)
        return arr[arr.length-1];

    if(arr[index] === value)
        return arr[index];

    if(arr[index]>value)
    {
        var buff = arr;
        arr = [];
        for(var i = 0;i<index+1;i++)
            arr[i] = buff[i];
        return binarySearch(arr,value);
    }
    else {
        var buff = arr;
        arr = [];
        for(var i = index+1;i<buff.length;i++)
            arr[i-index-1] = buff[i];
        return binarySearch(arr,value);
    }


}