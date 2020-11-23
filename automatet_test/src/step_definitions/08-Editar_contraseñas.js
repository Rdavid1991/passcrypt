const assert = require('assert')
const { When, Given, Then } = require('cucumber');
const element = require("../helpers");
const { error } = require("console");
const { elementIsDisabled } = require("selenium-webdriver/lib/until");
const { driver, webdriver } = require('../../config');
const { By } = webdriver;

let newPassword = "";
const time = 2000

Given("El usuario presiona el botón de Editar", async () => {
    await driver.sleep(time)
    await driver.findElement(By.xpath('//*[@id="tBody"]/tr/td[5]/div/i[1]')).click()
})

When("Se cambia la contraseña {string}", async (password) => {
    newPassword = password;

    await driver.sleep(time)
    await driver.findElement(By.xpath('//*[@id="modal-edit"]/div/div/div[2]/form/div[3]/i')).click()
    let editInput = await driver.findElement(By.xpath('//*[@id="modal-edit"]/div/div/div[2]/form/div[3]/input'))
    editInput.clear()
    editInput.sendKeys(password)
    
})

Then("Presiona el botón de Guardar", async () => {
    await driver.sleep(time)
    await driver.findElement(By.xpath('//*[@id="modal-edit"]/div/div/div[2]/form/div[4]/button[2]')).click()
})

Then("Se visualiza la nueva contraseña en el sistema", async () => {
    await driver.sleep(time)
    await driver.findElement(By.xpath('//*[@id="tBody"]/tr/td[4]/i')).click()
    assert.strictEqual(newPassword, await driver.findElement(By.xpath('//*[@id="tBody"]/tr/td[4]')).getText())
    await driver.sleep(time)
    driver.quit()
})