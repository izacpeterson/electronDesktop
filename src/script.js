function updateClock() {
  const clockElement = document.getElementById("time");
  const currentTime = new Date();

  clockElement.textContent = currentTime.toLocaleTimeString();
}

setInterval(updateClock, 1000);

updateClock();

const { Terminal } = require("@xterm/xterm");
const ipc = require("electron").ipcRenderer;
const term = new Terminal({
  theme: {
    background: "#2e3440",
    foreground: "#ffffff",
  },
});

term.open(document.getElementById("terminal"));

ipc.on("terminal.incomingData", (event, data) => {
  term.write(data);
});

term.onData((e) => {
  ipc.send("terminal.keystroke", e);
});
