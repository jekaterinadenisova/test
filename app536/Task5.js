/**
 * Created by Екатерина on 02.06.2016.
 */

function convertsTheFirstLetter(line) {

    var arrWord = line.trim().split(' ');

    for(var i=0;i<arrWord.length;i++)
        arrWord[i] = (arrWord[i])[0].toUpperCase()+arrWord[i].substring(1,arrWord[i].length);

    return arrWord.join(' ');
}

console.log(convertsTheFirstLetter("the quick brown fox"));
