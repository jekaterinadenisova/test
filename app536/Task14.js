/**
 * Created by Екатерина on 02.06.2016.
 */

  function amountToCoins(count, coins)
  {
    if (count === 0) {
        return [];
    }
    else {
        if (count >= coins[0]) {
            left = (count - coins[0]);
            return [coins[0]].concat( amountToCoins(left, coins) );
        }
        else {
            coins.shift();
            return amountToCoins(count, coins);
        }
    }
  }

  console.log(amountToCoins(78, [25, 10, 5, 2,1]));
  console.log(amountToCoins(213,[25,10,5,2,1]));