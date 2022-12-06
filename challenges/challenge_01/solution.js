function wrapping(gifts) {
  let wrappedGifts = [];

  for (let gift of gifts) {
    let wrapped = '*'.repeat(gift.length + 2) + '\n';
    wrapped += `*${gift}*` + '\n';
    wrapped += '*'.repeat(gift.length + 2);

    wrappedGifts.push(wrapped);
  }

  return wrappedGifts;
}