const inputName = document.querySelector("#firstname");
const inputSurname = document.querySelector("#lastname");
const inputAge = document.querySelector("#age");
const createBtn = document.querySelector(".create-btn");
const select = document.querySelector("#status");
const tab = document.querySelector(".table");

createBtn.addEventListener("click", () => {
  const user=
  {
      "name": inputName.value,
      "surname": inputSurname.value,
      "age": inputAge.value,
       "status": select.value,
  }
    
    fetch("https://6363b35237f2167d6f80918f.mockapi.io/Users",{
        method: "POST",
        headers: {
           "Content-Type": "application/json",
        },
    body: JSON.stringify(user),
    }).then(() => {
        tabShow()
    });

    tab.classList.remove("d-none");
     
})
function tabShow() {
    tab.innerHTML = "";
      tab.innerHTML += '<thead><th>' + "Name" + '</th><th>' + "Surname" + '</th><th>' + "Age" + '</th><th>' + "Status" + '</th></thead>';
   const fetched = fetch("https://6363b35237f2167d6f80918f.mockapi.io/Users");
    fetched.then((response) => response.json()).then((user) => {
        user.forEach((user) => {
    tab.innerHTML += '<tr scope="row" table-dark><td>' + user.name + '</td><td>' + user.surname + '</td><td>' + user.age + '</td><td>' + user.status + '</td></tr>';      
        }) 
    } );   
 }
      
