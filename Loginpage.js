var num=0;
function toggleDarkMode() {
    num+=1;
    const darkModeEnabled = document.getElementById('darkModeToggle');
    const darkModeStylesheet = document.getElementById('darkModeStylesheet');
    const Theme_icon=document.getElementById('Theme_icon');
    if (num%2!=0) {
        // Apply dark mode CSS
        darkModeStylesheet.href = "Loginpage_dark.css";
        darkModeEnabled.value="Light Mode";
        Theme_icon.textContent="wb_sunny";
    } else {
        // Remove dark mode CSS
        darkModeEnabled.value="Dark Mode";
        darkModeStylesheet.href = "Loginpage.css";
        Theme_icon.textContent="dark_mode";
    }
}