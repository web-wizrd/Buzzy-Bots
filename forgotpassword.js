var num=0;
function toggleDarkMode() {
    num+=1;
    const darkModeEnabled = document.getElementById('darkModeToggle');
    const darkModeStylesheet = document.getElementById('darkModeStylesheet');
    const Theme_icon=document.getElementById('Theme_icon');
    if (num%2!=0) {
        // Apply dark mode CSS
        darkModeStylesheet.href = "forgotpassword_dark.css";
        darkModeEnabled.value="Light Mode";
        Theme_icon.textContent="wb_sunny";
    } else {
        // Remove dark mode CSS
        darkModeEnabled.value="Dark Mode";
        darkModeStylesheet.href = "forgotpassword.css";
        Theme_icon.textContent="dark_mode";
    }
}

document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const email = document.getElementById("email").value;

    if (email) {
      // Simulate password reset
      document.getElementById("message").innerHTML = `A password reset link has been sent to ${email}`;
    } else {
      document.getElementById("message").innerHTML = "Please enter a valid email.";
    }
  });