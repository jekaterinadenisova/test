/**
 * Created by Екатерина on 02.06.2016.
 */

var msg=new String();
var countryArr=new Array();
maxWord="";

msg='"Belarus", "USA","Russia" ';
function FinTheLongestWord(){
    countryArr=msg.split(",");
    for (var i=0 in countryArr)
    {
        if (countryArr[i].length>maxWord.length)
        {
            maxWord=countryArr[i];
        }
    }
    console.log("The longest country is : "+maxWord);
}
FinTheLongestWord();
