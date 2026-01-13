export default class BaseScreen {
    protected async click(selector: string): Promise<void> {
        const el = $(selector)
        await el.waitForDisplayed({ timeout: 10000 })
        await el.click()
    }
}
