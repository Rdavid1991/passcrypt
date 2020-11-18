const { driver, webdriver } = require("../../config");
const assert = require('assert')
const { When, Given, Then } = require('cucumber');
const {Browser,By} = webdriver;

let [servicio, usuario, password] = "";

Given('Usuario presiona el botón agregar contraseña', async () => {
    //Registrar usuario
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/div/form/div[3]/button[2]')).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div[1]/div/form/div[1]/input')).sendKeys('usuario@mail.com')
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div[1]/div/form/div[2]/input')).sendKeys('usuario')
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div[1]/div/form/div[3]/input')).sendKeys('password')
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div[1]/div/form/div[4]/input')).sendKeys('password')
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div[1]/div/form/div[5]/button[1]')).click()

    await driver.sleep(1000)
    await driver.findElement(By.xpath('//*[@id="confirm"]/div/div/div/div/button')).click()

    //Iniciar sesion
    await driver.sleep(1000)
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/div/form/div[1]/input')).sendKeys('usuario')
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/div/form/div[2]/input')).sendKeys('password')
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/div/form/div[3]/button[1]')).click()

    //Presionar boton agregar
    await driver.sleep(1000)
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/div[1]/button[1]')).click()
})

When('Llena la información del formulario con', async(table) => {

    [servicio, usuario, password] = table.rawTable[1];

    await driver.sleep(1000)
    await driver.findElement(By.xpath('//*[@id="modal-form"]/div/div/div[2]/form/div[1]/input')).sendKeys(servicio)
    await driver.findElement(By.xpath('//*[@id="modal-form"]/div/div/div[2]/form/div[2]/input')).sendKeys(usuario)
    await driver.findElement(By.xpath('//*[@id="modal-form"]/div/div/div[2]/form/div[3]/input')).sendKeys(password)
})


Then('Presiona el botón guardar y se puede visualizar a información en pantalla', async() => {
    await driver.sleep(1000)
    await driver.findElement(By.xpath('//*[@id="modal-form"]/div/div/div[2]/form/div[4]/button[2]')).click()
    await driver.findElement(By.xpath('//*[@id="modal-form"]/div/div/div[2]/form/div[4]/button[1]')).click()
    await driver.sleep(1000)

    assert.strictEqual(servicio ,await driver.findElement(By.xpath('//*[@id="tBody"]/tr/td[2]')).getText())
    assert.strictEqual(usuario ,await driver.findElement(By.xpath('//*[@id="tBody"]/tr/td[3]')).getText())
})
