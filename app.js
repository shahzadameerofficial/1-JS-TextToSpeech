
let form = document.querySelector("form");
let commandbox = document.querySelector("#commandbox");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let speech = new SpeechSynthesisUtterance(commandbox.value);
    speechSynthesis.speak(speech);
})
