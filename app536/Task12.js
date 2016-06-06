/**
 * Created by Екатерина on 02.06.2016.
 */

function aNumberIsPerfect(number)
{
    var temp = 0;
    for(var i=1;i<=number/2;i++){
        if(number%i === 0){
            temp += i;
        }
    }
    if(temp === number && temp !== 0) {
        console.log("It is a perfect number.");
    }
    else {
        console.log("It is not a perfect number.");
    }
}
aNumberIsPerfect(28);
aNumberIsPerfect(0);
aNumberIsPerfect(6);
