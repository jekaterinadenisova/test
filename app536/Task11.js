/**
 * Created by Екатерина on 02.06.2016.
 */

function MinAndMax(arr_num)
{
    arr_num.sort(function(x,y)
    {
        return x-y;
    });
    var uniqa = [arr_num[0]];
    var result = [];

    for(var j=1; j<arr_num.length; j++)
    {
        if(arr_num[j-1] !== arr_num[j])
        {
            uniqa.push(arr_num[j]);
        }
    }

    result.push(uniqa[1],uniqa[uniqa.length-2]);

    return result.join(',');
}

console.log(MinAndMax([1,2,6,4,5]));