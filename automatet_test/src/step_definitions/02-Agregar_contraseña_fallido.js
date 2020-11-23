const { driver, webdriver } = require("../../config");
const assert = require('assert')
const { When, Given, Then } = require('cucumber');
const element = require("../helpers");
const { elementIsDisabled } = require("selenium-webdriver/lib/until");
const { By } = webdriver;


Given("El usuario presiona el botón agregar contraseña", async () => {
    await driver.sleep(2000)
    await driver.findElement(By.xpath(element.buttonAddPassword)).click()
})

When("Llena la información del formulario con", async (table) => {
    [servicio, usuario, password] = table.rawTable[1];

    await driver.sleep(1000)
    await driver.findElement(By.xpath(element.inputFormService)).sendKeys(servicio)
    await driver.findElement(By.xpath(element.inputFormUser)).sendKeys(usuario)
    await driver.findElement(By.xpath(element.inputFormPassword)).sendKeys(password)

    /* await driver.findElement(By.xpath(element.inputFormSave)).click()
    await driver.findElement(By.xpath(element.inputFormClose)).click() */
})

Then("El botón guardar esta desactivado y muestra mensaje en cada campo {string}", async (mensaje) => {

    assert.strictEqual(
        mensaje,
        await driver.findElement(
            By.xpath(
                element.messageCharInvalidService
            )
        ).getText()
    )

    assert.strictEqual(
        mensaje,
        await driver.findElement(
            By.xpath(
                element.messageCharInvalidUser
            )
        ).getText()
    )
    
    assert.strictEqual(
        mensaje,
        await driver.findElement(
            By.xpath(
                element.messageCharInvalidPassword
            )
        ).getText()
    )


    elementIsDisabled(await driver.findElement(
        By.xpath(element.buttonFormSave)
    ))

    await driver.findElement(By.xpath(element.buttonFormClose)).click()

})
