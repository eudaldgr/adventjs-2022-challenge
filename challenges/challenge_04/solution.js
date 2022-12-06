function fitsInOneBox(boxes) {
  boxes.sort((a, b) => (a.l * a.w * a.h) - (b.l * b.w * b.h));

  return boxes.every((currentBox, i) => {
    if(i < boxes.length - 1) {
      let nextBox = boxes[i + 1];
      return currentBox.l < nextBox.l && currentBox.w < nextBox.w && currentBox.h < nextBox.h;
    }
    return true;
  });
}