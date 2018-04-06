var Yatzy = function (d1, d2, d3, d4, d5) {
  this.dice = [];
  this.dice[0] = d1;
  this.dice[1] = d2;
  this.dice[2] = d3;
  this.dice[3] = d4;
  this.dice[4] = d5;

  this.ones = function (d1, d2, d3, d4, d5) {
    return this.sumOf(1);

  }

  this.twos = function (d1, d2, d3, d4, d5) {
    return this.sumOf(2);

  }

  this.threes = function (d1, d2, d3, d4, d5) {
    return this.sumOf(3);

  }
  this.fours = function () {
    return this.sumOf(4);
  }

  this.fives = function () {
    return this.sumOf(5);

  }

  this.sixes = function () {
    return this.sumOf(6);
  }

  this.chance = function () {
    return this.sumArray(this.dice);
  }

  this.yatzy = function () {
    for (var i = 0, k = this.dice.length -1 ; i < k ; i++) {
      if ( this.dice[i] !== this.dice[i+1] ) {
        return 0
      }
    }
    return 50;

  }

  this.one_pair = function () {
    return this.kind_of(2);
  }

  this.three_of_a_kind = function () {
    return this.kind_of(3);
  }

  this.four_of_a_kind = function (_1, _2, d3, d4, d5) {
   return this.kind_of(4);
  }

  this.kind_of = function(what) {
    var matches = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0};
    this.dice.forEach(dice => {
      matches[dice]++;
    })

    var foundPairOn = 0;
    Object.keys(matches).reverse().some(match => {
      if ( matches[match] >= what ) {
        return foundPairOn = match;
      }
    })
    return foundPairOn * what;
  }

  this.sumOf = function(value) {
    return this.sumArray(this.dice.filter((dice => dice == value)))
  }

  this.sumArray = function (array) {
    return array.reduce((acc, val) => acc + val, 0);
  }
}









Yatzy.two_pair = function (d1, d2, d3, d4, d5) {
  var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  counts[d1 - 1]++;
  counts[d2 - 1]++
  counts[d3 - 1]++
  counts[d4 - 1]++;
  counts[d5 - 1]++;
  var n = 0;
  var score = 0;
  for (i = 0; i < 6; i += 1)
    if (counts[6 - i - 1] >= 2) {
      n++;
      score += (6 - i);
    }
  if (n == 2)
    return score * 2;
  else
    return 0;
}





Yatzy.smallStraight = function (d1, d2, d3, d4, d5) {
  var tallies;
  tallies = [0, 0, 0, 0, 0, 0, 0]
  tallies[d1 - 1] += 1;
  tallies[d2 - 1] += 1;
  tallies[d3 - 1] += 1;
  tallies[d4 - 1] += 1;
  tallies[d5 - 1] += 1;
  if (tallies[0] == 1 &&
    tallies[1] == 1 &&
    tallies[2] == 1 &&
    tallies[3] == 1 &&
    tallies[4] == 1)
    return 15;
  return 0;
}

Yatzy.largeStraight = function (d1, d2, d3, d4, d5) {
  var tallies;
  tallies = [0, 0, 0, 0, 0, 0, 0, 0];
  tallies[d1 - 1] += 1;
  tallies[d2 - 1] += 1;
  tallies[d3 - 1] += 1;
  tallies[d4 - 1] += 1;
  tallies[d5 - 1] += 1;
  if (tallies[1] == 1 &&
    tallies[2] == 1 &&
    tallies[3] == 1 &&
    tallies[4] == 1
    && tallies[5] == 1)
    return 20;
  return 0;
}

Yatzy.fullHouse = function (d1, d2, d3, d4, d5) {
  var tallies;
  var _2 = false;
  var i;
  var _2_at = 0;
  var _3 = false;
  var _3_at = 0;


  tallies = [0, 0, 0, 0, 0, 0, 0, 0];
  tallies[d1 - 1] += 1;
  tallies[d2 - 1] += 1;
  tallies[d3 - 1] += 1;
  tallies[d4 - 1] += 1;
  tallies[d5 - 1] += 1;

  for (i = 0; i != 6; i += 1)
    if (tallies[i] == 2) {
      _2 = true;
      _2_at = i + 1;
    }

  for (i = 0; i != 6; i += 1)
    if (tallies[i] == 3) {
      _3 = true;
      _3_at = i + 1;
    }

  if (_2 && _3)
    return _2_at * 2 + _3_at * 3;
  else
    return 0;
}

module.exports = Yatzy;


