const ulist = document.querySelector("ul");
const content = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const butcontent = content.value;
  content.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = butcontent;
  listItem.appendChild(listBtn);
  listBtn.textContent = "Delete";
  list.appendChild(listItem);

  listBtn.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  content.focus();
});

content.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const butcontent = content.value;
    content.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = butcontent;
    listItem.appendChild(listBtn);
    listBtn.textContent = "Delete";
    list.appendChild(listItem);

    listBtn.addEventListener("click", () => {
      list.removeChild(listItem);
    });

    content.focus();
  }
});
