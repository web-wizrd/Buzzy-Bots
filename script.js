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
    document.body.classList.toggle('dark-mode');
    document.querySelector('.chat-container').classList.toggle('dark-mode');
    document.querySelector('.chat-body').classList.toggle('dark-mode');
    document.querySelector('.chat-input').classList.toggle('dark-mode');
    document.querySelector('.chat-input input').classList.toggle('dark-mode');
    document.querySelector('.chat-input button').classList.toggle('dark-mode');

    // Toggle dark mode for each message element
    const messages = document.querySelectorAll('.message p');
    messages.forEach(message => {
        message.classList.toggle('dark-mode');
    });
}
