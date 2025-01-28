const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const addItemBtn = document.getElementById("add-item-btn");
const clrListBtn = document.getElementById("clr-list-btn");

// let key = 0;

itemInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    let index = setItemInLocalStorage(itemInput.value);
    // console.log(index);
    addItemToList(index);
  }
});

addItemBtn.addEventListener("click", (event) => {
  addItemToList();
});

// itemList.addEventListener("dragstart")

/**
 *
 */
function addItemToList(index) {
  const inputValue = itemInput.value.trim();
  if (inputValue !== "") {
    createListItem(inputValue, index);
    // let listItem = document.createElement("li");
    // let span = document.createElement("span");
    // let deleteItemButton = document.createElement("button");

    // listItem.setAttribute("class", "list-item");
    // span.setAttribute("class", "list-item-text");
    // deleteItemButton.setAttribute("onclick", "deleteItem(this)");

    // //innerHTML can leichter gehackt werden als innerCOntent or innerText?!
    // //   listItem.textContent = inputValue;
    // span.innerText = inputValue;
    // deleteItemButton.innerHTML = "X";

    // listItem.appendChild(span);
    // listItem.appendChild(deleteItemButton);
    // itemList.appendChild(listItem);
    itemInput.value = "";
  } else {
    alert("Please enter a valid item.");
  }
}

clrListBtn.addEventListener("click", (event) => {
  clearList();
});

/**
 *
 * @param {*} button
 */
function deleteItem(button) {
  const listItem = button.parentElement;
  removeListItem(listItem);
  // listItem.remove();
}

/**
 *
 */
function clearList() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

function createListItem(inputValue, index) {
  let listItem = document.createElement("li");
  let span = document.createElement("span");
  let deleteItemButton = document.createElement("button");

  // let attributes = {class: "list"}

  listItem.setAttribute("class", "list-item");
  listItem.dataset.index = index;
  listItem.setAttribute("draggable", "true");
  span.setAttribute("class", "list-item-text");
  deleteItemButton.setAttribute("onclick", "deleteItem(this)");

  //innerHTML can leichter gehackt werden als innerCOntent or innerText?!
  //   listItem.textContent = inputValue;
  span.innerText = inputValue;
  deleteItemButton.innerHTML = "X";

  listItem.appendChild(span);
  listItem.appendChild(deleteItemButton);
  itemList.appendChild(listItem);
}

//TODO: set a jest test with mocking the localStorage Objekt.prototype
function setItemInLocalStorage(value) {
  try {
    const taskItems = JSON.parse(localStorage.getItem("taskItems")) || [];
    taskItems.push(value);
    localStorage.setItem("taskItems", JSON.stringify(taskItems));
    //TODO: wenn der Wert mehrfach vorkommt, wird der Index des ersten Aufkommens zurückgegebn. Das ist ein Problem.
    // return taskItems.indexOf(value);
    return taskItems.length - 1;
  } catch {
    alert("Item was not added to local storage!");
  }
}

function loadItemsFromLocalStorage() {
  try {
    const taskItems = JSON.parse(localStorage.getItem("taskItems"));
    taskItems.forEach((taskItem, index) => {
      createListItem(taskItem, index);
      // const li = document.createElement("li");

      // li.textContent = taskItem;
      // li.dataset.index = index;
      // // li.addEventListener("click", () => removeTask(index)); // Add click event to remove task
      // itemList.appendChild(li);
    });
  } catch {
    alert("loading tasks was not successful!");
  }
}

function removeListItem(listItem) {
  const localStorageItems = JSON.parse(localStorage.getItem("taskItems"));

  localStorageItems.splice(listItem.dataset.index, 1);
  localStorage.setItem("taskItems", JSON.stringify(localStorageItems));

  itemList.childNodes[listItem.dataset.index].remove();

  // console.log(itemList);

  for (
    i = listItem.dataset.index;
    i < itemList.getElementsByTagName("li").length;
    i++
  ) {
    // console.log(itemList.getElementsByTagName("li").length);
    // itemList.childNodes[i].dataset.index = i;
    // console.log(itemList.childNodes[i].dataset.index);
    console.log(i);
  }
}

if (localStorage.getItem("taskItems") !== null) loadItemsFromLocalStorage();
