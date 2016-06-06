/**
 * Created by Екатерина on 02.06.2016.
 */

function Char_Counts(string) {
    var uchars = {};
    string.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
    return uchars;
}
console.log(Char_Counts("абббвггдеёжзийклмнопрстуфхцчшщъьэюя"));