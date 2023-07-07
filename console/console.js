console.log("Script is running");

const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

class Messages {
    constructor() {
        this.messages = [];
    }

    async giveLikes() {
        this.getMessages();
        
        this.messages.forEach(async (message) => {
            if (!(this.messageIsLiked(message))) {
                let clickEvent  = document.createEvent('MouseEvents');
                clickEvent.initEvent('dblclick', true, true);
                message.dispatchEvent(clickEvent);
            }
        })
    }

    getMessages() {
        let messageElements = document.querySelectorAll('.x1qjc9v5.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x9f619.x78zum5.xdt5ytf.x2lah0s.xk390pu.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.xggy1nq.x11njtxf');

        messageElements.forEach((messageElement) => {
            if (!(this.messages.includes(messageElement))) {
                this.messages.push(messageElement);
            }
        })
    }

    messageIsLiked(message) {
        if (message.querySelector('.x15yrdiy') === null) { return false; }
        else { return true; }
    }
}

const messages = new Messages();

async function main() {
    console.log("Running");
    
    messages.giveLikes();

}

async function credits() {
    console.clear();
    console.log.apply(console, ["%c Thanks for using my Insta Like Bot! ","color: #fff; background: #8000ff; padding:5px 0;"])
    console.log.apply(console, ["%c Designed and Developed by Alex lo Storto %c\ud83d\ude80 ","color: #fff; background: #8000ff; padding:5px 0;","color: #fff; background: #242424; padding:5px 0 5px 5px;"])
}

setInterval(main, 5000);
setInterval(credits, 1000);
