import CountdownTimer from "./js/countdown-timer.js";

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Aug 17, 2021"),
});

new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Oct 12, 2022, 10:20:15"),
});
