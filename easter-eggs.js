function TicTacToe() {
}

function Loader(frames = ['|', '/', '-', "\\"]) {
    let index = 0
    this.clearConsole = function () {
        console.clear();
    };

    loading = setInterval(function () {
        if (index >= frames.length) index = 0;
        this.clearConsole();
        console.log(frames[index]);
        index += 1;
    }, 500);
};


function Clock() {
    let self = this;
    let clockInterval;
    let isClockVisible = true;

    this.start = function () {
        if (isClockVisible) {
            clockInterval = setInterval(function () {
                let currentDate = new Date();
                let hours = currentDate.getHours();
                let minutes = currentDate.getMinutes();
                let seconds = currentDate.getSeconds();

                let formattedTime = self.formatTime(hours) + ':' + self.formatTime(minutes) + ':' + self.formatTime(seconds);
                self.clearConsole();
                console.log(formattedTime);
            }, 1000);
        }
    };

    this.formatTime = function (time) {
        return time < 10 ? '0' + time : time;
    };

    this.clearConsole = function () {
        console.clear();
    };

    this.stop = function () {
        clearInterval(clockInterval);
        self.clearConsole();
        console.log("Let's keep playing!");
    };

    // Captura el evento de clic en cualquier parte de la ventana
    window.addEventListener('click', function () {
        isClockVisible = false;
        self.stop();
    });
}

// Uso de la función constructora
let clock = new Clock();
clock.start();


function numberFormatter(divider, array) { // 1024 , ["b", "kb", "mb"]
    this.snippet = function (number) {      //2000 =>  2000/1024 = 1.95  1.9kb  //1000
      let count = 0;
      let quotient = number;
      if (number >= divider) {
        do {
          count += 1;
          quotient = quotient / divider;
        } while (quotient >= divider);
      }
      return `${Math.floor(quotient)} ${array[count]}`;
    };
}


function EasterEgg() {
}

// Loader()