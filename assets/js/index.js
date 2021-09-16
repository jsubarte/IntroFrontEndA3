const titleInput = document.getElementById("titulo");
const priceInput = document.getElementById("precio");
const descriptionInput = document.getElementById("descripcion");

const formInputs = [titleInput, priceInput, descriptionInput];

const addBtn = document.getElementById("btn-anadir");

const clearForm = () => {
  formInputs.forEach((item) => {
    item.value = "";
  });
};

const modal = new bootstrap.Modal(document.getElementById("modal-Prod"), {});

addBtn.addEventListener("click", () => {
  const result = validateForm();
  if (result) {
    clearForm();
    modal.hide();
  }
});