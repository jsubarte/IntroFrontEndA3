const titleInput = document.getElementById("titulo");
const priceInput = document.getElementById("precio");
const descriptionInput = document.getElementById("descripcion");

const formInputs = [titleInput, priceInput, descriptionInput];

const addBtn = document.getElementById("btn-anadir");

const modal = new bootstrap.Modal(document.getElementById("modal-Prod"), {});

const productsRow = document.getElementById("row-productos");

const clearForm = () => {
  formInputs.forEach((item) => {
    item.value = "";
  });
};

const addProduct = () => {
  const col = document.createElement("article");
  col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "p-2");

  const card = document.createElement("div");
  card.classList.add("card");
  
  const image = document.createElement("img");
  image.classList.add("card-img-top");
  image.classList.add("img-thumbnail");
  image.src = "https://source.unsplash.com/random";

  const cardBody = document.createElement("section");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title")
  cardTitle.innerText = titleInput.value;

  const cardPrecio = document.createElement("p");
  cardPrecio.classList.add("card-prec");
  cardPrecio.innerText = "$ " + priceInput.value;

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card-text");
  cardDescription.innerText = descriptionInput.value;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardPrecio);
  cardBody.appendChild(cardDescription)
  card.appendChild(image);
  card.appendChild(cardBody);
  col.appendChild(card);

  productsRow.appendChild(col);
};

addBtn.addEventListener("click", () => {
  const result = validateForm();
  if (result) {
    addProduct();
    clearForm();
    modal.hide();
  }
});