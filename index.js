







const {app} = require("electron")
const BrowserWindow = require('electron').BrowserWindow;
const fs = require('fs');
const url = require("url")
const path = require("path")

let mainWindow

app.on("ready", function() {
  var win = new BrowserWindow({width: 800, height: 600});
  win.loadURL("http://localhost:5000/");
  var webContents = win.webContents;

    setTimeout(() => {
        console.log("sending message from main process")
        win.webContents.send("submitted-form", "hello")
    }, 3000)
})
