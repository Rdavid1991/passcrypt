const { driver, webdriver } = require("../../config");
const assert = require('assert')
const { When, Given, Then } = require('cucumber');

const element = require("../helpers");

const { By,until } = webdriver;

let [servicio, usuario, password] = "";
const time = 2000

Given('Usuario presiona el botón agregar contraseña', async () => {
    await driver.get('localhost:3000')
    //Registrar usuario
    await driver.findElement(By.xpath(element.registerButton)).click()
    await driver.sleep(time)
    await driver.findElement(By.xpath(element.inputSignUpEmail)).sendKeys('usuario@mail.com')
    await driver.findElement(By.xpath(element.inputSignUpUser)).sendKeys('usuario')
    await driver.findElement(By.xpath(element.inputSignUpPassword1)).sendKeys('password')
    await driver.findElement(By.xpath(element.inputSignUpPassword2)).sendKeys('password')
    await driver.findElement(By.xpath(element.buttonSignUpRegister)).click()

    await driver.sleep(time)
    await driver.findElement(By.xpath(element.buttonSignUpConfirm)).click()

    //Iniciar sesion
    await driver.sleep(time)
    await driver.findElement(By.xpath(element.inputSignInUser)).sendKeys('usuario')
    await driver.findElement(By.xpath(element.inputSignInPassword)).sendKeys('password')
    await driver.findElement(By.xpath(element.buttonSignInConect)).click()

    //Presionar boton agregar
    await driver.sleep(time)
    await driver.findElement(By.xpath(element.buttonAddPassword)).click()
    
})

When('Llena la información del formulario y presiona el botón guardar', async (table) => {

    [servicio, usuario, password] = table.rawTable[1];

    await driver.sleep(time)
    await driver.findElement(By.xpath(element.inputFormService)).sendKeys(servicio)
    await driver.findElement(By.xpath(element.inputFormUser)).sendKeys(usuario)
    await driver.findElement(By.xpath(element.inputFormPassword)).sendKeys(password)
    
    await driver.sleep(time)
    await driver.findElement(By.xpath(element.buttonFormSave)).click()
    await driver.sleep(time)
    await driver.findElement(By.xpath(element.buttonFormClose)).click()
})

Then('Se puede visualizar a información en pantalla', async () => {
    
    await driver.sleep(time)

    assert.strictEqual(servicio, await driver.findElement(By.xpath('//*[@id="tBody"]/tr/td[2]')).getText())
    assert.strictEqual(usuario, await driver.findElement(By.xpath('//*[@id="tBody"]/tr/td[3]')).getText())
})
