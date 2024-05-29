export const sliderFunction = (button, currentItem, itemsArray) => {
  let activeItem = 0;
  if (button == "prev") {
    if (currentItem > 0) {
      activeItem = currentItem - 1;
    } else {
      activeItem = itemsArray.length - 1;
    }
  } else if (button == "next") {
    if (currentItem < itemsArray.length - 1) {
      activeItem = currentItem + 1;
    } else {
      activeItem = 0;
    }
  }

  return activeItem;
};
