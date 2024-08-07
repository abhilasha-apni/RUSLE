const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence){
  const text_speak = new SpeechSynthesisUtterance(sentence);
  text_speak .rate = 1;
  text_speak .pitch = 1;
  window.speechSynthesis.speak(text_speak);
}
function wishMe(){
  var day = new Date();
  var hr = day.getHours();
  if(hr >= 0 && hr < 12){
 speak("Good Morning Boss");
  }
else if(hr == 12){
  speak("Good noon Boss");
     }
else if(hr > 12 && hr <= 17){
  speak("Good Afternoon Boss");
       }
else{
  speak("good Evening Boss");
}
}

window.addEventListener('load', ()=>{
  speak("Activating rustle");
  speak("Goin online");
  wishMe();
  
})


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
const current = event.resultIndex;
const transcript = event.results[current][0].transcript;
content.textContent = transcript;
speakThis(transcript.toLowerCase());
}

btn.addEventListener('click',()=>{
  recognition.start();
})
function speakThis(message){
  const speech = new SpeechSynthesisUtterance();

  speech.text = "I did not understand what you said please try again";

  if(message.includes('hey') || message.includes('hello')){
    const finalText = "Hello Boss";
    speech.text = finalText;
  }
  else if (message.includes('how are you')){
    const finalText = "I am fine boss tell me how can i help you";
    speech.text = finalText;
  }
  else if (message.includes('name')){
    const finalText = "my name is rustle";
    speech.text = finalText;
  }
  else if (message.includes('open google')){
    window.open("https://google.com", "_blank");
    const finalText = "opening google";
    speech.text = finalText;
  }
  
  else if (message.includes('open instagram')){
    window.open("https://instagram.com", "_blank");
    const finalText = "opening instagram";
    speech.text = finalText;
  }
  else if (message.includes('what is') || message.includes('who is') || message.includes('what are')){
    window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`,"_blank");
    const finalText = "This is what i found on internet regarding " + message;
    speech.text = finalText;
  }
  else if (message.includes('github profile')){
    window.open("https://github.com/abhilasha-apni","_blank");
    const finalText = "This is what i found on your github profile " + message;
    speech.text = finalText;
  }
  else if (message.includes('location')){
    var latitude =  21.7679;
  var longitude = 78.8718;
  window.open(`https://www.google.com/maps?q= ${message.replace(" ", "+", +latitude + "," + longitude)}`, "_blank");
  const finalText = "This is what i found on google map" + message;
  speech.text = finalText;
  }
  else if (message.includes('youtube')){
   window.location.href = 'https://www.youtube.com/';
    const finalText = "This is what i found on youtube  regarding " + message;
    speech.text = finalText;
  
  }
  else if (message.includes('music')){
    window.open(`https://wynk.in/music${message.replace("music", "+")}`,"_blank");
    const finalText = "This is what i found on music regarding " + message;
    speech.text = finalText;
  
  }
  else if (message.includes('hotstar')){
    window.open(`https://www.hotstar.com/in/shows${message.replace("hotstar", "+")}`,"_blank");
    const finalText = "This is what i found on hotstar regarding " + message;
    speech.text = finalText;
  
  }
  
  else if (message.includes('time')){
    const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
    const finalText = time;
    speech.text = finalText;
  }
  else if (message.includes('date')){
    const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
    const finalText = date;
    speech.text = finalText;
  }
  else if (message.includes('calculator')){
    window.open('Calculator:///')
    const finalText = "opening Calculator";
    speech.text = finalText;
  }
  
  else if (message.includes('wikipedia')){
    window.open(`https://en.wikipedia.org/w/index.php?search=${message.replace("wikipedia", "")}`, "_blank");
    const finalText = "This is what i found on wikipedia regarding " + message;
    speech.text = finalText;
  
  }
  else {
    window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`,"_blank");
    const finalText = "I found some information for " + message + "on google";
    speech.text = finalText;
  }
  
  speech.volume = 1;
  speech.pitch = 1;
  speech.rate = 1;
  window.speechSynthesis.speak(speech);
}
