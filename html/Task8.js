/**
 * Created by Екатерина on 04.06.2016.
 */

$(document).ready(function () {
$( 'li' ).each(function( index, elem ) {
    $( elem ).prepend( '<b>' + index + ': </b>' ); });
});