document.addEventListener("DOMContentLoaded", function () {
    // Function to redirect to Dashboard
    function redirectToDashboard() {
        window.location.href = "dashboard.html"; // Ensure dashboard.html exists
    }

    // Login Button Click Event
    let loginBtn = document.getElementById("login-btn");
    if (loginBtn) {
        loginBtn.addEventListener("click", redirectToDashboard);
    }

    // Signup Button Click Event
    let signupBtn = document.getElementById("signup-btn");
    if (signupBtn) {
        signupBtn.addEventListener("click", redirectToDashboard);
    }

    // Developer Button Click Event (In Dashboard)
    let developerBtn = document.getElementById("developer-btn");
    if (developerBtn) {
        developerBtn.addEventListener("click", function () {
            window.location.href = "developer.html"; // Ensure developer.html exists
        });
    }

    // Chat Assistant Functionality
    let sendBtn = document.getElementById("send-btn");
    let userInput = document.getElementById("user-input");
    let chatBox = document.getElementById("chat-box");

    if (sendBtn && userInput && chatBox) {
        sendBtn.addEventListener("click", function () {
            let userText = userInput.value.trim();
            if (userText !== "") {
                let userMessage = <p><strong>You:</strong> ${userText}</p>;
                chatBox.innerHTML += userMessage;

                // Simulating Assistant Reply
                setTimeout(function () {
                    let botReply = <p><strong>Assistant:</strong> I'm here to help!</p>;
                    chatBox.innerHTML += botReply;
                    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
                }, 1000);

                userInput.value = ""; // Clear input
            }
        });

        // Enter key support for sending messages
        userInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                sendBtn.click();
            }
        });
    }
});