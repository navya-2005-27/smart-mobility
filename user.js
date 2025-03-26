// Show feature details
function showFeature(feature) {
    alert(Opening 
        
    );
}

// Open Smart Assistant Chat
function openChat() {
    document.getElementById("chatbox").style.display = "block";
}

// Chatbot (Simple AI Responses)
function sendMessage() {
    let input = document.getElementById("userInput").value;
    let chatMessages = document.getElementById("chat-messages");

    let userMessage = <p><b>You:</b> ${input}</p>;
    chatMessages.innerHTML += userMessage;

    // Simple AI Response
    let response;
    if (input.toLowerCase().includes("ev")) {
        response = "EVs are electric vehicles that run on batteries.";
    } else if (input.toLowerCase().includes("traffic")) {
        response = "Traffic insights help reduce congestion.";
    } else {
        response = "I'm still learning. Please try again!";
    }

    let botMessage = <p><b>Bot:</b> ${response}</p>;
    chatMessages.innerHTML += botMessage;

    document.getElementById("userInput").value = "";
}

// Helmet Detection using Webcam
function startHelmetDetection() {
    let video = document.getElementById("video");
    
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(error => {
            console.error("Error accessing webcam:", error);
            alert("Webcam access denied.");
        });

    setTimeout(() => {
        let helmetDetected = Math.random() > 0.5;
        let status = document.getElementById("helmet-status");
        
        if (helmetDetected) {
            status.innerText = "Helmet Status: ✅ Helmet Detected";
        } else {
            status.innerText = "Helmet Status: ❌ No Helmet Detected";
        }
    }, 5000);
}
async function startHelmetDetection() {
    let video = document.getElementById("video");
    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");

    // Capture Frame from Video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Convert Frame to Blob
    canvas.toBlob(async (blob) => {
        let formData = new FormData();
        formData.append("image", blob, "frame.jpg");

        // Send to Python AI Server
        let response = await fetch("http://127.0.0.1:5000/detect", {
            method: "POST",
            body: formData
        });

        let data = await response.json();
        let status = document.getElementById("helmet-status");

        if (data.helmet_detected) {
            status.innerText = "✅ Helmet Detected";
        } else {
            status.innerText = "❌ No Helmet Detected";
            alert("⚠ WARNING: Please Wear a Helmet!");
            playWarningAudio();
        }
    }, "image/jpeg");
}

function playWarningAudio() {
    let audio = new Audio('warning.mp3'); // Add warning.mp3 in the project
    audio.play();
}
document.querySelector(".smart-assistant").addEventListener("click", function() {
    window.location.href = "assistant.html";  // Replace with your actual page
});