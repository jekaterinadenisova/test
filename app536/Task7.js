/**
 * Created by Екатерина on 02.06.2016.
 */
function countSymbols(string) {
    var arr = ["a","e","u","i","o"];
    var count = 0;
    var arrayOfString = string.split("");
    for(var i=0; i<string.length; i++){
        for(var j=0; j<string.length;j++)
            if(arrayOfString[i]==arr[j]){
                count++;
            }
    }
    console.log(count);
}

countSymbols("qwertyueeewq");