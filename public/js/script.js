const attachmentIcon = document.querySelector(".attachment-container");
const removeIcon = document.querySelector(".remove-icon");
const modalContainer = document.querySelector(".modal-container");

attachmentIcon.addEventListener("click", () => {
  console.log("button clicekd");
  modalContainer.style.display = "block";
});
removeIcon.addEventListener("click", () => {
  modalContainer.style.display = "none";
});
