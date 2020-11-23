const { driver, webdriver } = require("../../config");
const assert = require('assert')
const { When, Given, Then } = require('cucumber');
const element = require("../helpers");
const { error } = require("console");
const { elementIsDisabled } = require("selenium-webdriver/lib/until");
const { By } = webdriver;

const time = 2000
Then("El botón guardar esta desactivado", async () => {
    await driver.sleep(time)
    elementIsDisabled(await driver.findElement(By.xpath('//*[@id="generate"]/div/div/form/div[2]/button[2]')))
})
Then ("El sistema muestra mensajes {string} en los campos con caracteres inválidos",async(message)=>{
    await driver.sleep(time)
    assert.strictEqual(message, await driver.findElement(By.xpath('//*[@id="generate"]/div/div/form/div[1]/div[1]/div[1]/small')).getText())
    assert.strictEqual(message, await driver.findElement(By.xpath('//*[@id="generate"]/div/div/form/div[1]/div[1]/div[2]/small')).getText())
    await driver.findElement(By.xpath('//*[@id="generate"]/div/div/form/div[2]/button[1]')).click()
})
