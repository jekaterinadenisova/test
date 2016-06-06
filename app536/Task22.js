/**
 * Created by Екатерина on 02.06.2016.
 */

function countOfSymbols(str, next)
{
    var count = 0;
    for (var position = 0; position < str.length; position++)
    {
        if (str.charAt(position) == next)
        {
            count += 1;
        }
    }
    return count;
}

console.log(countOfSymbols('мама мыла раму', 'а'));