const EventEmitter = require('events');


class Timer extends EventEmitter {
    start(count) {
      let current = 0;
      const interval = setInterval(() => {
        current++;
        this.emit('tick', current);
        if (current >= count) {
          this.emit('end');
          clearInterval(interval);
        }
      }, 1000);
    }
  }
  
  const timer = new Timer();
  
  timer.on('tick', (count) => console.log(`Tick: ${count}`));
  timer.on('end', () => console.log('Timer finished!'));
  
  timer.start(5); 
  