export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${selector}  span[data-value='days']`),
      hours: document.querySelector(`${selector}  span[data-value='hours']`),
      mins: document.querySelector(`${selector}  span[data-value='mins']`),
      secs: document.querySelector(`${selector}  span[data-value='secs']`),
    };
    this.start();
  }

  start() {
    setInterval(() => {
      const time = this.targetDate.getTime() - Date.now();
      if (time > 0) this.refreshView(this.getTimeLeft(time));
      else this.refreshView(this.getTimeLeft(0));
    }, 1000);
  }

  getTimeLeft(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
  }

  refreshView({ days, hours, mins, secs }) {
    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
  }
}
