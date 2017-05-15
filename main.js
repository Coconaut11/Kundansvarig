const electron = require("electron");
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

app.on("ready", function() {
  let w = new BrowserWindow({
    width: 640*2,
    height: 480*2,
    minWidth: 850,
    minHeight: 600,
    frame: true
  });
  w.setMenu(null);
  w.loadURL("file:///" + __dirname + "/index.html");
  exports.window = w;
});
