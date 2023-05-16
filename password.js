  <script>
    // Set your desired password
    var password = "myPassword";

    // Prompt the user to enter the password
    var enteredPassword = prompt("Please enter the password to access the website:");

    // Check if the entered password matches the expected password
    if (enteredPassword === password) {
      // Password is correct, allow access to the website
      alert("Password correct. Access granted!");
      // Add your website content or redirect to the main page here
    } else {
      // Password is incorrect, deny access to the website
      alert("Incorrect password. Access denied!");
      // Redirect or display an error message here, e.g., redirect to an error page
      window.location.href = "404.html";
    }
  </script>
