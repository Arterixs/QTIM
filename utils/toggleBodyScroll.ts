export const toggleBodyScroll = (flag: boolean) => {
  if (flag) {
    document.body.classList.add('body_no-scroll');
  } else {
    document.body.classList.remove('body_no-scroll');
  }
};
