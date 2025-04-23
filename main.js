import { app, BrowserWindow } from 'electron';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Converte import.meta.url para o diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: `${__dirname}/preload.js` // Usando __dirname agora
        }
    });

    mainWindow.loadURL('http://localhost:5173');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {

    app.quit();

    // mantem aberto no mac!
    // if (process.platform !== 'darwin') {
    //     app.quit();
    // }
});
