const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("login handler");

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/homepage");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ name: name, email: email, password: password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/homepage");
      console.log(response);
    } else {
      alert(response.statusText);
      console.log(response);
    }
  }
};

document
  .querySelector("#login-button")
  .addEventListener("click", loginFormHandler);

document
  .querySelector("#signup-button")
  .addEventListener("click", signupFormHandler);
