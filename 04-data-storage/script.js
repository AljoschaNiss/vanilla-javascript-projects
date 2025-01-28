//TODO: change inputKEy tokeyInput and input-key to key-input.
const inputKey = document.getElementById("input-key");
const inputValue = document.getElementById("input-value");
const inputs = document.querySelectorAll("input");

const keyError = document.getElementById("key-error");

const btnLocalStorageAdd = document.getElementById("btn-local-storage-add");
const btnLocalStorageRemove = document.getElementById("btn-local-storage-rm");
const btnLocalStorageClear = document.getElementById("btn-local-storage-clr");

const btnSessionStorage = document.getElementById("btn-session-storage-add");

// LOCAL STORAGE
btnLocalStorageAdd.addEventListener("click", (event) => {
  try {
    validateInput(btnLocalStorageAdd.getAttribute("id"));
    if (inputKey.required && inputValue.required) {
      localStorage.setItem(inputKey.value, inputValue.value);
      // event.preventDefault();
    }
  } catch {
    window.alert("storing the item was not successful!");
  }
});

btnLocalStorageRemove.addEventListener("click", (event) => {
  try {
    validateInput(btnLocalStorageRemove.getAttribute("id"));
    localStorage.removeItem(inputKey.value);
  } catch {
    window.alert("removing the item was not successful!");
  }
});

btnLocalStorageClear.addEventListener("click", (event) => {
  try {
    localStorage.clear();
  } catch (error) {
    window.alert("clearing storage was not successful!");
  }
});

// SESSION STORAGE
btnSessionStorage.addEventListener("click", (event) => {
  try {
    sessionStorage.setItem();
  } catch (error) {
    window.alert("storing the item was not successful!");
  }
});

// INPUT VALIDATION
inputs.forEach((elem) => {
  if (elem.validity.valid) {
    //elem.validity.valueMissing
    keyError.textContent = "Valid Key Input";
    keyError.classList.remove("error");
    keyError.classList.add("success");
  }
});

// input.preventDefault

function validateInput(btnAttrParameter) {
  switch (btnAttrParameter) {
    case "btn-local-storage-add":
      inputs.forEach((elem) => (elem.required = true));
      // if (!inputKey.value.trim() || !inputValue.value.trim()) {
      //   window.alert("wrong input");
      //   return false;
      // } else {
      //   return true;
      // }
      break;
    case "btn-local-storage-rm":
      inputKey.required = true;
      inputValue.required = false;
    case "btn-local-storage-clr":
      inputKey.required = true;
      inputValue.required = false;
    default:
      break;
  }
}
