const { Terminal } = require("@xterm/xterm");
const ipc = require("electron").ipcRenderer;
const term = new Terminal({
  theme: {
    background: "#2e3440",
    foreground: "#ffffff",
  },
});

term.open(document.getElementById("terminal"));

term.write("$ ");

ipc.on("terminal.incomingData", (event, data) => {
  term.write(data);
});

term.onData((e) => {
  ipc.send("terminal.keystroke", e);
});
