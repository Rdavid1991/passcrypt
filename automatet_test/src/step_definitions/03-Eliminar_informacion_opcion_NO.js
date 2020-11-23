const { driver, webdriver } = require("../../config");
const assert = require('assert')
const { When, Given, Then } = require('cucumber');
const element = require("../helpers");
const { elementIsDisabled, elementIsVisible, } = require("selenium-webdriver/lib/until");
const { By } = webdriver;

const time = 4000

Given("visualiza la opción para eliminar información", async () => {
    elementIsVisible(await driver.findElement(By.xpath('//*[@id="tBody"]/tr')));
})

When("presiona el botón eliminar", async () => {
    await driver.findElement(By.xpath(element.buttonTableDelete)).click()
})

Then("presiona no y la informacion no se elimina", async () => {
    await driver.sleep(time)
    await driver.findElement(By.xpath(element.buttonTableConfirmNo)).click()
    await driver.sleep(time)
    elementIsVisible(await driver.findElement(By.xpath('//*[@id="tBody"]/tr')));
})


