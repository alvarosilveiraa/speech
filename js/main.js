"use strict";

const $ = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

try {
  let speech = new Speech();
  speech.onload(function(voices) {
    let pageCtrl = new PageController(voices);
    pageCtrl.render(voice => {
      this.speak("Os textos do site são:", voice);
      $all("p").forEach(p => {
        this.speak(p.textContent, voice);
      })
      this.speak("Fim dos textos.", voice);
    });
  })
}catch(e) {
  alert(e);
}

