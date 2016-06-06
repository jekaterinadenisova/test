/**
 * Created by Екатерина on 02.06.2016.
 */

function IsPalindrome(str){
       var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
       var count = 0;
        if ((cstr.length) % 2 === 0) {
             count = (cstr.length) / 2;
           } else {

                if (cstr.length === 1) {
                        console.log("Entry is a palindrome.");
                       return true;
                   } else {

                        count = (cstr.length - 1) / 2;
                    }
            }

         for (var x = 0; x < count; x++) {

               if (cstr[x] != cstr.slice(-1-x)[0]) {
                        console.log("Entry is not a palindrome.");
                        return false;
                    }
            }
        console.log("The entry is a palindrome.");
       return true;
}
IsPalindrome('madam');
IsPalindrome('nurses run');
IsPalindrome('fox');
IsPalindrome('потоп');

