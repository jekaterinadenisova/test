/**
 * Created by Екатерина on 02.06.2016.
 */


console.log(getStringWithoutRepeatingCharacters("example.com"));
console.log(getStringWithoutRepeatingCharacters("google.com"));

function getStringWithoutRepeatingCharacters(line)
{
    var arrStringWithoutRepeating = [];
    var buffLine = '';
    for(var i = 0;i<line.length;i++)
    {
        for(var j = 0;j<buffLine.length;j++)
        {
            if(buffLine[j] === line[i])
            {
                arrStringWithoutRepeating.push(buffLine);
                buffLine = buffLine.substr(j+1,buffLine.length-j);
            }
        }
        buffLine +=line[i];
    }

    arrStringWithoutRepeating.push(buffLine);
    var result = arrStringWithoutRepeating[0];
    var maxLength = arrStringWithoutRepeating[0].length;

    for(var i = 0;i<arrStringWithoutRepeating.length;i++)
        if(maxLength < arrStringWithoutRepeating[i].length)
        {
            maxLength = arrStringWithoutRepeating[i].length;
            result = arrStringWithoutRepeating[i];
        }

    return result;
}