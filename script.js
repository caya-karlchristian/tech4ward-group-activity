document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("uname").value;
    const password = document.getElementById("psw").value;

    if (username === "omlingo" && password === "pupt") {
        alert("Login successful!");
        window.location.href = "landing-page.html"; 

    } else {
        alert("Incorrect username or password.");
    }
});
