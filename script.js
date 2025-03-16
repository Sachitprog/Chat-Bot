function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    if (userInput.trim() === "") return;

    chatbox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    document.getElementById("userInput").value = "";

    setTimeout(() => {
        let botReply = "I'm just a basic chatbot!";
        chatbox.innerHTML += `<p><strong>Bot:</strong> ${botReply}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000);
}
