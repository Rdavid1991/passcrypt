const path = require( 'path' );
const { app, BrowserWindow, Menu, webContents } = require( 'electron' );

function createWindow() {
    const win = new BrowserWindow({
        minWidth      : 800,
        minHeight     : 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    if ( process.env.ELECTRON_DEV ) {
        win.webContents.openDevTools();
        win.loadURL( process.env.ELECTRON_DEV );
    } else {
        const template = [
            {
                label  : "Desarrollador",
                submenu: [{
                        label: 'abrir',
                        click: () => {
                            win.webContents.toggleDevTools();
                        }
                    }]
            }
        ];

        const menu = Menu.buildFromTemplate( template );

        Menu.setApplicationMenu( menu );
        win.loadFile( path.join( __dirname, '/build/index.html' ));
    }
}

app.whenReady().then( createWindow );
