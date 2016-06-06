/**
 * Created by Екатерина on 02.06.2016.
 */

console.log(getTheLongestPalindrome('HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE'));

function getTheLongestPalindrome(line)
{

    var arrPalinoms = [];
    for(var i = 0;i<line.length;i++)
    {
        var buffLine = line[i];
        for(var j = i+1;j<line.length;j++)
        {
            buffLine+=line[j];
            if(isPolimon(buffLine))
                arrPalinoms.push(buffLine);
        }

    }

    var maxLength = arrPalinoms[0].length;
    var result = arrPalinoms[0];

    for(var i = 1;i<arrPalinoms.length;i++)
        if(maxLength < arrPalinoms[i].length)
        {
            maxLength = arrPalinoms[i].length;
            result = arrPalinoms[i]
        }
    return result;
}


function isPolimon(line)
{
    return line === line.split('').reverse().join('');
}