"use strict";

const clock = document.querySelector("#clock");
let date = new Date();

const formatter = new Intl.DateTimeFormat("en-Us", {
  timeZone: "Asia/Manila",
  dateStyle: "full",
  timeStyle: "medium",
});

let ticker = setInterval(() => {
    // Update Date
    let date = new Date()
    clock.textContent = `${formatter.format(date)}`
}, 1000)