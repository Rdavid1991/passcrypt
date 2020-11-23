const { driver, webdriver } = require("../../config");
const assert = require('assert')
const { When, Given, Then } = require('cucumber');
const element = require("../helpers");
const { error } = require("console");
const { By } = webdriver;

const time = 4000

// Los pasos anteriores no estan para evitar errores de ambiguedad, osea ejecuta los pasos de otro test para luego saltar a este

Then("presiona si y la informacion no se elimina", async () => {
    await driver.sleep(time)
    await driver.findElement(By.xpath(element.buttonTableConfirmSi)).click()
})
