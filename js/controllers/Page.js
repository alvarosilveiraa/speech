class PageController {
  constructor(voices) {
    this._voices = voices;
    this._select = $("select");
  }

  render(play) {
    for(let i = 0; i < this._voices.length; i++) {
      let voice = this._voices[i];
      let option = document.createElement("option");
      option.value = i;
      option.textContent = `(${voice.lang}) ${voice.name}`;
      if(voice.lang == "pt-BR") option.setAttribute("selected", "true");
      this._select.appendChild(option);
    }

    $("button").addEventListener("click", () => {
      play(this._voices[this._select.selectedIndex]);
    })
  }
}
