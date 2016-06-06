/**
 * Created by Екатерина on 02.06.2016.
 */

function AcceptsAnArgumentAndReturnsTypes(str){

    return typeof str == "function" ? "object" : typeof str;
}
console.log(AcceptsAnArgumentAndReturnsTypes([]));
console.log(AcceptsAnArgumentAndReturnsTypes('jksnd'));
console.log(AcceptsAnArgumentAndReturnsTypes(true));
