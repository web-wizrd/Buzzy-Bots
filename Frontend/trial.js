
let isDark = false;


function toggleDarkModelp() {
    isDark=!isDark;
    const darkModeEnabled = document.getElementById('darkModeToggle');
    const darkModeStylesheet = document.getElementById('darkModeStylesheet');
    const Theme_icon=document.getElementById('Theme_icon');
    if (isDark) {
        // Apply dark mode CSS
        darkModeEnabled.value="Dark Mode";
        darkModeStylesheet.href = "Loginpage.css";
        Theme_icon.textContent="dark_mode";
    } else {
        // Remove dark mode CSS
        darkModeStylesheet.href = "Loginpage_dark.css";
        darkModeEnabled.value="Light Mode";
        Theme_icon.textContent="wb_sunny";
        isDark=false;
    }
}

function toggleDarkModesp() {
    isDark=!isDark;
    const darkModeEnabled = document.getElementById('darkModeToggle');
    const darkModeStylesheet = document.getElementById('darkModeStylesheet');
    const Theme_icon=document.getElementById('Theme_icon');
    if (isDark) {
        // Apply dark mode CSS
        darkModeEnabled.value="Dark Mode";
        darkModeStylesheet.href = "signinpage.css";
        Theme_icon.textContent="dark_mode";
    } else {
        // Remove dark mode CSS
        darkModeStylesheet.href = "signinpage_dark.css";
        darkModeEnabled.value="Light Mode";
        Theme_icon.textContent="wb_sunny";
        isDark=false;

    }
}