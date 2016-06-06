/**
 * Created by Екатерина on 02.06.2016.
 */
var msg=new String();
var wordArr=new Array();
maxWord="";

msg='Web Development Tutorial ';
function FinTheLongestWord(){
    wordArr=msg.split(" ");
    for (var i=0 in wordArr)
    {
        if (wordArr[i].length>maxWord.length)
        {
            maxWord=wordArr[i];
        }
    }
    console.log("The longest word is : "+maxWord);
}
FinTheLongestWord();
