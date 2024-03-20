// speech.js

class Speech {
    constructor() {
        // Initializing speech recognition and synthesis objects
        this.speechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        this.speechSynthesis = window.speechSynthesis;
        
        // Configuration for speech recognition
        this.speechRecognition.lang = 'en-US';
        this.speechRecognition.interimResults = false;
        this.speechRecognition.maxAlternatives = 1;
        
        // Binding event listeners
        this.speechRecognition.onresult = this.handleRecognitionResult.bind(this);
        this.speechRecognition.onerror = this.handleError.bind(this);
    }

    // Method to start speech recognition
    startRecognition() {
        this.speechRecognition.start();
    }

    // Event handler for speech recognition results
    handleRecognitionResult(event) {
        const transcript = event.results[0][0].transcript;
        console.log('Recognition Result:', transcript);
        this.speak(transcript); // Echo back the recognized speech
    }

    // Event handler for speech recognition errors
    handleError(event) {
        console.error('Recognition Error:', event.error);
    }

    // Method to synthesize speech
    speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        this.speechSynthesis.speak(utterance);
    }
}

// Exporting the Speech class
module.exports = Speech;
