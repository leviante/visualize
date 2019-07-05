//Calculate body height and change #modal height to that value when page loads
window.onload = () => {
  putBodyHeight("#modal");
};

//Change modal height when page is resized
window.addEventListener("resize", () => {
  putBodyHeight("#modal");
});
//When clicked on cards, open modal
//1. attach show class to modal that makes
/*
 display:block
 background-color: rgba(0,0,0,0.8);
 include transition
*/

const cards = document.querySelectorAll(".card");

cards.forEach(card =>
  card.addEventListener("click", e => {
    console.log("clicked");
    toggleModal();
    toggleContentBlur();
    renderPopup(e);
  })
);

const modal = document.querySelector("#modal");

//close modal when clicked anywhere inside it
modal.addEventListener("click", () => {
  toggleModal();
  toggleContentBlur();
  resetPopup();
});
