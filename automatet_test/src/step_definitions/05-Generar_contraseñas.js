const { driver, webdriver } = require("../../config");
const assert = require('assert')
const { When, Given, Then } = require('cucumber');
const element = require("../helpers");
const { error } = require("console");
const { By } = webdriver;

const time = 2000
let globalServicio ="",globalUsuario ="";

Given ("El usuario presiona el botón generar contraseña",async()=>{
    await  (await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/div[1]/button[2]'))).click()
})
When ("Llena la información del formulario con servicio {string} usuario {string}",async(servicio,usuario)=>{

    globalServicio = servicio
    globalUsuario = usuario

    await driver.sleep(time)
    await driver.findElement(By.xpath('//*[@id="generate"]/div/div/form/div[1]/div[1]/div[1]/input')).sendKeys(servicio)
    await driver.findElement(By.xpath('//*[@id="generate"]/div/div/form/div[1]/div[1]/div[2]/input')).sendKeys(usuario)

})
Then ("Selecciona el tipo de contraseña y la longitud",async()=>{
    await driver.sleep(time)
    await driver.findElement(By.xpath('//*[@id="generate"]/div/div/form/div[1]/div[2]/div[1]/div/div/select')).sendKeys('Letras y numeros')
    await driver.findElement(By.xpath('//*[@id="cars"]')).sendKeys(10)
})
Then ("Presiona el botón de generar",async()=>{
    await driver.sleep(time)
    await driver.findElement(By.xpath('//*[@id="generate"]/div/div/form/div[1]/div[3]/div[1]/button')).click()
})
Then ("El sistema genera una contraseña",async()=>{
    await driver.sleep(time)
    assert.strictEqual(10 ,String(await driver.findElement(By.xpath('//*[@id="generate"]/div/div/form/div[1]/div[3]/div[2]/input')).getAttribute('value')).length)
})
Then ("presiona el botón guardar",async()=>{
    await driver.sleep(time)
    await driver.findElement(By.xpath('//*[@id="generate"]/div/div/form/div[2]/button[2]')).click()
    await driver.findElement(By.xpath('//*[@id="generate"]/div/div/form/div[2]/button[1]')).click()
})
Then ("la información se puede visualizar en la tabla",async()=>{
    await driver.sleep(time)
    assert.strictEqual(globalServicio, await driver.findElement(By.xpath('//*[@id="tBody"]/tr/td[2]')).getText())
    assert.strictEqual(globalUsuario, await driver.findElement(By.xpath('//*[@id="tBody"]/tr/td[3]')).getText())
})
