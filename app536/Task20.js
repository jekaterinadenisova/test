/**
 * Created by Екатерина on 02.06.2016.
 */



  function makeid(l)
  {
    var text = "";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i=0; i < l; i++ )
    {
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
    }
  function getRandomInt(min, max)
  {
    min = 0;
    max = 60;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log(makeid(getRandomInt()));


