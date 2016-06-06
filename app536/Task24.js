/**
 * Created by Екатерина on 02.06.2016.
 */

var numbers = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

function SortOfArrayMaxToMin() {

    for (var j = 0, len = numbers.length - 1; j < len; j++) {
        var swapped = false;
        var i = 0;
        while (i < len) {
            if (numbers[i] < numbers[i + 1]) {
                var c = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = c;
            }
            i++;
        }
    }
    console.log(numbers);
}

function SortOfArrayMinToMax() {

    for (var j = 0, len = numbers.length - 1; j < len; j++) {
        var swapped = false;
        var i = 0;
        while (i < len) {
            if (numbers[i] > numbers[i + 1]) {
                var c = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = c;
            }
            i++;
        }
    }
    console.log(numbers);
}

SortOfArrayMaxToMin();
SortOfArrayMinToMax();