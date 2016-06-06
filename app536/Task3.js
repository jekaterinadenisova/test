/**
 * Created by Екатерина on 02.06.2016.
 */

console.log(getCombinationLine('date'));

function getCombinationLine(line) {
    var result = '';

    for(var i=0;i<line.length;i++)
    {
        var combinationLine = '';
        for(var j = i;j<line.length;j++)
        {
            combinationLine+=line[j];
            result += combinationLine + ', ';
        }
    }

    return result.substring(0,result.length-2);
}

