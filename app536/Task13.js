/**
 * Created by Екатерина on 02.06.2016.
 */


function factorOfNumber(n)
{
    var factorOfNum = [], i;

    for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
        if (n % i === 0)
        {
            factorOfNum.push(i);
            if (n / i !== i)
                factorOfNum.push(n / i);
        }
    factorOfNum.sort(function(x, y)
    {
        return x - y;});  
    return factorOfNum;
}
console.log(factorOfNumber(6));
console.log(factorOfNumber(9));
console.log(factorOfNumber(121));