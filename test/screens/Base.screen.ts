import allure from '@wdio/allure-reporter'
export default class BaseScreen {
    protected async click(selector: string): Promise<void> {
        allure.addStep(`Clicking on ${selector}`)
        const el = $(selector)
        await el.waitForDisplayed({ timeout: 10000 })
        await el.click()
    }
    protected async type(selector: string, text: string): Promise<void> {
        allure.addStep(`Typing ${text} in ${selector}`)
        const el = $(selector)
        await el.waitForDisplayed({ timeout: 10000 })
        await el.setValue(text)
    }
    protected async swipe():Promise<void>{

    }
}