class Speech {
  constructor() {
    if(!window.speechSynthesis)
      throw new Error("Este browser não suporta speech synthesis");

    this._playing = false;
    this._synthesis = window.speechSynthesis;
    this._synthesis.cancel();
  }

  onload(exec) {
    let first = false;
    this._synthesis.onvoiceschanged = function() {
      if(!first) {
        first = true;
        exec.call(this, this._synthesis.getVoices());
      }
    }.bind(this);
  }

  speak(message, voice) {
    let speechUtterance = new SpeechSynthesisUtterance(message);
    speechUtterance.voice = voice;
    speechUtterance.lang = voice.lang;
    speechUtterance.volume = 1.0;
    speechUtterance.rate = 1.0;
    speechUtterance.pitch = 1.0;
    this._playing = true;
    this._synthesis.speak(speechUtterance);
  }

  pauseResume() {
    if(this._playing) {
      this._synthesis.pause();
    }else {
      this._synthesis.resume();
    }
    this._playing = !this._playing;
  }

  getVoice(lang, voices) {
    return voices.filter(voice => {
      return voice.lang == lang;
    })[0];
  }
}
