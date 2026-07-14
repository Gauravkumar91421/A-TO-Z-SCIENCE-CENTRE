// ================================
// A TO Z Science Centre - auth.js
// ================================

const container = document.getElementById("container");
const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");

// Switch Panels
if (signUp) {
    signUp.addEventListener("click", () => {
        container.classList.add("active");
    });
}

if (signIn) {
    signIn.addEventListener("click", () => {
        container.classList.remove("active");
    });
}

// Login Form
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function (e) {

        e.preventDefault();
        
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        if (email === "" || password === "") {
            alert("Please fill all fields.");
            return;
        }

        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
            const data = await response.json();
       console.log(data);
        if (data.success) {
            window.location.href = "/home.html";

        } else {
            alert("Invalid Email or Password");
        }

    });

}

// Signup Form
const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        
        const name = signupForm.querySelector('input[type="text"]').value;
        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;

        if (name === "" || email === "" || password === "") {

            alert("Please fill all fields.");

            return;

        }
       
        console.log("Signup Data:", {
    name,
    email,
    password
});
const response = await fetch("/signup", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name,
        email,
        password
    })
});

const data = await response.json();
alert(JSON.stringify(data));

console.log("Server Response:", data);

alert(data.message);

if (data.success) {
    signupForm.reset();
    container.classList.remove("active");
}
    });

}

function handleCredentialResponse(response) {
    alert("Google login successful")
    fetch("/api/auth/google", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    credential: response.credential
  })
})
.then(res => res.json())
.then(data => {
  console.log(data);

  if (data.success) {
    window.location.href = "/home";
  } else {
    alert(data.message || "Login failed");
  }
})
.catch(err => {
  console.error(err);
});
}
//const googleBtn = document.getElementById("googleLoginBtn");

//if (googleBtn) {
  //  googleBtn.addEventListener("click", function (e) {
    //    e.preventDefault();
      //  google.accounts.id.prompt();
   // });
//}