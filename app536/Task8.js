/**
 * Created by Екатерина on 03.06.2016.
 */

function isSample(number)
{

    for(var i=2;i<=Math.sqrt(Math.abs(number));i++)
        if(number%i==0)
            return false;
    return true;
}

console.log(isSample(37));
