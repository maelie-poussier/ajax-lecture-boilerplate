import Swal from 'sweetalert2';

const fetchApi = (email, password) => {
  fetch("https://reqres.in/api/register",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({"email": email, "password": password})
  })
    .then(response => {
      if (response.status === 200) {
        Swal.fire({title: 'Success', text: 'You are connected', icon: 'success'})
      } else {
        Swal.fire({title: 'Error!', text: 'Oups! Something went wrong', icon: 'error'})
      }
    });
}

// On selectionne le form
const form = document.getElementById("form");
// On écoute l'event submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // récupérer l'email
  const email = document.getElementById("email").value;
  // récupérer le password
  const password = document.getElementById("password").value;
  // On fait notre requête fetch
  fetchApi(email, password);
});
