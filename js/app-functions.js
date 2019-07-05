const putBodyHeight = section => {
  const bodyHeight = document.body.scrollHeight;
  //console.log(bodyHeight);
  const element = document.querySelector(section);
  //console.log(element.style.height);
  element.style.height = `${bodyHeight}px`;
};

//Open modal
const toggleModal = () => {
  const modal = document.querySelector("#modal");
  modal.classList.toggle("show");
};

//Blur content behind the modal when modal is opened
const toggleContentBlur = () => {
  const main = document.querySelector("#main");
  const footer = document.querySelector("#main-footer");

  main.classList.toggle("blur");
  footer.classList.toggle("blur");
};

//renderPopup();
//get clicked img source
//add that to popup img source with "-extended" tag
// calculate img height and add to div

const renderPopup = event => {
  const src = event.target.getAttribute("src"); //img/02.jpg
  const imgName = src.split("/")[1].split(".")[0]; // 02
  const popupImgName = `img/${imgName}-expanded.jpg`; // img/02-expanded.jpg

  //grab popup img element and set attribute to src
  const popupImg = document.querySelector(".popup img");
  popupImg.setAttribute("src", popupImgName);

  //add img-show class to img to change opacity gradually
  popupImg.classList.add("img-show");

  //calculate img width and set it to popup height
  const popupImgCSS = window.getComputedStyle(popupImg);
  const popup = document.querySelector(".popup");

  imgWidthValue = popupImgCSS.getPropertyValue("width").split("px")[0];
  popup.style.maxWidth = `${imgWidthValue * 0.75}px`;

  //make exit btn appear
  const popupBtn = document.querySelector(".popup i");
  popupBtn.classList.toggle("show");
};

//reset popup properties
const resetPopup = () => {
  const popup = document.querySelector(".popup");
  popup.style.maxWidth = "";

  const popupBtn = document.querySelector(".popup i");
  popupBtn.classList.toggle("show");
};
