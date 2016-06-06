/**
 * Created by Екатерина on 02.06.2016.
 */

function Matrix(n) {

    var i;
    var j;
    for (i=0; i<n; i++)
    {
        for (j=0; j<n; j++)
        {
            if (i === j)
            {
                console.log(' 1 ');
            }
            else
            {
                console.log(' 0 ');}
        }
        console.log('----------');
    }
}
 Matrix(4);