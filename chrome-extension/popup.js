startButton = document.querySelector('#start');

startButton.addEventListener('click', function() {
    if (startButton.textContent == 'Start') {
        startButton.textContent = 'Stop';
    } else {
        startButton.textContent = 'Start';
    }

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "Start"});
    });
});