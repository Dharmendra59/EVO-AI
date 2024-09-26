let btn = document.querySelector("#btn")
let content = document.querySelector("#cont")
let voice = document.querySelector("#voice")


function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "en-IN"
    window.speechSynthesis.speak(text_speak)

}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Dear, I'm Shifra Your virtual babu, How may I help you")

    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Dear I'm Shifra Your virtual babu, How may I help you")

    } else {
        speak("Good Evening Dear I'm Shifra Your virtual babu, How may I help you")
    }

}
// window.addEventListener('load', () => {
//     wishMe()
// })


let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new SpeechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
        // console.log(event)
    takeCommand(transcript.toLowerCase())

}

btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"



})

function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (message.includes('hello') || message.includes('hi') || message.includes('hay') || message.includes('hey')) {
        speak("Hello Dear, How may I help you")
    } else if (message.includes('who are you') || message.includes('hu r u')) {
        speak("I am Shifra, Virtual babu, created by Evolving Team member engineer Dharmendra Singh, How can i help you")
    } else if (message.includes('tum kon ho') || message.includes('hu r u')) {
        speak("Me Shifra hu, Virtual babu, Mujhe  Evolving Team member engineer Dharmendra Singh ke dvara bnaya gya hai, Kahiye me apki kaise madad kar sakti hu")
    } else if (message.includes('how are you') || message.includes('hau r u')) {
        speak("I am fine and you. How can i help dear ?")
    } else if (message.includes('hindi me baat') || message.includes('hindi me bol')) {
        speak("Ha dear, me hindi me baat kar sakti hu. Kahiye apko kya baat karni hai. ")
    } else if (message.includes('namaste') || message.includes('namaste kro')) {
        speak("namaste ji. namaste ji")
    } else if (message.includes('I am so sad.') || message.includes('so sad')) {
        speak("Ohh dear, What's happend? I am here. Now you can talk to me for relaxing")
    } else if (message.includes('dukhi hun') || message.includes('gussa')) {
        speak("Aree yrr, Kya hua me hu na apka dukh sunne ke liye. Aap mujhe bta sakte hai")
    } else if (message.includes('kya hua') || message.includes('ka hua')) {
        speak("Kuch nahi Yaar bas apke message ka intjar kar rhi hu")
    } else if (message.includes('thanks') || message.includes('thank u')) {
        speak("Most welcome dear, How can i help You")
    } else if (message.includes('khana khaogi') || message.includes('bhukhi ho') || message.includes('bhookh')) {
        speak("Nhi Dear, me khana nhi khati me keval net ka use karti hu. agar apko bhook lagi ho to aap kha lijiye")
    } else if (message.includes('chup rho') || message.includes('chup') || message.includes('shut up')) {
        speak("Okk dear, Meto bas apka reply de rahi thi")
    } else if (message.includes('khana banana') || message.includes('khana bana')) {
        speak("Ohh nahi dear, me khana kaise bana sakt hu, me apko keval bta sakti hu ki khana kaise banta hai")
    } else if (message.includes('ghumane') || message.includes('ghumne')) {
        speak("ohh, Nice thing, Dear vaise aap kaha jana pasand karoge.")
    } else if (message.includes('aur') || message.includes('bataen')) {
        speak("Aur Sab Badhiyan hi hai. Aap mujhe bataen me kya kar sakti hu apke liye.")
    } else if (message.includes('shree Ram') || message.includes('ram')) {
        speak("jai jay shree Ram.")
    } else if (message.includes('shree radhey') || message.includes('radhe radhe')) {
        speak("jai jay shree Radhey.")
    } else if (message.includes('billu') || message.includes('billu kaha')) {
        speak("billu abhi busy hai. usse disturb na karo. ")
    } else if (message.includes('time') || message.includes('samay')) {
        speak(Date())
    } else if (message.includes('open youtube')) {
        speak("opening youtube")
        window.open("https://www.youtube.com/")
    } else if (message.includes('open google')) {
        speak("opening google")
        window.open("https://www.google.com/")
    } else if (message.includes('whatsapp. bittu') || message.includes('whatsapp bittu')) {
        speak("Sending Message to Bitto")
        window.open("https://api.whatsapp.com/send/?phone=+919910389798&text=This+Massage+from+EVO-AI.Contact+Us&type=phone_number&app_absent=0")
    } else if (message.includes('whatsapp. shivang') || message.includes('whatsapp, shivang.') || message.includes('whatsapp Shivang')) {
        speak("Sending Message to Shivang")
        window.open("https://api.whatsapp.com/send/?phone=+917905358167&text=This+Massage+from+EVO-AI.Contact+Us&type=phone_number&app_absent=0")
    } else if (message.includes('whatsapp. papa') || message.includes('whatsapp, papa.') || message.includes('whatsapp papa')) {
        speak("Sending Message to Papaji")
        window.open("https://api.whatsapp.com/send/?phone=+918765049289&text=This+Massage+from+EVO-AI.Contact+Us&type=phone_number&app_absent=0")
    } else if (message.includes('open whatsapp')) {
        speak("opening whatsapp")
        window.open("https://api.whatsapp.com/send/?phone=+917380757082&text=This+Massage+from+EVO-AI.Contact+Us&type=phone_number&app_absent=0")
    } else if (message.includes('open facebook')) {
        speak("opening facebook")
        window.open("https://www.facebook.com/")
    } else {
        speak(`This is what I found on internet regarding: ${message.replace("Shifra", "")}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
}