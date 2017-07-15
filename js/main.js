const electron = require("electron");
const path = require("path");
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

exports.path_dir = path.join("file:///", __dirname);

app.on("ready", () => {    
    let w = new BrowserWindow({
	width: 640*2,
	height: 480*2,
	minWidth: 850,
	minHeight: 600,
	frame: true
    });1
    //w.setMenu(null);
    w.loadURL(path.join(this.path_dir, "../content/index.html"));
//    w.loadURL(path.join(this.path_dir, "/../content/index.html"));
    exports.window = w;
});
