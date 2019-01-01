function canBuyTickSpeed() {
  return canBuyDimension(3) && !EternityChallenge(9).isRunning;
}

function getTickSpeedMultiplier() {
  if (InfinityChallenge(3).isRunning) return new Decimal(1);
  let galaxies = player.galaxies+player.replicanti.galaxies+player.dilation.freeGalaxies
  galaxies += Effects.sum(
    TimeStudy(132),
    TimeStudy(133),
    TimeStudy(225),
    TimeStudy(226),
    EternityChallenge(8).reward
  );
  if (galaxies < 3) {
      let baseMultiplier = 0.9;
      if (player.galaxies == 0) baseMultiplier = 0.89
      if (player.currentChallenge == "challenge6" || player.currentChallenge == "postc1") baseMultiplier = 0.93;
      let perGalaxy = 0.02 * Effects.product(
        InfinityUpgrade.galaxyBoost,
        BreakInfinityUpgrade.galaxyBoost,
        TimeStudy(212),
        Achievement(86),
        InfinityChallenge(5).reward
      );
      return new Decimal(Math.max(0.01, baseMultiplier - (galaxies * perGalaxy)));
  } else {
      let baseMultiplier = 0.8
      if (player.currentChallenge == "challenge6" || player.currentChallenge == "postc1") baseMultiplier = 0.83
      galaxies *= Effects.product(
        InfinityUpgrade.galaxyBoost,
        BreakInfinityUpgrade.galaxyBoost,
        TimeStudy(212),
        TimeStudy(232),
        Achievement(86),
        InfinityChallenge(5).reward
      );
      let perGalaxy = new Decimal(0.965)
      return perGalaxy.pow(galaxies-2).times(baseMultiplier);
  }
}

function buyTickSpeed() {
  if (!canBuyTickSpeed()) {
      return false;
  }

  if (!canAfford(player.tickSpeedCost)) {
      return false;
  }

  player.money = player.money.minus(player.tickSpeedCost);
  if (player.currentChallenge != "challenge5" && player.currentChallenge != "postc5") player.tickSpeedCost = player.tickSpeedCost.times(player.tickspeedMultiplier);
  else multiplySameCosts(player.tickSpeedCost)
  if (player.tickSpeedCost.gte(Number.MAX_VALUE)) player.tickspeedMultiplier = player.tickspeedMultiplier.times(player.tickSpeedMultDecrease);
  if (player.currentChallenge == "challenge2" || player.currentChallenge == "postc1") player.chall2Pow = 0
  player.tickspeed = player.tickspeed.times(getTickSpeedMultiplier());
  if (InfinityChallenge(3).isCompleted || InfinityChallenge(3).isRunning) player.postC3Reward = player.postC3Reward.times(1.05+(player.galaxies*0.005))
  postc8Mult = new Decimal(1)
  player.secretUnlocks.why++
  GameUI.update();
  return true;
}

function buyMaxTickSpeed() {
  if (!canBuyTickSpeed()) return false;
  let money = new Decimal(player.money);
  if (money.eq(0)) return false;
  const mult = getTickSpeedMultiplier();
  let tickSpeedCost = new Decimal(player.tickSpeedCost);
  let tickSpeedMultDecrease = player.tickSpeedMultDecrease;
  let tickspeedMultiplier = new Decimal(player.tickspeedMultiplier);
  let tickspeed = new Decimal(player.tickspeed);
  let postC3Reward = new Decimal(player.postC3Reward);
  function flushValues() {
    player.money.fromDecimal(money);
    player.tickSpeedCost.fromDecimal(tickSpeedCost);
    player.tickspeedMultiplier.fromDecimal(tickspeedMultiplier);
    player.tickspeed.fromDecimal(tickspeed);
    player.postC3Reward.fromDecimal(postC3Reward);
  }

  const currentChallenge = player.currentChallenge;
  const underIC3Effect = InfinityChallenge(3).isCompleted || InfinityChallenge(3).isRunning;
  if (currentChallenge === "challenge2" || currentChallenge === "postc1") {
    player.chall2Pow = 0;
  }
  if (currentChallenge === "challenge5" || currentChallenge === "postc5" || tickSpeedCost.lt(Number.MAX_VALUE) || tickSpeedMultDecrease > 2) {
    while (money.gt(tickSpeedCost) && (tickSpeedCost.lt(Number.MAX_VALUE) || tickSpeedMultDecrease > 2 || currentChallenge === "postc5")) {
      money = money.minus(tickSpeedCost);
      if (currentChallenge === "challenge5" || currentChallenge === "postc5") {
        multiplySameCosts(tickSpeedCost);
      }
      tickSpeedCost = tickSpeedCost.times(tickspeedMultiplier);
      if (tickSpeedCost.gte(Number.MAX_VALUE)) {
        tickspeedMultiplier = tickspeedMultiplier.times(tickSpeedMultDecrease);
      }
      tickspeed = tickspeed.times(mult);
      if (underIC3Effect) {
        postC3Reward = postC3Reward.times(1.05 + (player.galaxies * 0.005));
      }
      postc8Mult = new Decimal(1);
    }
  }
  if (tickSpeedCost.gte(Number.MAX_VALUE)) {
    const a = Math.log10(Math.sqrt(tickSpeedMultDecrease));
    const b = tickspeedMultiplier.dividedBy(Math.sqrt(tickSpeedMultDecrease)).log10();
    const c = tickSpeedCost.dividedBy(money).log10();
    const discriminant = Math.pow(b, 2) - (c * a * 4);
    if (discriminant < 0) {
      flushValues();
      return false;
    }
    const buying = Math.floor((Math.sqrt(Math.pow(b, 2) - (c * a * 4)) - b) / (2 * a)) + 1;
    if (buying <= 0) {
      flushValues();
      return false;
    }
    tickspeed = tickspeed.times(Decimal.pow(mult, buying));
    if (underIC3Effect) {
      postC3Reward = postC3Reward.times(Decimal.pow(1.05 + (player.galaxies * 0.005), buying))
    }
    increaseTickSpeedCost(buying - 1);
    money = money.minus(tickSpeedCost).max(0);
    tickSpeedCost = tickSpeedCost.times(tickspeedMultiplier);
    tickspeedMultiplier = tickspeedMultiplier.times(tickSpeedMultDecrease);

    function increaseTickSpeedCost(n) {
      // Unoptimized version
      // for (var i = 0; i < n; i++) {
      //    cost *= mult;
      //    mult *= multDec;
      // }
      const multDec = new Decimal(tickSpeedMultDecrease);
      tickSpeedCost = tickSpeedCost.times(tickspeedMultiplier.pow(n)).times(multDec.pow(n * (n - 1) / 2));
      tickspeedMultiplier = tickspeedMultiplier.times(multDec.pow(n));
    }
  }

  flushValues();
}

function resetTickspeed() {
    player.tickSpeedCost = new Decimal(1000);
    player.tickspeedMultiplier = new Decimal(10);
    let tickspeed = new Decimal(1000)
      .timesEffectsOf(
        Achievement(36),
        Achievement(45),
        Achievement(66),
        Achievement(83)
      );
    tickspeed = tickspeed.times(Decimal.pow(getTickSpeedMultiplier(), player.totalTickGained));
    player.tickspeed = tickspeed;
}

const Tickspeed = {
  get isUnlocked() {
    return player.secondAmount.gt(0) || player.eternities >= 30;
  },
  get multiplier() {
    return getTickSpeedMultiplier();
  }
};