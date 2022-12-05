const {app, BrowserWindow} = require('electron')
const path = require('path')
const {autoUpdater} = require('electron-updater')//biblioteca para atualização automática.
const log = require('electron-log'); // npm de logs para a att automática

log.transports.file.resolvePath = () => path.join('C:/Users/JonathanErich/Documents/GitHub/auto-update-electron', '/logs/main.log');



log.info('Hello, log');
log.warn('Some problem appears');

log.log("Application version = " + app.getVersion())

let win;
function createWindow(){
win = new BrowserWindow({width: 500, heigth: 500})
console.log("fazendo o log")
console.log(path.join(__dirname +  '/index.html'))

win.loadFile(path.join(__dirname +  '/index.html'))
}

app.on('ready',()=>{
    createWindow()
    autoUpdater.checkForUpdatesAndNotify()
})

autoUpdater.on("checking-for-update",()=>{
    log.info("checking-for-update...")
})

autoUpdater.on("update-available",()=>{
    log.info("update-available")
})

autoUpdater.on("update-not-available",()=>{
    log.info("update not available")
})

autoUpdater.on("error",(error)=>{
    log.info("Error in auto-updater. " + err)
})

autoUpdater.on("download-progress",(progressTrack)=>{
    log.info("\n\ndownload-progress")
    log.info(progressTrack)
})


autoUpdater.on("download-progress",()=>{
    log.info("download-progress")
})

autoUpdater.on("update-downloaded",()=>{
    log.info("Update downloaded")
})





