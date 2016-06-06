/**
 * Created by Екатерина on 04.06.2016.
 */

$(document).ready(function () {
var listItems = $( 'li' );
var rawListItem = listItems[1]; // or listItems.get(0)
var html = rawListItem.innerHTML;
console.log(html);
});