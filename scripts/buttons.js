// set the button heights

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  const width = button.offsetWidth;
  button.style.height = width + "px";
});
