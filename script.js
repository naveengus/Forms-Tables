const form = document.getElementById("myForm");
const tableBody = document.getElementById("tableBody");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = form.elements["firstName"].value;
  const lastName = form.elements["lastName"].value;
  const address = form.elements["address"].value;
  const pincode = form.elements["pincode"].value;
  const gender = form.elements["gender"].value;
  const foodInputs = form.querySelectorAll('input[name="food"]:checked');
  const food = Array.from(foodInputs)
    .map((input) => input.value)
    .join(", ");
  const state = form.elements["state"].value;
  const country = form.elements["country"].value;

  const newRow = tableBody.insertRow();
  newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${food}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;
  tableBody.appendChild(newRow);

  form.reset();
});

// function test() {
//   const firstNameInput = document.getElementById("firstName");
//   const lastNameInput = document.getElementById("lastName");
//   const addressInput = document.getElementById("address");
//   const pincodeInput = document.getElementById("pincode");
//   const genderInput = document.getElementById("gender");
//   const foodInputs = form.querySelectorAll("input[name='food']");
//   const stateInput = document.getElementById("state");
//   const countryInput = document.getElementById("country");

//   firstNameInput.value = "sachin";
//   lastNameInput.value = "Doe";
//   addressInput.value = "123 Main St";
//   pincodeInput.value = "12345";
//   genderInput.value = "male";
//   foodInputs[0].checked = true;
//   foodInputs[1].checked = true;
//   stateInput.value = "California";
//   countryInput.value = "USA";

//   form.dispatchEvent(new Event("submit"));
// }

// test();
