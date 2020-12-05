require('electron-chromedriver/chromedriver')
//require('chromedriver')
const webdriver = require( 'selenium-webdriver' );
const chrome = require( 'selenium-webdriver/chrome' )
const {setDefaultTimeout} = require('cucumber')
const path = require( 'path' );

const driver = new webdriver.Builder()
  // The "9515" is the port opened by chrome driver.
  .usingServer( 'http://localhost:9515' )
  .withCapabilities({
    chromeOptions: {
      // Here is the path to your Electron binary.
      binary: path.join( __dirname, '../passwordencrypt/dist/backup-password-react 0.1.0.exe' ),
      args:[
        "--window-size=1920,1080",
        "--disable-gpu",
        "--disable-extensions",
        "--proxy-server='direct://'",
        "--proxy-bypass-list=*",
        "--start-maximized",
        "--headless",
        "no-sandbox"
      ]
    }
  })
  .forBrowser('electron')
  .build();


/* (async function(){
  await driver.get('localhost:3000')
})() */

setDefaultTimeout(60 * 1000)

module.exports = {
  driver,
  webdriver
}