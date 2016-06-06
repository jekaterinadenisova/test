/**
 * Created by Екатерина on 02.06.2016.
 */


  function exp(b,n)
  {
    var num = 1;
    for (var i =1; i <= n; i++)
    {
        num = b * num;
    }
    return num;
  }
  console.log(exp(2, 3));
  console.log(exp(4, 4));
  console.log(exp(3, 4));
