
function runSpeechRecognition() {

    var output = document.getElementById("output");

    var result = document.getElementById("result");

    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.onstart = function () {
        result.innerHTML = "<small>listening, please speak...</small>";
        console.log("Speak through Mic")
    };

    recognition.onspeechend = function () {
        result.innerHTML = "<small>stopped listening, Generating text</small>";
        console.log("Stopped speaking")
        recognition.stop();
    }
    recognition.onresult = function (event) {
        var dt = new Date();
        var current = event.resultIndex
        var transcript = event.results[current][0].transcript;
        console.log(transcript)
        if (transcript.includes("how are you")) {
            result = "Fine"
        }
        
        if (transcript.includes("time")) {
            result =  dt.toLocaleTimeString();
        }
        
        output.innerHTML = "<b>Text:</b> " + result + "<br/>";
        output.classList.remove("hide");
    };


    recognition.start();
}
