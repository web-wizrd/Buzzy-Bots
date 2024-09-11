function sendMessage() {
    let input = document.getElementById('userInput');
    let message = input.value;

    if (message.trim() !== '') {
        // Display user's message
        let userMessage = `<div class="message user"><p>${message}</p></div>`;
        document.getElementById('chatBody').innerHTML += userMessage;

        // Simulate bot response
        let botMessage = `<div class="message bot"><p>I received your message: "${message}"</p></div>`;
        document.getElementById('chatBody').innerHTML += botMessage;

        // Clear input
        input.value = '';

        // Scroll to the bottom
        document.getElementById('chatBody').scrollTop = document.getElementById('chatBody').scrollHeight;
    }
}

function toggleDarkMode() {
    const darkModeEnabled = document.getElementById('darkModeToggle').checked;
    const darkModeStylesheet = document.getElementById('darkModeStylesheet');

    if (darkModeEnabled) {
        // Apply dark mode CSS
        darkModeStylesheet.href = "dark-mode.css";
    } else {
        // Remove dark mode CSS
        darkModeStylesheet.href = "";
    }
}
