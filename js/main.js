"use strict";

const $ = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

let speech = new Speech();
speech.onload(function(voices) {
  let pageCtrl = new PageController(voices);
  pageCtrl.render(voice => {
    this.speak("Esse é um teste, ou vai falar que não?", voice);
    this.speak("Esse é outro teste, ou vai falar que não?", voice);
    this.speak("Você disse que não, mas isso é um teste!", voice);
  });
})
