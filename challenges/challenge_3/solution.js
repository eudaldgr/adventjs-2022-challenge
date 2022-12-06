function distributeGifts(packOfGifts, reindeers) {
  return Math.floor(
    reindeers.reduce((total, reindeer) =>
      total + (reindeer.length * 2), 0)
    /
    packOfGifts.reduce((total, gift) =>
        total + gift.length, 0));
}