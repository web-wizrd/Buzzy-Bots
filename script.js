function sendMessage() {
    let input = document.getElementById('userInput');
    let message = input.value;

    if (message.trim() !== '') {
        // Display user's message
        let userMessage = `<div class="message user"><p>${message}</p></div>`;
        document.getElementById('chatBody').innerHTML += userMessage;

        // Simulate bot response
        let botMessage = `<div class="message bot"><p>Sure, do you have any specific date and time in mind...</p></div>`;
        document.getElementById('chatBody').innerHTML += botMessage;

        // Clear input
        input.value = '';

        // Scroll to the bottom
        document.getElementById('chatBody').scrollTop = document.getElementById('chatBody').scrollHeight;
    }
}
var num=0;
function toggleDarkMode() {
    num+=1;
    const darkModeEnabled = document.getElementById('darkModeToggle');
    const darkModeStylesheet = document.getElementById('darkModeStylesheet');
    const Theme_icon=document.getElementById('Theme_icon');
    if (num%2!=0) {
        // Apply dark mode CSS
        darkModeStylesheet.href = "dark.css";
        darkModeEnabled.value="Light Mode";
        Theme_icon.textContent="wb_sunny";
    } else {
        // Remove dark mode CSS
        darkModeEnabled.value="Dark Mode";
        darkModeStylesheet.href = "Styles.css";
        Theme_icon.textContent="dark_mode";
    }
}

const userInput = document.getElementById('userInput');

userInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});

// const userInput = document.getElementById('userInput');

// userInput.addEventListener('keypress', function(event) {
//   if (event.key === 'Enter' && !event.shiftKey) {
//     event.preventDefault();
//     sendMessage();
//   } else if (event.key === 'Enter' && event.shiftKey) {
//     userInput.value += '\n';
//   }
// });