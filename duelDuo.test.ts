
import { Builder, Capabilities, By, WebElement } from "selenium-webdriver"
import { SeleniumServer } from "selenium-webdriver/remote"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    // driver.get('http://localhost:3000/')
    driver.get('http://127.0.0.1:5502/public/index.html')
    
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays div with id = choices', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    drawBtn.click()
    await driver.sleep(1000)
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button supplies 5 cards', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click()
    await driver.sleep(1000)    
    const choices = await driver.findElement(By.id('choices'))
    const children = await choices.findElements(By.className('bot-card outline'))
    
    expect(children.length).toBe(5)
    
})