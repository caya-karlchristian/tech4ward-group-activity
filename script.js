document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("uname").value;
    const password = document.getElementById("psw").value;

    console.log("Why isn't working")
    if (username === "onlingo" && password === "pupt") {
        console.log("is it?")
        alert("Login successful!");
        window.location.href = "landing-page.html"; 

    } else {
        alert("Incorrect username or password.");
    }
});
