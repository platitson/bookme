function Clock({ clock }) {
  this.element = clock;
}

Clock.prototype.updateTime = function() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    this.element.children[0].innerHTML = hours;
  
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    this.element.children[1].innerHTML = minutes;
  
    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    this.element.children[2].innerHTML = seconds;
  };

Clock.prototype.clockStart = function() { 
  setInterval(() => { this.updateTime(); }, 1000);
  this.updateTime();
};

export { Clock };