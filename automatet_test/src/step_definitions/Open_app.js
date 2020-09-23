const { driver, webdriver } = require("../../config");
const assert = require('assert')
const { When, Given, Then } = require('cucumber');
const {Browser,By} = webdriver;

Given('Usuario ejecuta la aplicacion', async () => {
    const title = await driver.getTitle()
    assert.strictEqual('BackUp',title)
})

When('Presiona enter / doble click', async() => {
    await driver.findElement(By.xpath('//*[@id="btntest"]')).click()
})

Then('La aplicacion se ejecuta', async() => {
    await driver.close()
})