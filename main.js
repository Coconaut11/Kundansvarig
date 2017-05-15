const electron = require("electron");
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

app.on("ready", function() {
  let w = new BrowserWindow({
    width: 640,
    height: 480,
    frame: true
  });
});
