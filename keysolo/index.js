class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.status__timer');
    this.interval = this.timer();

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  timer() {
    let interval = setInterval(() => {
      this.timerElement.textContent = this.timerElement.textContent - 1;
      if (this.timerElement.textContent <= 0) {
        this.fail();
        clearInterval();
      }
    }, 1000);

    return interval;
  }

  registerEvents() {
    document.addEventListener('keyup', (event) => {
      if (event.key.length === 1) {
        const symbol = event.key.toLocaleLowerCase();

        if (this.currentSymbol.textContent.toLocaleLowerCase() === symbol) {
          this.success();
        } else {
          this.wordElement.classList.add('word_incorrect');
          setTimeout(() => {
            this.wordElement.classList.remove('word_incorrect');
          }, 200);
          setTimeout(() => {
            this.fail();
          }, 200);
        }
      }
    });
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    clearInterval(this.interval);

    this.renderWord(word);

    this.interval = this.timer();
  }

  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'javascript',
      'я люблю kitkat',
    ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');

    this.timerElement.textContent = word.length;
  }
}

new Game(document.getElementById('game'))