require('electron-chromedriver/chromedriver')
const webdriver = require( 'selenium-webdriver' );
const {setDefaultTimeout} = require('cucumber')
const path = require( 'path' );

const driver = new webdriver.Builder()
  // The "9515" is the port opened by chrome driver.
  .usingServer( 'http://localhost:9515' )
  .withCapabilities({
    chromeOptions: {
      // Here is the path to your Electron binary.
      binary: path.join( __dirname, '../passwordencrypt/dist/backup-password-react 0.1.0.exe' ),
      args:['--headless']
    }
  })
  .forBrowser( 'electron' )
  .build()

  setDefaultTimeout(60*1000)

  module.exports = {
    driver,
    webdriver
}