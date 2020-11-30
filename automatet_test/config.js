<<<<<<< HEAD
require('electron-chromedriver/chromedriver')
const webdriver = require( 'selenium-webdriver' );
const {setDefaultTimeout} = require('cucumber')
const path = require( 'path' );
=======
//require('electron-chromedriver/chromedriver')
require('chromedriver')
const webdriver = require('selenium-webdriver');
const { setDefaultTimeout } = require('cucumber')
const path = require('path');
>>>>>>> a70bc3fb1c4b0cda1f26ad147abe358d6966d4cb

const driver = new webdriver.Builder()
  // The "9515" is the port opened by chrome driver.
  //.usingServer( 'http://localhost:9515' )
  .withCapabilities({
    chromeOptions: {
      // Here is the path to your Electron binary.
<<<<<<< HEAD
      binary: path.join( __dirname, '../passwordencrypt/dist/backup-password-react 0.1.0.exe' ),
      args:['--headless']
=======
      //binary: path.join( __dirname, '../passwordencrypt/dist/backup-password-react 0.1.0.exe' ),
      args: ['--headless','--no-sandbox']
>>>>>>> a70bc3fb1c4b0cda1f26ad147abe358d6966d4cb
    }
  })
  .forBrowser('chrome')
  .build()

setDefaultTimeout(60 * 1000)

module.exports = {
  driver,
  webdriver
}