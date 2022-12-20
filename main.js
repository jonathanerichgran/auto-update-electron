const {app, BrowserWindow} = require('electron')
const path = require('path')
const {autoUpdater} = require('electron-updater')//biblioteca para atualização automática.
const log = require('electron-log'); // npm de logs para a att automática

log.transports.file.resolvePath = () => path.join('C:/Users/JonathanErich/Documents/GitHub/auto-update-electron', '/logs/main.log');
//colocar um caminho relativo aqui depois para gerar o logo para qualquer usuário || ou talvez não já que é opção de desenvolvedor



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



autoUpdater.on("checking-for-update",()=>{
    log.info("checking-for-update...")
})

autoUpdater.on("update-available",()=>{
    log.info("update-available")
})

autoUpdater.on("update-not-available",(info)=>{
    log.info("update-not-available")
})

autoUpdater.on("error",(error)=>{
    log.info("Error in auto-updater. " + err)
})

autoUpdater.on("download-progress",(progressTrack)=>{
    log.info("\n\ndownload-progress")
    log.info(progressTrack)
})

autoUpdater.on("update-downloaded",()=>{
    log.info("Update downloaded")
})


app.on('ready',()=>{
    createWindow()
    autoUpdater.checkForUpdatesAndNotify()
})





